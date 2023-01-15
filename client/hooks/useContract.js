import { Zakat } from '../pages/abi/abi';
import Web3 from 'web3';

const useContract = () => {
  const web3 = new Web3(Web3.givenProvider);
  const contractAddress = '0xdB3912E6972c05692Ec7d0Adc5EdBCa651889f1d'; // Change this to deployed contract address
  const zakatContract = new web3.eth.Contract(Zakat, contractAddress);
  return zakatContract;
};

export default useContract;
