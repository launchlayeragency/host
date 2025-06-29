

  const ResellerPlanCard = ({ plan }) => {
  
    return (
      <div className="bg-white rounded-lg border border-gray-300 p-8 text-center flex items-center flex-col">
        <h3 className="text-xl font-bold text-black mb-6">{plan.name}</h3>
        
        <div className="mb-4"> 
         
         <span className={`text-4xl md:text-6xl font-bold ${plan.name === 'Popular' ? 'text-teal-500' : 'text-blue-600'}`}>
            ${plan.price}
          </span>
        
          <span className="text-gray-600 ml-1">/{plan.period}</span>
        </div>

        <hr/>

        <div className="mb-6 mt-2 text-sm text-gray-600">
          <p className="mb-2">{plan.totalPrice}</p>
          <p className="font-medium text-gray-700">{plan.discount}</p>
        </div>

          <div className="w-20 h-20 flex items-center justify-center mb-6">
                <img 
                  src={plan.img} 
                  alt={plan.name}
                  className="w-full h-full object-contain"
                />
              </div>

             <div className="inline-flex">
        <button className=" bg-teal-500 hover:bg-blue-800 text-white font-medium py-3 px-6 lg:px-8 rounded transition-colors duration-500"
          onClick={() => {
            document.getElementById('resellerHosting')?.scrollIntoView({
              behavior: 'smooth'
            });
          }}
        >
          Purchase
        </button>

      </div>
      </div>
    );
  };



export default ResellerPlanCard;