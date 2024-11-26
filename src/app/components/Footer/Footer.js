import Link from "next/link"
import Image from "next/image"
import instagramImg from "../../../../public/instagram.png"
import facebookImg from "../../../../public/facebook.png"

export default function Footer(){

    return(

    <div className="relative bottom-0 w-full ">

<div>
        <div className="flex items-center h-40 w-full justify-center text-Text mt-3" >
            <div className="flex  items-center w-full h-full justify-center bg-cardBackground p-5 mt-3 text-xs gap-2 lg:gap-40 lg:text-lg sm:gap-8 sm:text-sm ">
                <div className=" flex gap-3">
                    <Image width={30} height={30} src={instagramImg} alt="Instagram logo"></Image>
                    <Image width={30} height={30} src={facebookImg} alt="Facebook logo"></Image>
                </div>
                <ul className="flex items-center justify-center gap-2 lg:gap-12 sm:gap-7">
                    <li className="hover:text-accent"><Link href={"/"}>Home</Link></li>
                    <li className="hover:text-accent"><Link href={"/products"}>Products</Link></li>
                    <li className="hover:text-accent"><Link href={"/aboutUs"}>About</Link></li>
                    <li className="hover:text-accent"><Link href={"/contact"}>Contact</Link></li>
                </ul>
            </div>
        </div> 
</div>

    </div>

    )

}