import Header from "../components/header/Hader"
import MotherBoard from "../../../public/motherBoard.png"
import Image from "next/image"
import Button from "../components/Aminations/Btn"
import Footer from "../components/Footer/Footer"

export default function Products(){
    return(
        <>
        <Header></Header>
        <div className="flex items-center justify-center flex-col p-8 flex-wrap">
      
            
                <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">       
                    <li className="bg-black rounded-xl p-4 transition-transform duration-300 hover:scale-110">
                        <Image src={MotherBoard} height={300} width={300} alt="Cart image"></Image>
                        <h2 className="text-Text">Procesor</h2>
                        <p className="text-accent">10 lei</p>
                    </li>
                    <li className="bg-black rounded-xl p-4 transition-transform duration-300 hover:scale-110"> 
                        <Image src={MotherBoard} height={300} width={300} alt="Cart image"></Image>
                        <h2 className="text-Text">Procesor</h2>
                        <p className="text-accent">10 lei</p>
                    </li>
                    <li className="bg-black rounded-xl p-4 transition-transform duration-300 hover:scale-110">
                    <Image src={MotherBoard} height={300} width={300} alt="Cart image"></Image>
                        <h2 className="text-Text">Procesor</h2>
                        <p className="text-accent">10 lei</p>
                    </li>
                    <li className="bg-black rounded-xl p-4 transition-transform duration-300 hover:scale-110">
                    <Image src={MotherBoard} height={300} width={300} alt="Cart image"></Image>
                        <h2 className="text-Text">Procesor</h2>
                        <p className="text-accent">10 lei</p>
                    </li>
                    <li className="bg-black rounded-xl p-4 transition-transform duration-300 hover:scale-110">
                    <Image src={MotherBoard} height={300} width={300} alt="Cart image"></Image>
                        <h2 className="text-Text">Procesor</h2>
                        <p className="text-accent">10 lei</p>
                    </li>
                    <li className="bg-black rounded-xl p-4 transition-transform duration-300 hover:scale-110">
                    <Image src={MotherBoard} height={300} width={300} alt="Cart image"></Image>
                        <h2 className="text-Text">Procesor</h2>
                        <p className="text-accent">10 lei</p>
                    </li>
                    <li className="bg-black rounded-xl p-4 transition-transform duration-300 hover:scale-110">
                    <Image src={MotherBoard} height={300} width={300} alt="Cart image"></Image>
                        <h2 className="text-Text">Procesor</h2>
                        <p className="text-accent">10 lei</p>
                    </li>
                    <li className="bg-black rounded-xl p-4 transition-transform duration-300 hover:scale-110">
                    <Image src={MotherBoard} height={300} width={300} alt="Cart image"></Image>
                        <h2 className="text-Text">Procesor</h2>
                        <p className="text-accent">10 lei</p>
                    </li>
                    <li className="bg-black rounded-xl p-4 transition-transform duration-300 hover:scale-110">
                    <Image src={MotherBoard} height={300} width={300} alt="Cart image"></Image>
                        <h2 className="text-Text">Procesor</h2>
                        <p className="text-accent">10 lei</p>
                    </li>

                    
                </ul>
            
        </div>
        <Footer></Footer>
        </>
    )
}