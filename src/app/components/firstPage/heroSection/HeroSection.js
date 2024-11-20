import Button from "../../Aminations/Btn";
import HeroSt from "../../Aminations/heroPage/heroSt"
import HeroDr from "../../Aminations/heroPage/heroDr";
import Image from "next/image";
import HeroImage from "../../../../../public/heroPageImage.png"
import Link from "next/link";
export default function HeroSection(){


    return (
<div className="flex mt-10 mb-16 bg-cardBackground rounded-2xl p-10 w-[90%] mx-auto gap-3 items-center justify-center flex-wrap lg:flex-nowrap px-16 ">
  <HeroSt className="flex flex-col items-start justify-start text-center lg:text-left lg:w-1/2">
          <p className="text-accent text-lg font-medium mb-2">"Unleash the Power of Performance"</p>
          <h1 className="text-Text text-3xl lg:text-5xl font-bold mb-4">Shop Custom PCs, Gaming Rigs, and Premium Accessories</h1>
          <p className="text-secondarytext text-sm lg:text-lg mb-6">Explore the latest technology to elevate your gaming, productivity, and entertainment experience. Build your dream setup today!</p>
          <Link  href={"/products"}> <Button className="bg-accent text-white py-2 px-4 rounded-md text-center hover:bg-white hover:text-accent border-2 border-accent">Shop Now</Button></Link>
  </HeroSt>
  <div className="flex items-center justify-center lg:w-1/2 mt-10 lg:mt-0">
   
   <HeroDr><Image src={HeroImage} alt="Dekstop iamge"></Image></HeroDr>

  </div>
      </div>

    )


}