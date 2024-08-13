import Image from 'next/image'

export default function Home() {
  return (
    <div>
      {/* landing header */}
      <div className='header'>
        <Image 
          src="/image.png" 
          alt="CUCAI logo"
          width={142.8}
          height={68} 
        />
        
      </div>

      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}
