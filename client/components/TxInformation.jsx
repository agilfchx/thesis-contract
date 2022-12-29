import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function TxInformation() {
  return (
    <div className="flex flex-col px-4 py-6 space-y-4 bg-white w-[500px] border border-gray-900/50 rounded-md shadow-lg m-8">
      <p className="text-xl font-semibold uppercase">
        Transactions Information
      </p>
      <div>
        <p className="uppercase font-bold text-sm">Transaction Hash</p>
        <p className="text-slate-800">0x5AD712D...14JL</p>
      </div>
      <div>
        <p className="uppercase font-bold text-sm">User Address</p>
        <p className="text-slate-800">0x74D3JH2...FD5A</p>
      </div>
      <div>
        <p className="uppercase font-bold text-sm">Date</p>
        <p className="text-slate-800">10 December 2022</p>
      </div>
      <div>
        <p className="uppercase font-bold text-sm">Name</p>
        <p className="text-slate-800">Asep Resing</p>
      </div>
      <div>
        <p className="uppercase font-bold text-sm">Nominal</p>
        <p className="text-slate-800">Rp150.000</p>
      </div>
      <div>
        <p className="uppercase font-bold text-sm">Status</p>
        <p className="text-slate-800">PAID</p>
      </div>
      <div className="flex justify-between">
        <p className="uppercase font-bold text-sm">Invoice</p>
        <p>
          <FontAwesomeIcon icon={faDownload} className="text-2xl" width={20} />
        </p>
      </div>
    </div>
  );
}
