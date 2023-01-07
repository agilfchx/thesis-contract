import { useState } from 'react';
import TableHistory from '../../components/TableHistory';
import { Zakat } from '../abi/abi';
import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider);
const contractAddress = '0xB631e207F023605178EB4a45a79F670782Fa54DE'; // Change this to deployed contract address
const zakatContract = new web3.eth.Contract(Zakat, contractAddress);

export default function CheckTransactions() {
  const [search, setSearch] = useState('');
  const [zakatID, setZakatID] = useState([]);
  const [date, setDate] = useState([]);
  const [amount, setAmount] = useState([]);
  const handleSearchHistory = async () => {
    const allData = await zakatContract.methods.getHistory(search).call();
    setZakatID(allData[0]);
    setDate(allData[1]);
    setAmount(allData[2]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex items-center justify-center w-full text-center m-4">
        <h1 className="text-4xl font-bold">Check History</h1>
      </div>
      <div className="flex flex-col items-center justify-center  max-w-7xl px-4 py-6 space-y-4 bg-white border border-gray-300 rounded-md shadow-md">
        <div className="flex flex-col items-center justify-center w-full space-y-2">
          <div className="flex justify-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="border text-sm rounded-lg block w-[35rem] pl-10 p-2.5 bg-white border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search Address"
                required
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button
              className="p-2.5 ml-2 text-sm font-medium text-white  rounded-full border border-blue-700 focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              onClick={handleSearchHistory}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </div>
      <TableHistory zakatID={zakatID} date={date} amount={amount} />
    </div>
  );
}