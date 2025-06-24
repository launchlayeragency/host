import Img from "../../../assets/global_services_img.png";
import { motion } from 'framer-motion';


export default function Installation() {
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
                            Install Your Favorite Apps With Just One Click
                        </h2>
                        <p className="text-base text-gray-300 lg:w-[80%]">
                            With our one click installer tool, available on every Web Hosting plan, you can create any type of website: blog, forum, CMS, wiki, photo gallery, E-commerce store, and so much more!
                        </p>

                          <button className="relative px-8 py-3 rounded-lg bg-teal-400 text-black font-medium overflow-hidden group"
                            onClick={() => {
                                document.getElementById('resellerHosting')?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}
                        >
                            <span className="relative z-10 group-hover:text-white transition-colors duration-500">View Demo</span>
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
