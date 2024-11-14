import Link from "next/link";


export default function Header(){


    return (
        <>
        <div className="flex w-full items-center justify-center p-6 bg-background text-Text lg:text-xl" >
            <div>
                <ul className="flex items-center justify-center gap-8">
                    <li className="hover:text-accent"><Link href={"/"}>Home</Link></li>
                    <li className="hover:text-accent"><Link href={"/products"}>Products</Link></li>
                    <li className="hover:text-accent"><Link href={"/aboutUs"}>About us</Link></li>
                    <li className="hover:text-accent"><Link href={"/contact"}>Contact us</Link></li>
                </ul>
            </div>
        </div>
        </>
    )

}