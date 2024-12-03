'use client'
import { useState,useEffect } from "react";
import Button from "../Aminations/Btn";
import Link from "next/link";
import Image from "next/image";
import ProfileIcon from "../../../../public/ProfileIcon.svg"

export default function LogInButton(){
const [localStorageState , setLocalStorageState ] = useState(false)

useEffect(() => {
    const idLocal = localStorage.getItem("UserLogin");
    if (idLocal) {
      setLocalStorageState(true);
    } else {
      setLocalStorageState(false);
    }
  }, []);


return(
    <Button>
            <Link className="flex gap-2 bg-accent p-2 rounded-md items-center justify-center text-Text text-nowrap" href={localStorageState==false ? "/profile" : "/logIn"}>
            <Image className="hidden sm:hidden md:block text-nowrap" src={ProfileIcon} alt="Profile page icon"></Image>{localStorageState==false ? "Profile" : "Log In"}</Link> 
    </Button> 
)


}