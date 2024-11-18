
import Header from "./components/header/Hader";
import HeroSection from "./components/firstPage/heroSection/HeroSection";
import CategoryPage from "./components/firstPage/CategoryPage";
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
    </>
  );
}
