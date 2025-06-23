import Img from "../../assets/global_services_img.png";

export default function GlobalProvider() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
            <div className="mx-auto w-[80%]">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                    {/* Text Content (Left Side) */}
                    <div className="md:w-1/2 space-y-6">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 lg:w-[80%]">
                            Hostgem is a global provider of web hosting and related services.
                        </h2>
                        <p className="text-base text-gray-700 lg:w-[80%]">
                            Founded in a dorm room at Florida Atlantic University by Brent Oxley,
                            HostGator has grown into a leading provider of Shared, Reseller,
                            VPS, and Dedicated web hosting. Hostneet is headquartered in Houston and Austin, Texas,
                            with several international offices throughout the globe.
                        </p>

                        {/* Contact Button */}
                        <button className="relative px-8 py-3 rounded-lg bg-teal-400 text-black font-medium overflow-hidden group"
                            onClick={() => {
                                document.getElementById('hero')?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}
                        >
                            <span className="relative z-10 group-hover:text-white transition-colors duration-500">Contact Us</span>
                            <span className="absolute inset-0 bg-blue-600 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in z-0 pointer-events-none"></span>
                        </button>
                    </div>

                    {/* Image (Right Side) */}
                    <div className="md:w-1/2 overflow-hidden">
                        <img
                            src={Img}
                            alt="Hostgem data center"
                            className="w-full h-full object-contain max-h-[300px] md:max-h-[400px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
