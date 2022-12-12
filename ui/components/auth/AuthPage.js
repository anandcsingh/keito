import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../layout/Header'
import Authentication from '../../modules/Authentication';
import Router from 'next/router';
import { useEffect, useState } from "react";
import ZkappWorkerClient from '../../modules/zkappWorkerClient';
import Snackbar from '../../modules/Snackbar'


import {
  PublicKey,
  PrivateKey,
  Field,
} from 'snarkyjs'

const AuthPage = ({ children }) => {

  let [state, setState] = useState({
    authentication: null,
    hasWallet: null,
    hasBeenSetup: false,
    accountExists: false,
    currentNum: null,
    publicKey: null,
    zkappPublicKey: null,
    creatingTransaction: false,
    snarkyLoaded: false,
    showRequestingAccount: false,
    showCreateWallet: false,
    showFundAccount: false,
    showLoadingContracts: false
  });

  useEffect(() => {
    (async () => {
      if (!Authentication.loggedIn) {
        if (!state.hasBeenSetup) {

          const zkappWorkerClient = new ZkappWorkerClient();
          Authentication.setZkClient(zkappWorkerClient);
          console.log('Loading SnarkyJS...');
          await zkappWorkerClient.loadSnarkyJS();
          console.log('done');
          setState({ ...state, snarkyLoaded: true });

          await zkappWorkerClient.setActiveInstanceToBerkeley();

          const mina = window.mina;

          if (mina == null) {
            setState({ ...state, hasWallet: false, snarkyLoaded: true });
            return;
          }
          else {
            setState({ ...state, hasWallet: true, snarkyLoaded: true, showRequestingAccount: true });
          }
          try {
            await Authentication.login();
          }
          catch (e) {
            
            if (e.message == "user reject") {
              Snackbar("You cancelled connection with Mina wallet!", 1500);
            }
            else if (e.message == "please create or restore wallet first") {
              setState({ ...state, showCreateWallet: true, hasWallet: true, snarkyLoaded: true, showRequestingAccount: false });
            }
          }

          const publicKey = PublicKey.fromBase58(Authentication.address);

          console.log('checking if account exists...');
          const res = await zkappWorkerClient.fetchAccount({ publicKey: publicKey });
          const accountExists = res.error == null;
          if (!accountExists) {
            setState({ ...state, showFundAccount: true, showCreateWallet: false, hasWallet: true, snarkyLoaded: true, showRequestingAccount: false });
          }
          else {


            setState({ ...state, showLoadingContracts: true, showFundAccount: false, showCreateWallet: false, hasWallet: true, snarkyLoaded: true, showRequestingAccount: false });
            await zkappWorkerClient.loadContract();

            console.log('compiling zkApp');
            await zkappWorkerClient.compileContract();
            console.log('zkApp compiled');

            const zkappPublicKey = PublicKey.fromBase58('B62qqEme9EYMj3KC4vSXij2vAwt8qxLiKLsrHPprQeYXXmjTFUH16wF');

            await zkappWorkerClient.initZkappInstance(zkappPublicKey);
            setState({ ...state, hasBeenSetup: true, showLoadingContracts: false, showFundAccount: false, showCreateWallet: false, hasWallet: true, snarkyLoaded: true, showRequestingAccount: false });
          }

        }
      }
    })();
  }, []);



  const loginClicked = async () => {
    try {
      const loggedIn = await Authentication.login();
      if (loggedIn) {
        Router.push('/dashboard');
      }
    }
    catch (e) {
      console.log("Login Failed", e.message);
      if (e.message == "user reject") {
        Snackbar("You cancelled connection with Mina wallet!", 1500);
      }
    }
    // const loggedIn = Authentication.login();
    // if (Authentication.loggedIn) {
    //   Router.push('/dashboard')
    // }
  }
  return (
    <div>
      <div>
        <Header hideExtraNav={false} navPosition="right" className="reveal-from-bottom" hideNav={false} hideSignin={false} bottomOuterDivider={false} bottomDivider={false} />
        <main className="site-content">
          {!state.hasBeenSetup ?
            <section className="hero section center-content has-top-divider">
              <div className="container-sm">
                <div className="hero-inner section-inner">
                  <div className="hero-content">
                    <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                      Getting things ready...

                    </h1>
                    <div className="container-xs">
                      <div className={`${!state.snarkyLoaded || state.showRequestingAccount || state.showLoadingContracts ? 'loading-snarky' : ''} m-0 mb-32 reveal-from-bottom login-subtext p-16`} data-reveal-delay="400">
                        <div style={{ display: state.snarkyLoaded ? "none" : "block" }}>
                          Loading <span className="text-color-primary">SnarkyJS</span>...
                        </div>
                        {state.hasWallet != null && !state.hasWallet &&
                          <div>
                            Could not find a wallet. Install Auro wallet here <a href='https://www.aurowallet.com/' target="_blank" rel="noreferrer">Auro wallet</a>
                          </div>
                        }

                        {state.showRequestingAccount &&
                          <div>Requesting account</div>
                        }

                        {state.showCreateWallet &&
                          <div>Please create or restore a wallet first!</div>
                        }
                        {state.showFundAccount &&
                          <div>Your account does not exist, visit the <a href="https://faucet.minaprotocol.com/" target="_blank" rel="noreferrer">faucet</a> to fund it</div>
                        }

                        {state.showLoadingContracts &&
                          <div>Loading contracts...</div>
                        }



                      </div>
                      <div className="reveal-from-bottom login-btn-container" data-reveal-delay="600">
                        {/* Button area */}
                      </div>

                    </div>
                  </div>


                </div>
              </div>
            </section>
            :
            <div>
            {children}
            </div>
          }
        </main>
      </div>

    </div>

  );

}

export default AuthPage;