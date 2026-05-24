
import React from 'react';

const FreaturePage = async () => {
  const res = await fetch('https://qurbani-hat-2026.vercel.app/Data.json')
  const photos = await res.json()
  const topphotos=photos.animals.slice(0,6)

  console.log(topphotos);


  return (
    <div>
      <h2>Featured Animals</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {topphotos.map((photo) => (
          <div key={photo.id} className='border rounded-lg p-4'>
            <img src={photo.image} alt={photo.name} className='w-full'/>
            <h3 className='text-xl font-bold mb-2'>{photo.name}</h3>
            <p className='text-gray-600 mb-2'>Age: {photo.age} years</p>
            <p className='text-gray-600 mb-2'>Location: {photo.location}</p>
            <p className='text-gray-600'>{photo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FreaturePage;