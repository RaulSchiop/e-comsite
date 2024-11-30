import Image from "next/image"
import MotherBoard from "../../../../../public/motherBoard.png"
import Button from "../../Aminations/Btn"
export default function Card(){


    


    return(
        <div className="flex items-center justify-center flex-col p-8">
      
                <h1 className=" text-accent text-3xl lg:text-5xl font-bold mb-10">New Arrivals</h1>
                <ul className="grid grid-cols-3 gap-6 mb-6">
                    <li className="bg-black rounded-xl p-4">
                        <Image src={MotherBoard} height={300} width={300} alt="Cart image"></Image>
                        <h2 className="text-Text">Procesor</h2>
                        <p className="text-accent">10 lei</p>
                    </li>
                    <li className="bg-black rounded-xl p-4"> 
                        <Image src={MotherBoard} height={300} width={300} alt="Cart image"></Image>
                        <h2 className="text-Text">Procesor</h2>
                        <p className="text-accent">10 lei</p>
                    </li>
                    <li className="bg-black rounded-xl p-4">
                    <Image src={MotherBoard} height={300} width={300} alt="Cart image"></Image>
                        <h2 className="text-Text">Procesor</h2>
                        <p className="text-accent">10 lei</p>
                    </li>
                    
                </ul>
            <Button className="bg-accent text-white py-2 px-4 rounded-md text-center hover:bg-white hover:text-accent border-2 border-accent">See More</Button>
        </div>
    
    )

}