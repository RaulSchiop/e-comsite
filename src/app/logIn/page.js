"use client"

import { motion,AnimatePresence } from 'framer-motion';
import { useState } from "react";
import Button from "../components/Aminations/Btn";



export default function LogIn(){
    
    const [change,setChange]=useState(true);

    function handleLayoutChange(){
        setChange(!change);
    }

    return(
        <div>
        <AnimatePresence mode="wait">
          {change === true ? (
            <motion.div className="flex h-screen w-full items-center justify-center lg:gap-36 flex-wrap bg-black sm:gap-10"
              key="logInView"
              
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                key="LogIn"
                initial={{ y: 500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -500, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <form className="flex flex-col gap-3">
                  <h1 className="text-Text text-3xl">Log in</h1>
                  <input placeholder="Email"name="Email"type="email"required className="text-Text bg-cardBackground placeholder-Text border focus:border-secondarytext rounded px-4 py-2 focus:outline-none"
                  />
                  <input placeholder="Password" name="Password" type="password" required className="text-Text bg-cardBackground placeholder-Text border focus:border-secondarytext rounded px-4 py-2 focus:outline-none"
                  />
                  <Button type="submit" href="/" className="flex gap-2 bg-accent p-2 rounded-md items-center justify-center text-Text px-10">
                    Log in
                  </Button>
                </form>
              </motion.div>
      
              <motion.div key="signIn" initial={{ y: 500, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -500, opacity: 0 }} transition={{ duration: 0.5 }} className="flex flex-col gap-3">
                <h1 className="text-Text text-3xl">Create Account</h1>
                <p className="text-Text">Register with your details to use our site</p>
                <Button onClick={handleLayoutChange} className="flex gap-2 bg-accent p-2 rounded-md items-center justify-center text-Text">
                  Create new account
                </Button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div key="registerView" className="flex h-screen w-full items-center justify-center lg:gap-36 flex-wrap bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div key="Register"
                initial={{ y: 500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -500, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <form className="flex flex-col gap-3">
                  <h1 className="text-Text text-3xl">Register</h1>
                  <input placeholder="Name" name="name" type="text" required className="text-Text bg-cardBackground placeholder-Text border focus:border-secondarytext rounded px-4 py-2 focus:outline-none"/>
                  <input placeholder="Email" name="Email" type="email" required className="text-Text bg-cardBackground placeholder-Text border focus:border-secondarytext rounded px-4 py-2 focus:outline-none"/>
                  <input placeholder="Password" name="Password" type="password" required className="text-Text bg-cardBackground placeholder-Text border focus:border-secondarytext rounded px-4 py-2 focus:outline-none"/>
                  <Button type="submit" href="/" className="flex gap-2 bg-accent p-2 rounded-md items-center justify-center text-Text px-10">
                    Register
                  </Button>
                </form>
              </motion.div>
      
              <motion.div   className="flex flex-col gap-3"
                key="signInAlt"
                initial={{ y: 500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -500, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-Text text-3xl">Log In</h1>
                <p className="text-Text">Log in if you have an account</p>
                <Button onClick={handleLayoutChange} className="flex gap-2 bg-accent p-2 rounded-md items-center justify-center text-Text">
                  Create new account
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
    )
}