import { FaPhone } from "react-icons/fa";
import Img from "../../assets/global_services_img.png";
import { motion } from 'framer-motion';

export default function Support() {
    return (
        <section
            className="py-16 md:py-24  my-6"
            style={{
                background: 'linear-gradient(to left, #5194db 0%, #1a237a 49%, #2c135c 100%)'
            }}
        >
            <div className="mx-auto w-[80%]">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                    {/* Text Content (Left Side) */}
                    <div className="md:w-1/2 space-y-6 my-auto">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold  lg:w-[80%]">
                            24/7 Expert Support
                        </h2>
                        <p className="text-base text-gray-300 lg:w-[80%]">
                            Our in-house, expert team is always on hand to help answer your questions, get you started, and grow your presence online. You can call, chat or email us any time!
                        </p>

                        {/* Contact Button */}
                        <button
                            className="relative px-8 py-3 rounded-lg bg-teal-400 text-black font-medium overflow-hidden group flex items-center gap-2"
                            onClick={() => {
                                document.getElementById('about')?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}
                        >
                            {/* Phone icon from React Icons */}
                            <FaPhone className="relative z-10 group-hover:text-white transition-colors duration-500" />

                            {/* Phone number text */}
                            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                                +134578911
                            </span>

                            {/* Hover effect background */}
                            <span className="absolute inset-0 bg-blue-600 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in z-0 pointer-events-none"></span>
                        </button>
                    </div>

                    {/* Image (Right Side)
                    <div className="md:w-1/2 overflow-hidden">
                        <img
                            src={Img}
                            alt="Hostgem data center"
                            className="w-full h-full object-contain max-h-[300px] md:max-h-[400px]"
                        />
                    </div> */}

                       <motion.div
                        className="md:w-1/2 overflow-hidden"
                        initial={{ x: 300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        transition={{
                            type: "tween",
                            ease: "easeOut",
                            duration: 1.5,
                            delay: 0.2
                        }}
                    >
                        <img
                            src={Img}
                            alt="Hostgem data center"
                            className="w-full h-full object-contain max-h-[300px] md:max-h-[400px]"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
