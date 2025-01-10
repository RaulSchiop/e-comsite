import "./globals.css";
import Header from "./components/header/Hader";
import { CartProvider } from "./context/context";

export const metadata = {
   title: "Ecomerce app",
   description: "Best app for components",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>
            <CartProvider>{children}</CartProvider>
         </body>
      </html>
   );
}
