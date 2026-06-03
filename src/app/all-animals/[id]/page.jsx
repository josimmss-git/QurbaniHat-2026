import { Button } from "@heroui/react";
import Image from "next/image";
export const dynamic = 'force-dynamic'
const AnimalDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch('http://localhost:3000/Data.json')
  const photos = await res.json()
  const animal = photos.animals.find(a => a.id == id)
  console.log(animal, 'details page');
  
  return (
    <div>
      <div>
        
        <div className='w-full aspect-square relative mb-4'>
    <Image src={animal.image}
      fill
      alt={animal.name} />
  </div>
    
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Name: {animal.name}</h2>
        
        <div className="space-y-3 text-gray-700 text-lg">
       <p>
              <span className="font-semibold">Breed:</span> {animal.breed}
            </p>
     
            <p>
              <span className="font-semibold">Price:</span> $
              {animal.price.toFixed(2)}
        </p>
        
       
            <p>
              <span className="font-semibold">Age:</span> {animal.age} years
            </p>
 <p>
              <span className="font-semibold">Weight:</span> {animal.weight} kg
        </p>
        <p>
              <span className="font-semibold">Location:</span> {animal.location}
            </p>
            <p>
              <span className="font-semibold">Description:</span> {animal.description}
          </p>
        </div>
          <Button variant="primary" className="mt-6">Book Now</Button>
  </div>
  </div>);
};

export default AnimalDetailsPage;