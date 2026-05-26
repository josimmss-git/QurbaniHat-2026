
import React from 'react';
import PhotoCard from './PhotoCard';

const FreaturePage = async () => {
  const res = await fetch('http://localhost:3000/Data.json')
  const photos = await res.json()
  const topphotos=photos.animals.slice(3,7)

  console.log(topphotos);


  return (
    <div>
     <h2 className='text-2xl font-bold m-4 flex text-center justify-center'>Featured Animals</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 p-4'>
        {
          topphotos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))
        }
      </div>
    </div>
  );
}

export default FreaturePage;