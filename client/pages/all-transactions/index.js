import { useEffect, useState } from 'react';
import Table from '../../components/Table';
import useContract from '../../hooks/useContract';

const AllTransactions = () => {
  const contract = useContract();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const datas = await contract.methods.getAll().call();
      setData(datas);
    };
    getData();
  }, [contract]);

  return (
    <div className="flex flex-col justify-center mt-4 mb-12 min-w-96">
      <div className="flex justify-center m-4">
        <h1 className="text-4xl font-bold">All Transactions</h1>
      </div>
      <div className="relative overflow-x-auto mx-36">
        <Table item={data} />
      </div>
    </div>
  );
};

export default AllTransactions;
