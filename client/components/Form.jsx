import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Modal from '../components/ModalError';
import useContract from '../hooks/useContract';
import Web3 from 'web3';

export default function Form() {
  const contract = useContract();
  const [modal, setModal] = useState(false);
  const randomUID = Math.floor(Math.random() * 10000);
  const extID = 'ZAKAT-' + randomUID;
  const [nominal, setNominal] = useState(0);
  const [zakatNominal, setZakatNominal] = useState(0);
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const calculateZakat = (nominal) => {
    const zakat = nominal * 0.025;
    return zakat;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    const address = web3.utils.toChecksumAddress(accounts[0]);
    const check = await contract.methods.checkPayment(address).call();
    
    if (check) {
      const pdf = await fetch('/api/pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: extID,
          name: title + name,
          email,
          phoneNumber: phone,
          amount: zakatNominal,
        }),
      });
      const res = await pdf.json();
      const hash = res.path;

      const resp = await contract.methods
        .store(extID, title + name, email, phone, zakatNominal, hash)
        .send({ from: address, gas: 10000000 });
      console.log(resp);

      const pay = await fetch('/api/invoice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          extID,
          email,
          description: title + name,
          amount: zakatNominal,
        }),
      });
      const rez = await pay.json();
      window.location.href = rez.invoice.invoice_url;
    } else {
      setModal(true);
    }
  };

  useEffect(() => {
    setZakatNominal(calculateZakat(nominal));
  }, [nominal]);

  return (
    <>
      <h1 className="mt-8 text-4xl font-bold">Pay Zakat</h1>
      <div className="m-8">
        <form className="flex flex-col items-center justify-center w-full h-full">
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="income"
            >
              Income
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm font-bold bg-gray-300 border border-r-0 border-black rounded-l-md">
                Rp.
              </span>
              <input
                type="number"
                className="rounded-none rounded-r-lg border block flex-1 w-96 text-sm p-2.5 bg-white border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your income"
                onChange={(e) => setNominal(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                className="block pt-2 mb-2 text-sm font-medium text-gray-900"
                htmlFor="nominal"
              >
                Zakat Nominal
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm font-bold bg-gray-300 border border-r-0 border-black rounded-l-md">
                  Rp.
                </span>
                <input
                  type="text"
                  className="rounded-none rounded-r-lg border block flex-1 w-96 text-sm p-2.5 bg-slate-100 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                  disabled={true}
                  value={calculateZakat(nominal)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full h-full mt-4">
              <p className="text-sm text-gray-500">
                —Fill the field above for your personal data—
              </p>
            </div>

            <h3 className="block pt-2 mb-2 text-sm font-medium text-gray-900">
              Title
            </h3>
            <ul className="grid w-full gap-6 md:grid-cols-2">
              <li>
                <input
                  type="radio"
                  id="mister"
                  name="title"
                  value="Mr."
                  className="hidden peer"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label
                  htmlFor="mister"
                  className="inline-flex items-center justify-between w-full px-2 py-1 bg-gray-800 border border-gray-700 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-slate-400 text-slate-300 hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">Mr.</div>
                  </div>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="miss"
                  name="title"
                  value="Mrs."
                  className="hidden peer"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label
                  htmlFor="miss"
                  className="inline-flex items-center justify-between w-full px-2 py-1 bg-gray-800 border border-gray-700 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-slate-400 text-slate-300 hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">Mrs.</div>
                  </div>
                </label>
              </li>
            </ul>

            <div>
              <label
                className="block pt-2 mb-2 text-sm font-medium text-gray-900"
                htmlFor="name"
              >
                Name
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-[1.1rem] text-sm rounded-l-md border border-r-0 bg-gray-300 border-black font-bold">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <input
                  type="text"
                  className="rounded-none rounded-r-lg border block flex-1 w-96 text-sm p-2.5 bg-white border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label
                  className="block pt-2 mb-2 text-sm font-medium text-gray-900"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-[1.1rem] text-sm rounded-l-md border border-r-0 bg-gray-300 border-black font-bold">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <input
                    type="email"
                    className="rounded-none rounded-r-lg border block flex-1 w-96 text-sm p-2.5 bg-white border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label
                  className="block pt-2 mb-2 text-sm font-medium text-gray-900"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-[1.1rem] text-sm rounded-l-md border border-r-0 bg-gray-300 border-black font-bold">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <input
                    type="phone"
                    className="rounded-none rounded-r-lg border block flex-1 w-96 text-sm p-2.5 bg-white border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your phone"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <button
              className="focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 w-[436px] p-2.5 my-4 font-medium rounded-lg text-lg uppercase"
              onClick={handleSubmit}
            >
              Pay
            </button>
          </div>
        </form>
        <Modal show={modal} onClose={() => setModal(false)} />
      </div>
    </>
  );
}
