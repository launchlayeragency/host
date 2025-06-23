import backgroundImage from '../../assets/breadcrumb_bg.png';


export default function BgImage() {
  return (
   <div 
           className="absolute inset-0 w-full h-full bg-no-repeat bg-center"
           style={{ 
             backgroundImage: `url(${backgroundImage})`,
             backgroundSize: '120% 100%',
             backgroundPosition: '45% center',
           }}
         ></div>
  )
}
