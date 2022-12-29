import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
export default function Success({ data }) {
  console.log(data);
  return (
    <div className="flex flex-col items-center justify-center h-[35.1rem] py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className="text-green-500 text-6xl h-24 w-24"
        />

        <h1 className="text-6xl font-bold mt-4">Success!</h1>
        <p className="mt-3 text-2xl">
          Your payment has been successfully processed.
        </p>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/callback');
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
