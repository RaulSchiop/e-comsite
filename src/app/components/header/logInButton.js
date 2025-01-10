"use client";
import { useState, useEffect } from "react";
import Button from "../Aminations/Btn";
import Link from "next/link";
import Image from "next/image";
import ProfileIcon from "../../../../public/ProfileIcon.svg";
import { useRouter } from "next/navigation";

export default function LogInButton() {
   const [localStorageState, setLocalStorageState] = useState(false);
   const router = useRouter();

   function handleLogOut() {
      localStorage.removeItem("UserLogIn");
      setLocalStorageState(false);
      router.push("/");
   }

   useEffect(() => {
      const user = JSON.parse(localStorage.getItem("UserLogIn"));

      if (user) {
         setLocalStorageState(true);
      } else {
         setLocalStorageState(false);
      }
   }, []);

   return (
      <div className="flex items-center justify-center gap-2">
         <Button>
            <Link
               className="flex gap-2 bg-accent p-2 rounded-md items-center justify-center text-Text"
               href={localStorageState === true ? "/profile" : "/logIn"}
            >
               {localStorageState === true ? (
                  <Image
                     src={ProfileIcon}
                     alt="Profile page icon"
                     width={30}
                     height={30}
                  />
               ) : (
                  <h1>Log In</h1>
               )}
            </Link>
         </Button>
         {localStorageState === true ? (
            <Button
               onClick={handleLogOut}
               className="flex gap-2 border-accent border-2 p-2 rounded-md items-center justify-center text-Text"
            >
               Log out
            </Button>
         ) : (
            <></>
         )}
      </div>
   );
}
