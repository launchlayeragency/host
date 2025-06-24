
import SSDIcon from '../../../assets/tuf_icon01.png';
import SecureIcon from '../../../assets/tuf_icon02.png';
import SSLCertIcon from '../../../assets/tuf_icon03.png';
import CloudIcon from '../../../assets/tuf_icon04.png';
import SupportIcon from '../../../assets/tuf_icon05.png';
import EasyInstallIcon from '../../../assets/tuf_icon06.png';


export default function FeatureSharedHost() {
  const features = [
    {
      icon: SSDIcon,
      title: 'SSD Drive',
      description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor ectetur adipisci.'
    },
    {
      icon: SecureIcon,
      title: 'Secure Drive',
      description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor ectetur adipisci.'
    },
    {
      icon: SSLCertIcon,
      title: 'Free SSL Certificate',
      description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor ectetur adipisci.'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Provided',
      description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor ectetur adipisci.'
    },
    {
      icon: SupportIcon,
      title: '24/7 Support',
      description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor ectetur adipisci.'
    },
    {
      icon: EasyInstallIcon,
      title: 'Easy Install',
      description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor ectetur adipisci.'
    }
  ];

  return (
    <section className="bg-slate-100 py-20 ">
      <div className="w-[85%] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Speed, Reliability, Support & So Much More!
          </h2>
          <p className="text-base lg:text-lg text-gray-500 sm:w-[65%] xl:w-[50%]  mx-auto">
            ametamngcing elit, per sed do eiusmoad teimpor sittem elit inuning ut sed sittem do eiusmod.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className=" flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start gap-6 py-5"
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
