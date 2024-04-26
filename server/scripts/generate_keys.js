const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

const private_key_1 = secp.secp256k1.utils.randomPrivateKey();
console.log(toHex(private_key_1));
const public_key_1 = secp.secp256k1.getPublicKey(private_key_1);
// console.log(public_key);
console.log("address", toHex(public_key_1).slice(-20));
const private_key_2 = secp.secp256k1.utils.randomPrivateKey();
console.log(toHex(private_key_2));
const public_key_2 = secp.secp256k1.getPublicKey(private_key_2);
// console.log(public_key);
console.log("address", toHex(public_key_2).slice(-20));
const private_key_3 = secp.secp256k1.utils.randomPrivateKey();
console.log(toHex(private_key_3));
const public_key_3 = secp.secp256k1.getPublicKey(private_key_3);
// console.log(public_key);
console.log("address", toHex(public_key_3).slice(-20));
