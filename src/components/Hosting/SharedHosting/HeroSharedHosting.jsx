import { FaCheck } from "react-icons/fa";
import BgImage from "../../AboutUs/BgImage";



export default function HeroSharedHosting() {
    return (
        <section id='sharedHosting' className="relative h-[530px] md:min-h-[680px] w-full overflow-hidden">
            {/* Background Image */}
            <BgImage />

            <div className="absolute inset-0 z-10 flex items-center justify-start px-2 sm:px-12 lg:px-24  w-[85%] mx-auto">
                <div className="flex flex-col">

                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-5">
                        Shared Hosting
                    </h2>

                    {/* Features List......... */}
                    <ul className="space-y-2 md:space-y-3 mb-3 md:mb-8 text-lg sm:text-xl md:text-2xl text-white opacity-90">
                        <li className="flex items-center gap-3">
                            <FaCheck className="text-green-400 text-lg" />
                            <span>Look like a Pro — Fast, Secure, & Always Up</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaCheck className="text-green-400 text-lg" />
                            <span>1-Click Instant WordPress Install</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaCheck className="text-green-400 text-lg" />
                            <span>Zero Risk, 97 Day Money-Back Guarantee</span>
                        </li>

                    </ul>

                   <div className="inline-flex">
                     <button className="relative px-4 py-2 md:px-5 md:py-3 lg:px-8 lg:py-4 rounded-lg bg-teal-400 text-black font-medium overflow-hidden group transition-all duration-500"

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
}
