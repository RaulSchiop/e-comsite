import Link from "next/link";
import Logo from "../../../../public/Logo.png"
import Image from "next/image";
import CartLogo from "../../../../public/cart.svg"
export default function Header(){


    return (
        <>
        <div className="flex w-full items-center justify-center bg-background text-Text " >
            <div className="flex w-full items-center justify-center gap-4 lg:gap-48 sm:gap-8 ">
                <Image src={Logo} width={150} height={150} alt="logo" ></Image>
                <ul className="flex items-center justify-center gap-6 lg:gap-12 sm:gap-7">
                    <li className="hover:text-accent"><Link href={"/"}>Home</Link></li>
                    <li className="hover:text-accent"><Link href={"/products"}>Products</Link></li>
                    <li className="hover:text-accent"><Link href={"/aboutUs"}>About</Link></li>
                    <li className="hover:text-accent"><Link href={"/contact"}>Contact</Link></li>
                </ul>
                <button className="flex gap-2 bg-secondary p-2 rounded-md items-center justify-center"><Image src={CartLogo} alt="cart"></Image> 0</button>
            </div>
        </div>
        </>
    )

}