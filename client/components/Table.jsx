import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Table({ item }) {
  const convertUnixToDate = (unix) => {
    const date = new Date(unix * 1000);
    const formattedDate = date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    return formattedDate;
  };

  return (
    <table className="w-full text-sm text-left">
      <thead className="text-xs text-white uppercase bg-gray-800">
        <tr>
          <th scope="col" className="px-6 py-3">
            Address
          </th>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Nominal
          </th>
          <th scope="col" className="px-6 py-3">
            Date
          </th>
          <th scope="col" className="px-6 py-3">
            Invoice
          </th>
        </tr>
      </thead>
      <tbody>
        {item.length > 0 &&
          item.map((data, idx) => {
            let rowClass = '';
            if (idx % 2 === 0) {
              rowClass = 'bg-white border border-gray-400';
            } else {
              rowClass = 'border-b bg-slate-300 border-gray-700';
            }
            return data.statusPayment ? (
              <tr className={rowClass} key={idx}>
                <th scope="row" className="px-6 font-medium">
                  {data.walletAddress}
                  {/* {data.walletAddress.slice(0, 9)}...
                  {data.walletAddress.slice(37, 42)} */}
                </th>
                <td className="px-6 py-4">{data.name}</td>
                <td className="px-6 py-4">
                  Rp
                  {data.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                </td>
                <td className="px-6 py-4">{convertUnixToDate(data.date)}</td>
                <td className="px-6 py-4">
                  <a
                    href={`https://zakatpayment.infura-ipfs.io/ipfs/${data.ipfsHash}`}
                    target="_blank"
                    className="font-bold text-blue-600 hover:underline"
                  >
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="text-2xl"
                      width={20}
                    />
                  </a>
                </td>
              </tr>
            ) : null
          })}
      </tbody>
    </table>
  );
}
