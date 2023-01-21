import { Zakat } from '../pages/abi/abi';
import Web3 from 'web3';

const useContract = () => {
  const web3 = new Web3(Web3.givenProvider);
  const contractAddress = '0x673B2F22C6DC63FB0e1d4847Df1Ff30C51808024'; // Change this to deployed contract address
  const zakatContract = new web3.eth.Contract(Zakat, contractAddress);
  return zakatContract;
};

export default useContract;
