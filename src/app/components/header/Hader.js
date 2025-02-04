import Link from "next/link";
import Logo from "../../../../public/Logo.png";
import Image from "next/image";

import HaderAnim from "../Aminations/headerAnimation";
import Cart from "../cart/cart";
import LogInButton from "./logInButton";

export default function Header() {
   return (
      <>
         <HaderAnim className="flex items-center w-full justify-center text-Text mt-3">
            <div className="flex  items-center w-[90%] justify-center bg-cardBackground p-5 mt-3 rounded-2xl h-24 text-xs gap-2 lg:gap-40 lg:text-lg sm:gap-8 sm:text-sm ">
               <Link href={"/"}>
                  <Image
                     className="hidden sm:hidden md:block"
                     src={Logo}
                     width={150}
                     height={150}
                     alt="logo"
                  ></Image>
               </Link>
               <ul className="flex items-center justify-center gap-2 lg:gap-12 sm:gap-7">
                  <li className="hover:text-accent">
                     <Link href={"/"}>Home</Link>
                  </li>
                  <li className="hover:text-accent">
                     <Link href={"/products"}>Products</Link>
                  </li>
                  <li className="hover:text-accent">
                     <Link href={"/aboutUs"}>About</Link>
                  </li>
                  <li className="hover:text-accent">
                     <Link href={"/contact"}>Contact</Link>
                  </li>
               </ul>
               <div className="flex items-center justify-center gap-2">
                  <Cart></Cart>

                  <LogInButton></LogInButton>
               </div>
            </div>
         </HaderAnim>
      </>
   );
}
