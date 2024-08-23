// Dont mind me. it's gonna get replaced by backend.js
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";

export function createMnemonic() {
    const mnemonic = generateMnemonic();
    const seed = mnemonicToSeedSync(mnemonic);
    return mnemonic;
}

export function getNewKeypair() {
    return keypair.generate();
    // Extract public & private key
    const publicKey = keypair.publicKey.toString();
    const privateKey = keypair.privateKey;
}
// how to sign?
// const signature = nacl.sign.detached(message, privateKey);

// export function verifyKeys(message, privateKey) {
//     const result = nacl.sign.detached.verify(
//         message,
//         signature,
//         keypair.publicKey.toBytes()
//     );
//     return result