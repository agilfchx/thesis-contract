import {ethers} from 'ethers';
import { Zakat } from '../pages/abi/abi';

const ownerPK = '83ee645b4346569e0be487c43a2b38a3e6a4d99a2e084ee5a63853b81ade70d2';

const useOwner = () => {
    const rpcUrl = 'HTTP://192.168.0.105:8545';
    const contractAddress = '0x031eeE05A0dF56f31faBd829d7EF33D8279eb8f9'; // Change this to deployed contract address
    
    const customHttpProvider = new ethers.providers.JsonRpcProvider(
        rpcUrl,
    );
    // Konfirmasi Transaksi oleh wallet / Signers
    const wallet = new ethers.Wallet(
        ownerPK,
        customHttpProvider,
    );
    const tokenContract = new ethers.Contract(
        contractAddress,
        Zakat,
        wallet
    );
    return tokenContract;
}

export default useOwner;