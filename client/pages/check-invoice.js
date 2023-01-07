export default function CheckInvoice() {
  return (
    <div className="flex flex-col justify-center items-center my-60">
      <label className="text-4xl font-bold" for="file_input">
        Check Invoice
      </label>
      <input
        className="block text-sm border rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400 w-96 p-2.5 mt-4"
        id="file_input"
        type="file"
      />
    </div>
  );
}
