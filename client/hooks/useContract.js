import { Zakat } from '../pages/abi/abi';
import Web3 from 'web3';

const useContract = () => {
  const web3 = new Web3(Web3.givenProvider);
  const contractAddress = '0xe55A994A2ADa05B8A051c22E8F3E3a27b39C5A7b'; // Change this to deployed contract address
  const zakatContract = new web3.eth.Contract(Zakat, contractAddress);
  return zakatContract;
};

export default useContract;
