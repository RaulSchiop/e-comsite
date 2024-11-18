import Motherboard from "../../../../public/motherBoard.png"
import Image from "next/image"
import Link from "next/link"
import Button from "../Aminations/Btn"
import PreBuild from "../../../../public/PCB.jpg"
import Processor from "../../../../public/processor.png"
import HeroDr from "../Aminations/heroPage/heroDr"
import HeroSt from "../Aminations/heroPage/heroSt"

export default function CategoryPage(){

return (
<div className="grid  grid-cols-1 sm:grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 bg-cardBackground mt-10 p-10">
  
 
  <HeroSt className="items-center lg:row-span-2 justify-center bg-white rounded-2xl p-8 flex flex-col gap-2">
    <div>
    <Image width={750} height={750} src={PreBuild} alt="preBuild"></Image>
    <h3 className="text-xl font-semibold mb-2">Pre-built PCs</h3>
    <p className="text-secondarytext  mb-4 w-3/4">Browse a wide range of pre-built PCs tailored for gaming, work, and multimedia tasks, ready to perform right out of the box.</p>
    
    <Button className="items">
    <Link href="/products/Pcs" className="bg-accent text-white  rounded-md p-2 text-center hover:bg-white hover:text-accent border-2 border-accent">
      View More
    </Link>
    </Button>
    </div>
  </HeroSt>

 
  <HeroDr className=" items-start bg-white rounded-2xl p-8 flex flex-col gap-2">
    <Image height={150} width={150} src={Processor} alt="Processor image"></Image>
    <h3 className="text-xl font-semibold mb-2">Processors</h3>
    <p className="text-secondarytext  mb-4">Discover high-performance processors designed to enhance your computing power for both gaming and productivity tasks.</p>
    <Button>
    <Link href="/products/processors" className="bg-accent text-white  rounded-md p-2 text-center hover:bg-white hover:text-accent border-2 border-accent">
      View More
    </Link>
    </Button>
  </HeroDr>


  <HeroDr className="items-start bg-white rounded-2xl p-8 flex flex-col gap-2">
    <Image  src={Motherboard} alt="Motherboard" height={150} width={150}></Image>
    <h3 className="text-xl font-semibold mb-2">Motherboards</h3>
    <p className="text-secondarytext  mb-4">Browse a wide range of pre-built PCs tailored for gaming, work, and multimedia tasks, ready to perform right out of the box.</p>
    <Button>
    <Link href="/products/motherBoards" className="bg-accent text-white  rounded-md p-2 text-center hover:bg-white hover:text-accent border-2 border-accent">
      View More
    </Link>
    </Button>
  </HeroDr>

</div>


    
)

}