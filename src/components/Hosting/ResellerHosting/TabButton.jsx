 const TabButton = ({ active, onClick, children }) =>  {
    return (
    <button
      onClick={onClick}
      className={`sm:px-6 sm:py-2 px-2 py-3 font-medium transition-all duration-200 text-sm sm:text-base md:text-xl ${
        active
          ? 'bg-blue-600 text-white'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      {children}
    </button>
  );
}
  export default TabButton;