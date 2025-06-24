import { motion } from 'framer-motion';
import TechImg from '../../assets/choose_01.png';
import ManagedImg from '../../assets/choose_02.png';

const WhyChooseSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="w-[85%] mx-auto">
                <motion.h2
                    className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    Why choose Hostgem?
                </motion.h2>

                {/* First Row */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                    <div className="md:w-1/2 space-y-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                            Technical Craftsmanship
                        </h3>
                        <p className="text-lg text-gray-600">
                            Developing smart in-house solutions and adopting innovative technology is our passion and our craft. We were pioneers in secure account isolation and among the first to use Linux containers. We heavily customized this new lightweight virtualization method to ensure it.
                        </p>
                        <button className="relative px-8 py-3 rounded-lg bg-teal-400 text-black font-medium overflow-hidden group"
                            onClick={() => {
                                document.getElementById('about')?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}
                        >
                            <span className="relative z-10 group-hover:text-white transition-colors duration-500">Get Started</span>
                            <span className="absolute inset-0 bg-blue-600 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in z-0 pointer-events-none"></span>
                        </button>
                    </div>
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
                            src={TechImg}
                            alt="Technical Craftsmanship"
                            className="w-full h-full object-contain max-h-[300px] md:max-h-[400px]"
                        />
                    </motion.div>
                </div>

                {/* Second Row */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        className="md:w-1/2 overflow-hidden md:order-1"
                        initial={{ x: -300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        transition={{
                            type: "tween",
                            ease: "easeOut",
                            duration: 1.5,
                            delay: 0.4
                        }}
                    >
                        <img
                            src={ManagedImg}
                            alt="Managed and Empowering"
                            className="w-full h-full object-contain max-h-[300px] md:max-h-[400px]"
                        />
                    </motion.div>
                    <div className="md:w-1/2 space-y-6 md:order-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                            Managed and Empowering
                        </h3>
                        <p className="text-lg text-gray-600">
                            We believe managed hosting should empower rather than limit you. We offer automatic WordPress updates that you can leave on auto-pilot or schedule. We run the latest PHP versions, but allow you to switch between versions. We enable static caching for your website.
                        </p>
                        <button className="relative px-8 py-3 rounded-lg bg-teal-400 text-black font-medium overflow-hidden group"
                            onClick={() => {
                                document.getElementById('about')?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}
                        >
                            <span className="relative z-10 group-hover:text-white transition-colors duration-500">See Pricing</span>
                            <span className="absolute inset-0 bg-blue-600 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in z-0 pointer-events-none"></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;