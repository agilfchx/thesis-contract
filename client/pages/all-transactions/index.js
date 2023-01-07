import { useState } from 'react';
import Table from '../../components/Table';
import { Zakat } from '../abi/abi';
import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider);
const contractAddress = '0xB631e207F023605178EB4a45a79F670782Fa54DE'; // Change this to deployed contract address
const zakatContract = new web3.eth.Contract(Zakat, contractAddress);

const AllTransactions = () => {
  const [data, setData] = useState([]);

  const handleGetAllTransactions = async () => {
    const allData = await zakatContract.methods.getAll().call();
    setData(allData);
  };

  return (
    <div className="flex flex-col justify-center mt-4 mb-12 min-w-96">
      <div className="flex justify-center m-4">
        <h1 className="text-4xl font-bold">All Transactions</h1>
      </div>
      <div className="overflow-x-auto relative mx-36">
        <div className="pb-4 ml-1">
          <button
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center  focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 rounded-lg focus:ring-4 focus:ring-primary-300 "
            onClick={handleGetAllTransactions}
          >
            Cari
          </button>
        </div>
        <Table item={data} />
      </div>
    </div>
  );
};

export default AllTransactions;
