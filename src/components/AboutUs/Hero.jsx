import BgImage from "./BgImage";


export default function Hero() {
  return (
    <section id='hero' className="relative h-[450px] md:min-h-[650px] w-full overflow-hidden">
      {/* Background Image */}
      <BgImage/>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-start px-6 sm:px-12 lg:px-24 w-[85%] mx-auto">
        <div className="">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">About Hostgem</h1>
          <p className="text-xl md:text-2xl text-white opacity-90">The story of how Hostgem came to be.</p>
        </div>
      </div>
    </section>
  );
}
