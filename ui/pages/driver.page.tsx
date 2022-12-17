// Delete record for user address

// change instructor

// verify 

import { useEffect, useState } from "react";
import { CircuitString, Poseidon, PublicKey } from "snarkyjs";
import UserApiClient from "../modules/UserApiClient";
import './reactCOIServiceWorker';
import ZkappWorkerClient from './rankedWorkerClient';
import { doc, deleteDoc } from "firebase/firestore";
import { app, database } from '../modules/firestore';
import { isPropertySignature } from "typescript";

export default function db() {

    let [state, setState] = useState({
        zkappWorkerClient: null as null | ZkappWorkerClient,
        zkappPublicKey: null as null | PublicKey,
        hasWallet: null as null | boolean,
        hasBeenSetup: false,
        accountExists: false,
        query: "",
        onchain: "",
        json: "",
        deleteAddress: "",
        instructorAddress: "",
        queried: false,
        onchained: false,
        currentInstructor: "",
        sampleJson: ""
    });

    const sj = {"address":"B62qoGMg2RLUiJrpdXxydg9jZik4sfT7s9NgYESTToRLhpYNeGddr7z","martialArt":"wkf","rank":"Black Belt"};
                const samplej = JSON.stringify(sj);

    useEffect(() => {
        (async () => {
            if (!state.hasBeenSetup) {
                
                const zkappWorkerClient = new ZkappWorkerClient();

                console.log('Loading SnarkyJS...');
                await zkappWorkerClient.loadSnarkyJS();
                console.log('done');

                await zkappWorkerClient.setActiveInstanceToBerkeley();

                const mina = (window as any).mina;

                if (mina == null) {
                    setState({ ...state, hasWallet: false });
                    return;
                }

                const publicKeyBase58: string = (await mina.requestAccounts())[0];
                const publicKey = PublicKey.fromBase58(publicKeyBase58);

                console.log('using key', publicKey.toBase58());

                console.log('checking if account exists...');
                const res = await zkappWorkerClient.fetchAccount({ publicKey: publicKey! });
                const accountExists = res.error == null;

                await zkappWorkerClient.loadContract();

                console.log('compiling zkApp');
                await zkappWorkerClient.compileContract();
                console.log('zkApp compiled');

                const zkappPublicKey = PublicKey.fromBase58('B62qiijS17F93uaP4EGAXPgXKwm9B9YoqUuYRfuMrnoCSGnQ23Y4NBG');
                await zkappWorkerClient.initZkappInstance(zkappPublicKey);

                console.log('getting zkApp state...');
                await zkappWorkerClient.fetchAccount({ publicKey: zkappPublicKey })
                const currentNum = await zkappWorkerClient.getIbjjf();
                console.log('current ibjjf:', currentNum.toString());
                const currentInstructor = await zkappWorkerClient.getInstructor();
                console.log('current instructor: ', currentInstructor.toBase58());

                setState({
                    ...state,
                    zkappWorkerClient,
                    hasWallet: true,
                    hasBeenSetup: true,
                    zkappPublicKey,
                    accountExists,
                });
            }
        })();
    }, []);

    const handleStudentChange = async (e: any) =>  {
        setState({ ...state, deleteAddress: e.target.value });
    }

    const handleInstrutorChange = async (e: any) =>  {
        setState({ ...state, instructorAddress: e.target.value });
    }

    const handleJsonChange = async (e: any) => {
        setState({ ...state, json: e.target.value });
    }

    // const handleQueryChange = async (e: any) => {
    //     setState({ ...state, query: e.target.value });
    // }

    // const handleOnchainChange = async (e: any) => {
    //     setState({ ...state, onchain: e.target.value });
    // }

    const checkDB = async (event: any) => {
        event.preventDefault();
            
        console.log('checking DB...');
        var input = JSON.parse(state.json);
        UserApiClient().addMartialArt(input.address, input.martialArt, input.martialArt, input.rank)
        console.log("added");
        setState({ ...state,  queried: true, onchained: true });
    }
    const deleteData = async (event: any) => {
        event.preventDefault();

        const docRef = doc(database, "users", state.deleteAddress);
        const docSnap = await deleteDoc(docRef);
    }

    const verifyRank = async (event: any) => {
        event.preventDefault();
            
        console.log('verifying rank...');
        console.log(state.json);
        var input = JSON.parse(state.json);
        const promotion1stringData = CircuitString.fromString(JSON.stringify(input));
        const promotion1fields = promotion1stringData.toFields();
        const promotion1Data = Poseidon.hash(promotion1fields);

        await state.zkappWorkerClient!.fetchAccount({ publicKey: state.zkappPublicKey! })
        const currentNum = await state.zkappWorkerClient!.getRank(input.martialArt);
        console.log('current state:', currentNum.toString());
        console.log('new state:', promotion1Data.toString());
        
        console.log("Valid?: ", promotion1Data.toString() == currentNum.toString());
        setState({ ...state, onchained:true, queried:true,  onchain: currentNum.toString(), query: promotion1Data.toString()});

    }

    const getCurrentInstructor = async (event: any) => {
    event.preventDefault();
        await state.zkappWorkerClient!.fetchAccount({ publicKey: state.zkappPublicKey! })
        const instructor = await state.zkappWorkerClient!.getInstructor();
        setState({ ...state,  currentInstructor: instructor.toBase58()});
    }

    const changeInstructor = async (event: any) => {
        event.preventDefault();
        await state.zkappWorkerClient!.fetchAccount({ publicKey: state.zkappPublicKey! });
        console.log("contract address:", state.zkappPublicKey?.toBase58())
        const blackbelt = PublicKey.fromBase58(state.instructorAddress);
        console.log("sending blackbelt as: ", blackbelt.toBase58());
        await state.zkappWorkerClient!.createUpdateBlackBeltTransaction(blackbelt);

        console.log('creating proof...');
        await state.zkappWorkerClient!.fetchAccount({ publicKey: state.zkappPublicKey! });
        await state.zkappWorkerClient!.proveUpdateTransaction();
        await state.zkappWorkerClient!.fetchAccount({ publicKey: state.zkappPublicKey! });

        console.log('getting Transaction JSON...');
        const transactionJSON = await state.zkappWorkerClient!.getTransactionJSON()
        let transactionFee = 0.1;
        await state.zkappWorkerClient!.fetchAccount({ publicKey: state.zkappPublicKey! });

        console.log('requesting send transaction...');
        const { hash } = await (window as any).mina.sendTransaction({
            transaction: transactionJSON,
            feePayer: {
                fee: transactionFee,
                memo: '',
            },
        });

        console.log(
            'See transaction at https://berkeley.minaexplorer.com/transaction/' + hash
        );
    }

    return (
        <>
            <main className="site-content">
                <section className="hero section has-top-divider"
                >
                    <div className="container-sm">
                        <div className="hero-inner section-inner">
                            <div className="hero-content">
                                <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                                    <span className="text-color-primary">Ranked</span> companion
                                </h1>
                                <div className="container-xs">
                                    {!state.hasBeenSetup && <h3>Loading SnarkyJS...</h3>}
                                    <div className="reveal-from-bottom" data-reveal-delay="600">
                                        <form>
                                            <fieldset>
                                                <div className="mb-32">
                                                    <label className="form-label" htmlFor="instructor">Instructor Address</label>
                                                    <input type="text" id="instructor" onChange={handleInstrutorChange} name="instructor" placeholder="Enter new Instructor Address" className='form-input' />
                                                    <div className="button-group mt-16 mb-32">
                                                        <button className="button button-primary button-wide-mobile" onClick={changeInstructor}>Change Instructor</button>
                                                        <button className="button button-dark button-wide-mobile" onClick={getCurrentInstructor}>Current Instructor</button>
                                                    </div>
                                                    <div>{state.currentInstructor}</div>
                                                </div>
                                                <div className="has-top-divider pt-32 ">
                                                    <div className="mb-16">
                                                        <label className="form-label" htmlFor="student">Delete student DB ranks</label>
                                                        <input type="text" id="student" onChange={handleStudentChange} name="student" placeholder="Enter student address to remove ranks" className='form-input' />
                                                        <div className="button-group mt-16">
                                                            <button className="button button-primary button-wide-mobile" onClick={deleteData}>Delete student data </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="has-top-divider pt-32 ">
                                                    <div className="mb-16">
                                                        <div>
                                                            Possible Martial Arts: ibjjf, itf, wkf
                                                        </div>
                                                        <label className="form-label" htmlFor="json">Compare rank on-chain. </label>
                                                        <textarea id="json" name="json" className='form-input' onChange={handleJsonChange} >
                                                            
                                                        </textarea>
                                                        <div>
                                                            e.g. json
                                                            <p>{samplej}</p>
                                                        </div>
                                                        <div className="button-group mt-16">
                                                            <button className="button button-primary button-wide-mobile" onClick={verifyRank}>Compare with on chain </button>
                                                        </div>
                                                        <div className="mt12">
                                                            {state.queried && state.onchained && <table>
                                                                <tr>
                                                                    <td>On-chain</td>
                                                                    <td>{state.onchain}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>JSON</td>
                                                                    <td>{state.query}</td>
                                                                </tr>
                                                            </table> }
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
