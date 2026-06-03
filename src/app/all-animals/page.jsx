import PhotoCard from "@/Components/Features/PhotoCard";

export const dynamic = 'force-dynamic'



const allAnimalPage =async () => {
  const res = await fetch('http://localhost:3000/Data.json')
  const photos = await res.json()
  

  return (
    <div>
      <h2 className='text-2xl font-bold m-4 flex text-center justify-center'>All Animals</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
     {photos.animals.map(photo=> < PhotoCard key={photo.id} photo={photo} />)}
      </div>
    </div>
  );
};

export default allAnimalPage;