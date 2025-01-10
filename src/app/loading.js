import Image from "next/image";
import loading from "../../public/loading.svg";

export default function LoadingPage() {
   return (
      <div className="flex items-center justify-center h-screen w-screen">
         <Image src={loading} width={200} height={200} alt="loading..." />
      </div>
   );
}
