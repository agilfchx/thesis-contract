import { Zakat } from '../pages/abi/abi';
import Web3 from 'web3';

const useContract = () => {
  const web3 = new Web3(Web3.givenProvider);
  const contractAddress = '0x1B3475df738403a3386E48Fca6Ea135AEf48452C'; // Change this to deployed contract address
  const zakatContract = new web3.eth.Contract(Zakat, contractAddress);
  return zakatContract;
};

export default useContract;
