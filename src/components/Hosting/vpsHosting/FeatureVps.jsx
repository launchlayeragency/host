import Quick from '../../../assets/feature_icon01.png';
import Blazing from '../../../assets/feature_icon02.png';
import Root from '../../../assets/feature_icon03.png';


export default function FeatureVps() {
    const features = [
        {
            icon: Quick,
            title: 'Quick Provisioning',
            description: 'Our free web hosting is powered by top of the line enterprise hardware done.'
        },
        {
            icon: Blazing,
            title: 'Blazing Fast SSDs',
            description: 'Our free web hosting is powered by top of the line enterprise hardware done.'
        },
        {
            icon: Root,
            title: 'Instant Root Access',
            description: 'Our free web hosting is powered by top of the line enterprise hardware done.'
        }

    ];

    return (
        <section className="py-16 md:py-24 lg:py-28  my-6"
            style={{
                background: 'linear-gradient(to left, #5194db 0%, #1a237a 49%, #2c135c 100%)'
            }}
        >
            <div className="w-[85%] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        VPS Hosting Features
                    </h2>
                    <p className="text-base lg:text-lg text-gray-200 sm:w-[65%] xl:w-[50%]  mx-auto">
                        ametamngcing elit, per sed do eiusmoad teimpor sittem elit inuning ut sed sittem do eiusmod.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className=" flex flex-col justify-center rounded-lg bg-white sm:flex-row lg:flex-col xl:flex-row items-start gap-6 p-6 lg:px-8 py-12 hover:translate-y-[-10px] transition-all duration-300"
                        >
                            {/* Image - Left/Top depending on screen size */}
                            <div className="w-16 h-16 flex-shrink-0">
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Content - Right/Bottom depending on screen size */}
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                                <p className="text-gray-500 text-base w-[85%] sm:w-[60%] md:w-full lg:w-[80%] ">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}



