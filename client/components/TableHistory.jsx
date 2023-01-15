import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function TableHistory({ zakatID, date, amount, hash }) {
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
    <div className="overflow-x-auto mt-8">
      <table className="w-full text-sm text-left">
        <thead className="text-xs uppercase bg-gray-800 text-white">
          <tr>
            <th scope="col" className="py-3 px-6">
              Zakat ID
            </th>
            <th scope="col" className="py-3 px-6">
              Date
            </th>
            <th scope="col" className="py-3 px-6">
              Nominal
            </th>
            <th scope="col" className="py-3 px-6">
              Invoice
            </th>
          </tr>
        </thead>
        <tbody>
          {zakatID.length > 0 &&
            zakatID.map((data, idx) => {
              let rowClass = '';
              if (idx % 2 === 0) {
                rowClass = 'bg-white border border-gray-400';
              } else {
                rowClass = 'border-b bg-slate-300 border-gray-700';
              }
              return (
                <tr className={rowClass}>
                  <th scope="row" className="px-6 font-medium">
                    {data}
                  </th>
                  <td className="py-4 px-6">{convertUnixToDate(date[idx])}</td>
                  <td className="py-4 px-6">
                    Rp
                    {amount[idx]
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                  </td>
                  <td className="py-4 px-6">
                    <a
                      href={`https://zakatpayment.infura-ipfs.io/ipfs/${hash[idx]}`}
                      target="_blank"
                      className="font-bold text-blue-600 hover:underline"
                    >
                      <FontAwesomeIcon
                        icon={faDownload}
                        className="text-blue-600"
                      />
                    </a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
