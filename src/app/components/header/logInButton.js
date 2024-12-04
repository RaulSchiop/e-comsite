'use client'
import { useState, useEffect } from "react";
import Button from "../Aminations/Btn";
import Link from "next/link";
import Image from "next/image";
import ProfileIcon from "../../../../public/ProfileIcon.svg";

export default function LogInButton() {
  const [localStorageState, setLocalStorageState] = useState(false);

  useEffect(() => {

localStorage.setItem('UserLogin', JSON.stringify({ userId: "12345" }));


const user = JSON.parse(localStorage.getItem("UserLogin"));
if (user) {
  setLocalStorageState(true);
} else {
  setLocalStorageState(false); 
}

  }, []);

  return (
    <Button>
      <Link
        className="flex gap-2 bg-accent p-2 rounded-md items-center justify-center text-Text text-nowrap"
        href={localStorageState === true ? "/profile" : "/logIn"}
      >
        {
        localStorageState === true ?
        <Image
         
          src={ProfileIcon}
          alt="Profile page icon"
          width={30} height={30}
        />:
        <h1>Log In</h1>
        }
        
      </Link>
    </Button>
  );
}
