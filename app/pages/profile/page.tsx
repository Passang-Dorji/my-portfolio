
export default function Profile() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 border border-blue-300 shadow-xl rounded-lg p-8 max-w-screen mx-auto h-screen flex flex-col justify-center items-center">
        <div className="animate-pulse flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 w-full">
          <div className="rounded-full bg-gradient-to-r from-green-400 to-teal-500 h-32 w-32 mx-auto md:mx-0 shadow-lg"></div>

          <div className="flex-1 space-y-6">
            <div className="h-14 bg-gradient-to-r from-gray-300 to-gray-400 rounded-xl w-4/5 mx-auto md:mx-0 shadow-md"></div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg col-span-2 shadow-md"></div>
                <div className="h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg col-span-1 shadow-md"></div>
              </div>
              <div className="h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg w-full shadow-md"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
