import { useState, useEffect } from 'react';
import Form from '../../components/Form';
import ConnectMetamask from '../../components/ConnectMetamask';

const PayZakat = () => {
  const [isConnected, setIsConnected] = useState(false);

  const handleSubmit = () => {
    console.log('submit');
  };

  useEffect(() => {
    if (window.ethereum) {
      try {
        window.ethereum.request({ method: 'eth_accounts' }).then((accounts) => {
          if (accounts.length > 0) {
            setIsConnected(true);
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center w-1/2 h-1/2">
        {isConnected ? <Form /> : <ConnectMetamask />}
      </div>
    </div>
  );
};

export default PayZakat;
