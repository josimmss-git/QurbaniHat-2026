import { Button } from "@heroui/react";
import Link from "next/link";
import TipsPage from "../Tips/Tips";



const Banner = () => {
  return (
    <>
     <div className="h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl" style={{ backgroundImage: "url('/hero.png')" }}>

      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
           QurbaniHat – Livestock Booking Platform
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Find Your Perfect Qurbani Healthy & Verified Animals
          </p>

          <div className="flex gap-4">
            <Link href="#">
              <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
               Browse Animals
              </Button>
            </Link>

            <Link href="/signup">
              <Button variant="outline" className="text-white border-white">
               Learn More
              </Button>
            </Link>
            
          
          </div>
          <div> <ul className="flex gap-10 text-2xl justify-between text-white mt-10 w-100 h-auto">
              <li>500+ Animals </li>
          <li>120+ Farms</li>
          
          <li>1000+
            Bookings
          </li></ul></div>

        </div>
       
            
      </div>
     
    </div>
    
    
      <TipsPage />
     
    </>
   
  );
};

export default Banner;