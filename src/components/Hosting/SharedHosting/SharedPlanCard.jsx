
const SharedPlanCard = ({ plan }) => {
  return (
    <div className="bg-white rounded-lg p-8 text-center relative shadow-2xl shadow-gray-200">
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Popular
          </span>
        </div>
      )}

      <h3 className="text-xl font-bold text-gray-800 mb-6">{plan.name}</h3>

      <div className="mb-6">
        {/* <span className="text-sm text-gray-600">$</span> */}
        <span className={`text-4xl md:text-6xl font-bold ${plan.name === 'Popular' ? 'text-teal-500' : 'text-blue-600'}`}>
          ${plan.price}
        </span>
        <span className="text-gray-600 ml-1">/{plan.period}</span>
      </div>
      <hr />
      <div className="mb-6 text-base text-gray-600 mt-3">
        <p>{plan.totalPrice}</p>
        <p className="font-medium text-gray-700 mt-2">{plan.discount}</p>
      </div>

      <div className="mb-3">
        <p className="text-gray-700 ">{plan.websites} Website</p>
      </div>

      <div className="mb-8 space-y-3">
        {plan.features.map((feature, index) => (
          <div key={index} className="text-gray-700 text-sm">
            {feature}
          </div>
        ))}
      </div>

      <div className="inline-flex">
        <button className=" bg-teal-500 hover:bg-blue-800 text-white font-medium py-3 px-6 lg:px-8 rounded transition-colors duration-500"
          onClick={() => {
            document.getElementById('sharedHosting')?.scrollIntoView({
              behavior: 'smooth'
            });
          }}
        >
          Purchase
        </button>

      </div>
    </div>
  );
}

export default SharedPlanCard;
