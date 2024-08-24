import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";
import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
import { HDNodeWallet } from 'ethers';
// import ethUtil from "ethereumjs-util";
// const ethUtil = require("ethereumjs-util");
class MyWallet{
    constructor(mnemonicByteSize, mnemonic=undefined) {
        this.accountNumber = 0;
        if ( mnemonic !== undefined ) { this.mnemonic = mnemonic; } 
        else { this.mnemonic = generateMnemonic(mnemonicByteSize);}
        this.seed = mnemonicToSeedSync(this.mnemonic);
    }
    generateNewAccount(currency="SOL") {
        const cur = this.getCurrencyCode(currency);
        this.path = `m/44'/${cur}'/0'/0'/${this.accountNumber}'`;
        console.log(this.path)
        const derivedSeed = derivePath(this.path, this.seed.toString("hex")).key;
        const privateKeyUint8Array64byte = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;

        if (currency == "SOL") {
            const privateKey = bs58.encode(privateKeyUint8Array64byte.subarray(0, 32));
            const publicKey = Keypair.fromSecretKey(privateKeyUint8Array64byte).publicKey.toBase58();
        } else if (currency == "ETH") {
            let wallet = HDNodeWallet.fromPhrase(this.mnemonic, "" ,this.path);
            console.log(`\nprivateKey: ${wallet.privateKey}\npublicKey: ${wallet.publicKey}\naddress: ${wallet.address}`);
            const hdNode = HDNodeWallet.fromSeed(this.seed);
            console.log(`\nhdNode.privateKey: ${hdNode.privateKey}\nhdNode.publicKey: ${hdNode.publicKey}\nhdNode.address: ${hdNode.address}`);
            const child = hdNode.derivePath(this.path);
            console.log(`\nchild.privateKey: ${child.privateKey}\nchild.publicKey: ${child.publicKey}\nchild.address: ${child.address}`);
        }
        this.accountNumber += 1
        // return {privateKey, publicKey};
    }
    getCurrencyCode(currency) {
        const currenciesCodeSet = {
            "SOL": 501,
            "ETH": 60,
            "BTC": 0
        };
        return currenciesCodeSet[currency];
    }
}
// this mnemonic is for development purpose, it nither has nor will have no money. I will delete and forget it after i'm done.
// acount 1:
const sol_pub_key1 = "J7Kmbc6su6xBQATFiqXP9RirfHXNYbevtDdpXy7Eyso2"
const eth_pub_key1 = "0xb78f9955b0F634Ee276a791B70Be5AfE3CDee82e"
// account 2:
const sol_pub_key2 = "EgTZxFP1iJGDP4mJzpezBeMg7eCKYRf1XuEWWCtCm1As"
const eth_pub_key2 = "0xAbCad69514fA9aE66f8C7C4D9fD92b4375Be27CB"

// mnemonic are so funny :>
const UserWallet = new MyWallet(128, "nut music stem shop company dignity cloud warfare dream deputy food wedding");
console.log(UserWallet.generateNewAccount("ETH"));
console.log(UserWallet.generateNewAccount("ETH"));
// console.log(UserWallet.generateNewAccount());
// console.log(UserWallet.generateNewAccount());