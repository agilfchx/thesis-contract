import { Zakat } from '../pages/abi/abi';
import Web3 from 'web3';

const useContract = () => {
  const web3 = new Web3(Web3.givenProvider);
  const contractAddress = '0x031eeE05A0dF56f31faBd829d7EF33D8279eb8f9'; // Change this to deployed contract address
  const zakatContract = new web3.eth.Contract(Zakat, contractAddress);
  return zakatContract;
};

export default useContract;
