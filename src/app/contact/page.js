import Header from "../components/header/Hader"
import AnimationOpacity from "../components/Aminations/opacityAnimation"
import Footer from "../components/Footer/Footer"
export default function Contact(){
    return (
       <>
        <Header></Header>
        <AnimationOpacity>
       <div className="flex h-full w-full  justify-center ">
        <div className="mt-10 bg-black w-full flex items-center justify-center flex-col p-10">
            <div className="flex gap-4 flex-col items-center justify-center mb-8">
                <h1 className="text-3xl text-accent">Contact Us</h1>
                <p className="text-secondarytext w-[60%]">Îți stăm la dispoziție 24/7 la adresa de mail onlinePc@gmail.com
                sau folosește formularul de mai jos pentru orice întrebări sau nelămuriri.</p>
                <p className="text-secondarytext w-[60%]" >Sau la numărul de telefon 07xxxxxxxx, Zilnic, între orele 08:00 - 20:00</p>
            </div>
            <form className="flex flex-col gap-4 w-screen items-center justify-center">
                <input placeholder="Name" name="name" type="text" className="text-Text bg-cardBackground placeholder-Text border focus:border-secondarytext rounded px-4 py-2 focus:outline-none w-[60%]"></input>
                <input placeholder="Email" name="Email" type="email"required className="text-Text bg-cardBackground placeholder-Text border focus:border-secondarytext rounded px-4 py-2 focus:outline-none w-[60%]"></input>
                <input placeholder="Phone Number" name="phone" type="number" className="text-Text bg-cardBackground placeholder-Text border focus:border-secondarytext rounded px-4 py-2 focus:outline-none w-[60%]"></input>
                <textarea placeholder="what is the problem?" name="problem" type="textarea" className="text-Text bg-cardBackground placeholder-Text border focus:border-secondarytext rounded px-4 py-2 focus:outline-none w-[60%] h-20 whitespace-pre-wrap"></textarea>
            </form>
        </div>
        </div>
        </AnimationOpacity>

    </>
    )
}