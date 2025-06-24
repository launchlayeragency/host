const PricingSection = ({ scrollToId }) => {
    return (
        <section
            className="py-20 "
            style={{
                background: 'linear-gradient(to left, #5194db 0%, #1a237a 49%, #2c135c 100%)'
            }}
        >
            <div className="w-[85%] mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-left md:justify-between gap-8">
                    {/* Left Side - Text Content............ */}
                    <div className="md:w-[70%] text-left">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                            Complete Hosting Solutions Only $2.95/mo
                        </h2>
                        <p className="text-base text-white opacity-90 md:w-[80%]">
                            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor
                            ectetur adipisci adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolor ectetur
                        </p>
                    </div>

                    {/* Right Side - Button................ */}
                    <div className="md:w-[30%] flex justify-left md:justify-center">
                        <button className="relative px-4 py-2 md:px-5 md:py-3 lg:px-8 lg:py-4 rounded-lg bg-teal-400 text-black font-medium overflow-hidden group transition-all duration-500"
                            onClick={() => {
                                document.getElementById(scrollToId)?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}
                        >
                            <span className="relative z-10 font-bold group-hover:text-white transition-colors duration-500 text-lg">
                                Get Started Now
                            </span>
                            <span className="absolute inset-0 bg-blue-600 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in z-0 pointer-events-none"></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;