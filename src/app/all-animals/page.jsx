import CatagoryPage from "@/Components/Catagory";
import PhotoCard from "@/Components/Features/PhotoCard";

export const dynamic = 'force-dynamic'



const allAnimalPage =async () => {
  //  const res = await fetch('https://qurbani-hat-2026.vercel.app/Data.json')
  //  const photos = await res.json()
  
  const photos=
{
  "animals": [
    

  {
    "id": 1,
    "name": "Deshi Shahi Cow",
    "type": "Cow",
    "breed": "Local Deshi",
    "price": 120000,
    "weight": 280,
    "age": 3,
    "location": "Bogura",
    "description": "Healthy deshi cow suitable for Qurbani. Well fed with natural খাবার.",
    "image": "https://images.pexels.com/photos/32401109/pexels-photo-32401109.jpeg",
    "category": "Large Animal"
  },
  {
    "id": 2,
    "name": "Australian Friesian Cow",
    "type": "Cow",
    "breed": "Friesian",
    "price": 180000,
    "weight": 350,
    "age": 4,
    "location": "Sirajganj",
    "description": "High-quality Friesian cow with excellent health and strong body.",
    "image": "https://images.pexels.com/photos/35317679/pexels-photo-35317679.jpeg",
    "category": "Large Animal"
  },
  {
    "id": 3,
    "name": "Black Bengal Goat",
    "type": "Goat",
    "breed": "Black Bengal",
    "price": 25000,
    "weight": 35,
    "age": 2,
    "location": "Rajshahi",
    "description": "Popular goat breed in Bangladesh, খুব সুস্বাদু মাংস.",
    "image": "https://images.pexels.com/photos/11501738/pexels-photo-11501738.jpeg",
    "category": "Small Animal"
  },
  {
    "id": 4,
    "name": "Jamunapari Goat",
    "type": "Goat",
    "breed": "Jamunapari",
    "price": 40000,
    "weight": 45,
    "age": 3,
    "location": "Pabna",
    "description": "Large size goat with সুন্দর গঠন and healthy condition.",
    "image": "https://images.pexels.com/photos/35679352/pexels-photo-35679352.jpeg",
    "category": "Small Animal"
  },
  {
    "id": 5,
    "name": "Deshi Sheep",
    "type": "Sheep",
    "breed": "Local",
    "price": 22000,
    "weight": 30,
    "age": 2,
    "location": "Mymensingh",
    "description": "Healthy sheep suitable for Qurbani, natural feeding.",
    "image": "https://images.pexels.com/photos/37081366/pexels-photo-37081366.jpeg",
    "category": "Small Animal"
  },
  {
    "id": 6,
    "name": "Dumba",
    "type": "Sheep",
    "breed": "Arabian",
    "price": 25000,
    "weight": 35,
    "age": 2,
    "location": "Dhaka",
    "description": "Arabic taste, fresh and ভালো মানের.",
    "image": "https://images.pexels.com/photos/25190313/pexels-photo-25190313.jpeg",
    "category": "Small Animal"
  },
  {
    "id": 7,
    "name": "Red Sindhi Cow",
    "type": "Cow",
    "breed": "Sindhi",
    "price": 160000,
    "weight": 320,
    "age": 4,
    "location": "Khulna",
    "description": "Strong and healthy cow, perfect for Qurbani with good weight.",
    "image": "https://images.pexels.com/photos/30517924/pexels-photo-30517924.jpeg",
    "category": "Large Animal"
  },
  {
    "id": 8,
    "name": "Boer Goat",
    "type": "Goat",
    "breed": "Boer",
    "price": 55000,
    "weight": 50,
    "age": 3,
    "location": "Chattogram",
    "description": "Imported Boer goat, বড় সাইজ এবং খুব ভালো মানের.",
    "image": "https://images.pexels.com/photos/11501738/pexels-photo-11501738.jpeg",
    "category": "Small Animal"
  },
  {
    "id": 9,
    "name": "Bafalo Cow",
    "type": "Cow",
    "breed": "Local",
    "price": 1200000,
    "weight": 550,
    "age": 2,
    "location": "Barisal",
    "description": "Fresh deshi Bafalo cow, গ্রাম থেকে সংগ্রহ করা.",
    "image": "https://images.pexels.com/photos/37398388/pexels-photo-37398388.jpeg",
    "category": "Large Animal"
  }
]}

 

  return (
   <div>
      <h2 className='text-2xl font-bold m-4 flex text-center justify-center'>All Animals</h2>

      <CatagoryPage 
      />
      
<div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
     {photos.animals.map(photo=> < PhotoCard key={photo.id} photo={photo} />)}
      </div> 

    </div>
   
  );
};

export default allAnimalPage;