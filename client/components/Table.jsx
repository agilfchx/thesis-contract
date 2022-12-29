import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Table() {
  return (
    <table className="w-full text-sm text-left">
      <thead className="text-xs uppercase bg-gray-800 text-white">
        <tr>
          <th scope="col" className="py-3 px-6">
            Address
          </th>
          <th scope="col" className="py-3 px-6">
            Name
          </th>
          <th scope="col" className="py-3 px-6">
            Nominal
          </th>
          <th scope="col" className="py-3 px-6">
            Date
          </th>
          <th scope="col" className="py-3 px-6">
            Invoice
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border border-gray-400">
          <th scope="row" className="px-6 font-medium">
            0x74D3JH2...FD5A
          </th>
          <td className="py-4 px-6">Mr. John Wick</td>
          <td className="py-4 px-6">Rp500.000</td>
          <td className="py-4 px-6">20 November 2022</td>
          <td className="py-4 px-6">
            <a href="#" className="font-bold text-blue-600 hover:underline">
              <FontAwesomeIcon
                icon={faDownload}
                className="text-2xl"
                width={20}
              />
            </a>
          </td>
        </tr>
        <tr className="border-b bg-slate-300 border-gray-700">
          <th scope="row" className="px-6 font-medium">
            0x74D3JH2...FD5A
          </th>
          <td className="py-4 px-6">Mrs. Pevita Pearce</td>
          <td className="py-4 px-6">Rp800.000</td>
          <td className="py-4 px-6">20 November 2022</td>
          <td className="py-4 px-6">
            <a href="#" className="font-bold text-blue-600 hover:underline">
              <FontAwesomeIcon
                icon={faDownload}
                className="text-2xl"
                width={20}
              />
            </a>
          </td>
        </tr>
        <tr className="bg-white border border-gray-400">
          <th scope="row" className="px-6 font-medium">
            0x74D3JH2...FD5A
          </th>
          <td className="py-4 px-6">Mr. John Wick</td>
          <td className="py-4 px-6">Rp500.000</td>
          <td className="py-4 px-6">20 November 2022</td>
          <td className="py-4 px-6">
            <a href="#" className="font-bold text-blue-600 hover:underline">
              <FontAwesomeIcon
                icon={faDownload}
                className="text-2xl"
                width={20}
              />
            </a>
          </td>
        </tr>
        <tr className="border-b bg-slate-300 border-gray-700">
          <th scope="row" className="px-6 font-medium">
            0x74D3JH2...FD5A
          </th>
          <td className="py-4 px-6">Mrs. Pevita Pearce</td>
          <td className="py-4 px-6">Rp800.000</td>
          <td className="py-4 px-6">20 November 2022</td>
          <td className="py-4 px-6">
            <a href="#" className="font-bold text-blue-600 hover:underline">
              <FontAwesomeIcon
                icon={faDownload}
                className="text-2xl"
                width={20}
              />
            </a>
          </td>
        </tr>
        <tr className="bg-white border border-gray-400">
          <th scope="row" className="px-6 font-medium">
            0x74D3JH2...FD5A
          </th>
          <td className="py-4 px-6">Mr. John Wick</td>
          <td className="py-4 px-6">Rp500.000</td>
          <td className="py-4 px-6">20 November 2022</td>
          <td className="py-4 px-6">
            <a href="#" className="font-bold text-blue-600 hover:underline">
              <FontAwesomeIcon
                icon={faDownload}
                className="text-2xl"
                width={20}
              />
            </a>
          </td>
        </tr>
        <tr className="border-b bg-slate-300 border-gray-700">
          <th scope="row" className="px-6 font-medium">
            0x74D3JH2...FD5A
          </th>
          <td className="py-4 px-6">Mrs. Pevita Pearce</td>
          <td className="py-4 px-6">Rp800.000</td>
          <td className="py-4 px-6">20 November 2022</td>
          <td className="py-4 px-6">
            <a href="#" className="font-bold text-blue-600 hover:underline">
              <FontAwesomeIcon
                icon={faDownload}
                className="text-2xl"
                width={20}
              />
            </a>
          </td>
        </tr>
        <tr className="bg-white border border-gray-400">
          <th scope="row" className="px-6 font-medium">
            0x74D3JH2...FD5A
          </th>
          <td className="py-4 px-6">Mr. John Wick</td>
          <td className="py-4 px-6">Rp500.000</td>
          <td className="py-4 px-6">20 November 2022</td>
          <td className="py-4 px-6">
            <a href="#" className="font-bold text-blue-600 hover:underline">
              <FontAwesomeIcon
                icon={faDownload}
                className="text-2xl"
                width={20}
              />
            </a>
          </td>
        </tr>
        <tr className="border-b bg-slate-300 border-gray-700">
          <th scope="row" className="px-6 font-medium">
            0x74D3JH2...FD5A
          </th>
          <td className="py-4 px-6">Mrs. Pevita Pearce</td>
          <td className="py-4 px-6">Rp800.000</td>
          <td className="py-4 px-6">20 November 2022</td>
          <td className="py-4 px-6">
            <a href="#" className="font-bold text-blue-600 hover:underline">
              <FontAwesomeIcon
                icon={faDownload}
                className="text-2xl"
                width={20}
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
