import Img from "../../../assets/global_services_img.png";
import { motion } from 'framer-motion';

export default function Storage() {
     return (
        <section
            className="py-16 bg-white"
           
        >
            <div className="mx-auto w-[80%]">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                    {/* Text Content (Left Side) */}
                    <div className="md:w-1/2 space-y-6 my-auto">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold  lg:w-[80%]">
                            Need more storage
space?
                        </h2>
                        <p className="text-base text-gray-700 lg:w-[80%]">
                            Get additional storage space with extra disks for VPS.. Since you're sharing resources — like neighbors in an apartment building — you spend less but have fewer options and less control.
                        </p>

                          <button className="relative px-8 py-3 rounded-lg bg-teal-400 text-black font-medium overflow-hidden group"
                            onClick={() => {
                                document.getElementById('vpsHosting')?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}
                        >
                            <span className="relative z-10 group-hover:text-white transition-colors duration-500">Add Now</span>
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
