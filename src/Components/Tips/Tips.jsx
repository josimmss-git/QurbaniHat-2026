import { Card } from "@heroui/react";


const TipsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col ">
      <div> <h2 className="text-2xl font-bold m-4 flex text-center justify-center">Why Choose Us</h2>
        <Card className='h-125 border-2"font-bold text-xs" flex flex-wrap gap-4 justify-center items-start'>
          <div className='p-4'>
            <h2 className="text-xl font-semibold border-2">🐄 Healthy Animals</h2>
            <p>All animals are carefully raised and maintained for quality and health.</p>
          </div>
          <div className='p-4'>
            <h2 className="text-xl font-semibold">✅ Verified Farms</h2>
            <p>We work with trusted and verified livestock farms.</p>
          </div>
          <div className='p-4'>
            <h2 className="text-xl font-semibold">📍 Easy Booking</h2>
            <p>Book your preferred animal online in just a few clicks.</p>
          </div>

        </Card>
  </div>

      <div >
        <h2 className="text-2xl font-bold m-4 flex text-center justify-center">Top Breeds</h2>
        <Card className='h-125 border-2"font-bold text-xs" flex flex-wrap gap-4 justify-center items-start'>
          <div><h2 className="text-xl font-semibold">1. Deshi Cow</h2>
          <p>1. Local and trusted breed</p>


           <p>2. Easy to maintain</p> 

            <p>3. Popular among Bangladeshi buyers</p></div>
          
          <div><h2 className="text-xl font-semibold">2. Black Bengal Goat</h2>
          <p>1. Local and trusted breed</p>


           <p>2. Nationally popular breed</p> 

            <p>3. Excellent meat quality</p>
          </div>
          <div>
          <h2 className="text-xl font-semibold">3. Brahman</h2>
          <p>1.Large body size</p>


           <p>2.Very popular for Qurbani</p> 

            <p>3.Premium meat quality</p>
          </div>
        </Card>
      </div>

    
        <h2 className="text-2xl font-bold m-4 flex text-center justify-center">Qurbani Tips</h2>
        <Card className='h-125 border-2"font-bold text-xs" flex flex-wrap gap-4 justify-center items-start'>
          <h2 className="text-xl font-semibold">1. Choose a Healthy Animal</h2>
          <p>Select an active and disease-free animal with bright eyes and a healthy body condition.</p>
          <h2 className="text-xl font-semibold">2. Check the Required Age</h2>
          <p>Ensure the animal meets the Islamic age requirement for Qurbani.</p>
          <h2 className="text-xl font-semibold">3. Verify Weight and Size</h2>
          <p>Compare the animals weight and physical condition before making a booking.</p>
          <h2 className="text-xl font-semibold">4. Buy from Trusted Sellers</h2>
          <p>Purchase animals from verified farms or trusted sellers for better reliability.</p>
        </Card>
        
 
    </div>
    
  );
};

export default TipsPage;