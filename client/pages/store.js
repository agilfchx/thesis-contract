import { useEffect, useState } from 'react';
import { SimpleStorage } from './abi/abi';
import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider);
const contractAddress = '0xBAca6e7727b341A22a2A9C3033c5c00db1cDB806';
const storageContract = new web3.eth.Contract(SimpleStorage, contractAddress);

export default function Store() {
  const [number, setUint] = useState(0);
  const [name, setName] = useState('');
  const [nameOutput, setNameOutput] = useState({});

  useEffect(() => {
    console.log(nameOutput);
  }, [nameOutput]);

  const numberSet = async (t) => {
    t.preventDefault();
    const accounts = await window.ethereum.enable();
    const gas = await storageContract.methods.set(number, name).estimateGas();
    const result = await storageContract.methods
      .set(number, name)
      .send({ from: accounts[0], gas });
    console.log(result);
  };

  const numberGet = async (t) => {
    t.preventDefault();
    const result = await storageContract.methods.get().call();
    setNameOutput(result);
  };

  return (
    <div>
      <form onSubmit={numberSet}>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <input type="number" onChange={(e) => setUint(e.target.value)} />
        <button type="submit">Set</button>
      </form>
      <button onClick={numberGet}>Get</button>
      <p>
        {nameOutput.map((item) => {
          return <p>{item.name}</p>;
        })}
      </p>
    </div>
  );
}
