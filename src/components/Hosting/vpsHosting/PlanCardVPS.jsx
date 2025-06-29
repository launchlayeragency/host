const PlanCardVPS = ({ plan }) => {
   

    return (
        <div className={`bg-white rounded-lg border-2 p-8 text-center ${
            plan.featured ? 'border-teal-400 transform lg:scale-y-110 py-5' : 'border-gray-200'
        }`}>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
                {plan.name }
            </h3>

            <div className="mb-8">
                <span className="text-sm text-gray-600">$</span>
                <span className="text-4xl font-bold text-gray-800">{plan.price }</span>
                <span className="text-gray-600 ml-1">/{plan.period }</span>
            </div>

            <div className="mb-8 space-y-2">
                {plan.specs?.map((spec, index) => (
                    <p key={index} className="text-gray-700 text-sm">{spec}</p>
                )) }
            </div>

            <button
                className={`w-[80%] mx-auto font-medium py-3 px-6 rounded transition-colors duration-200 relative overflow-hidden group  text-white ${
                    plan.featured
                        ? 'bg-teal-500 '
                        : 'bg-blue-600'
                }`}
                onClick={() => {
                    document.getElementById('vpsHosting')?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <span className="relative z-10  transition-colors duration-500">Purchase</span>
                            <span className="absolute inset-0 bg-teal-300 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in z-0 pointer-events-none"></span>
              
            </button>
             {/* <button className="relative px-8 py-3 rounded-lg bg-teal-400 text-black font-medium overflow-hidden group"
                            onClick={() => {
                                document.getElementById('about')?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}
                        >
                            <span className="relative z-10 group-hover:text-white transition-colors duration-500">Get Started</span>
                            <span className="absolute inset-0 bg-blue-600 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in z-0 pointer-events-none"></span>
                        </button> */}
        </div>
    );
};

export default PlanCardVPS;
