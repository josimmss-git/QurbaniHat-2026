import Image from "next/image";


const Features = async () => {
  const res = await fetch('https://qurbani-hat-2026.vercel.app/Data.json',{cache:'no-store'});
  const data = await res.json();

   const topData = data.animals.slice(0, 4)
 
 


  return (
    <div>
      <h1 className="font-bold text-3xl justify-center text-center">Features</h1>
      <div>
        {topData.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            
              <Image src={topData.image} alt={item.name} className="w-full h-48 object-cover mb-2 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;