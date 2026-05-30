import React from 'react';
import { Button, Card } from "@heroui/react";
import Image from 'next/image';
import Link from 'next/link';

const PhotoCard = ({ photo }) => {
  return (
    <Card className='border rounded-2xl shadow-lg p-4'>
           <div className='w-full aspect-square relative mb-4'>
             <Image
               src={photo.image}
              fill
               alt={photo.title}
               className='object-cover rounded-xl'
             />
           </div>
           
           
               <div> 
               <h3 className='text-xl font-bold mb-2'>{photo.name}</h3>
                 <p className='text-gray-600 mb-2'>Age: {photo.age} years</p>
               <p className='text-gray-600 mb-2'>Location: {photo.location}</p>
               
               
               <p className='text-gray-600 '>{photo.description}</p>
               <p className='text-gray-600 text-2xl font-bold'>Price: ${photo.price.toFixed(2)}</p>
     
      </div>
      <Link href={`/all-animals/${photo.id}`} className='mt-4 inline-block w-full'>
        <Button variant='outline' color='primary'>
          View Details
        </Button>
      </Link>
    </Card>
  );
};

export default PhotoCard;