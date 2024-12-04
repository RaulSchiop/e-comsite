import Header from "@/app/components/header/Hader";
import Image from "next/image";
import motherBoard from "../../../../public/dekstop.png"; // Example static image
import Button from "@/app/components/Aminations/Btn";

export default function ProductDetail() {
  return (
    <div className="bg-white min-h-screen">
     
      <Header></Header>

      <div className="mt-10 w-full p-8 flex justify-center flex-col items-center">
      <h1 className="text-4xl font-semibold text-gray-900 mb-6">Product 1</h1>
        <div className="flex flex-col md:flex-row gap-10 max-w-6xl w-full">
          <div className="flex items-center justify-center w-full md:w-1/2">
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
              <Image
                src={motherBoard} 
                alt="Desktop Product"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center w-full md:w-1/2 ">
            
            <h2 className="text-accent text-3xl font-bold mb-4">5000 lei</h2>

            <div className=" text-secondary text-lg mb-6">
              <p>Garantie 3 ani</p>
              <p>Transport gratuit</p>
            </div>
        
            <Button className="bg-accent text-white py-2 px-2 rounded-md text-center hover:bg-white hover:text-accent border-2 border-accent">Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
