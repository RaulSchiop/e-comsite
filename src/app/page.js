import Header from "./components/header/Hader";
import HeroSection from "./components/firstPage/heroSection/HeroSection";
import CategoryPage from "./components/firstPage/CategoryPage";
import Card from "./components/firstPage/Card/cardsPage";
import Footer from "./components/Footer/Footer";

// teste the conncetion
//import {connectToDatabase} from "../app/utils/mongoDb"

export default function Home() {
   // teste the conncetion
   //connectToDatabase();

   return (
      <>
         <Header></Header>
         <HeroSection></HeroSection>
         <CategoryPage></CategoryPage>
         <Card></Card>
         <Footer></Footer>
      </>
   );
}
