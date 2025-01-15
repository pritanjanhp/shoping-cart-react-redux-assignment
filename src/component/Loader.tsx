const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen text-xl">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 border-4 border-t-4 rounded-full animate-spin border-t-blue-800"></div>
        <span className="text-lg font-semibold text-gray-600">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
