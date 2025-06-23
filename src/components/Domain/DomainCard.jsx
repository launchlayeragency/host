

const DomainCard = ({ domain }) => {
  return (
    <div className="bg-white max-w-80 rounded-lg shadow-lg p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="text-center">
        <div className="mb-4 flex justify-center items-center overflow-hidden">
          <img src={domain.img}
           alt={domain.extension} 
           className="w-16 h-16 object-contain"
          
          />
        </div>
        
        <div className="mb-6">
          <span className="text-2xl font-bold text-gray-800">
            {domain.price}
          </span>
        </div>
        
     <div className="flex justify-center items-center">
           <button className="py-2 px-4 block border-2 border-teal-500 text-teal-600 font-semibold rounded-lg hover:bg-teal-500 hover:text-white transition-all duration-300">
  Choose {domain.extension}
</button>
     </div>
      </div>
    </div>
  );
};

export default DomainCard;
