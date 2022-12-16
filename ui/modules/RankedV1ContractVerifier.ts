import { Rank, ContractVerifier } from './Rank';
import { CircuitString, Field, Poseidon, PublicKey } from 'snarkyjs';

import { app, database } from './firestore';
import { doc, getDoc } from 'firebase/firestore';
export class RankedV1ContractVerifier {
    zkClient: any;
    constructor(zkClient: any) {
        this.zkClient = zkClient;
    }

    verify = (rank: Rank) => {
        const rankField = this.getHashFromRank(rank);
        const verify = false;
        let martialArtHash: Field;
        if (rank.martialArt == "ibjjf")
            martialArtHash = this.zkClient!.getIbjjf();
        if (rank.martialArt == "itf")
            martialArtHash = this.zkClient!.getItf();
        if (rank.martialArt == "wkf")
            martialArtHash = this.zkClient!.getWkf();

        return rankField.toString() == martialArtHash!.toString();
    }

    async promote(certifier: PublicKey, newRank: Rank) {
        const currentRank = await this.getCurrentRank(newRank.address, newRank.martialArt);
        const currentField = this.getHashFromRank(currentRank);
        const newField = this.getHashFromRank(newRank);
        await this.zkClient!.createCertifyTransaction(currentRank.martialArt, certifier, currentField, newField);
    }

    private async getCurrentRank(address: PublicKey, martialArt: string) {
        const docRef = doc(database, "users", address.toBase58());
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const ma = docSnap.data().martialArts;
            for(var i =0; i < ma.length; i++) {
                let one = ma[i];
                if(one.martialArtShortName == martialArt) {
                    let rank = new Rank();
                    rank.address = address;
                    rank.martialArt = one.martialArtShortName;
                    rank.rank = one.martialArtShortName;

                    return rank;
                }
            }
        }
        return new Rank();
    }
    private getHashFromRank(rank: Rank) {
        const stringData = CircuitString.fromString(JSON.stringify(rank));
        const fields = stringData.toFields();
        const data = Poseidon.hash(fields);
        return data;
    }
}
