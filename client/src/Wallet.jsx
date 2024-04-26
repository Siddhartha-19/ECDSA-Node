import server from "./server";
import * as secp from "ethereum-cryptography/secp256k1";
import { toHex } from "ethereum-cryptography/utils";
function Wallet({ address, setAddress, balance, setBalance,private_key,setPrivate_key }) {
  

  async function onChange(evt) {
    const privateKey = evt.target.value;
    setPrivate_key(privateKey);
    const address = toHex(secp.secp256k1.getPublicKey(privateKey)).slice(-20);
    setAddress(address);
    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Wallet Address
        <input placeholder="Type your private key, for example: your private key" value={private_key} onChange={onChange}></input>
      </label>
      <div>Address: {address}</div>
      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
