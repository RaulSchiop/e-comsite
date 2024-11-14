
import "./globals.css";
import Header from "../../components/header/Hader";


export const metadata = {
  title: "Ecomerce app",
  description: "Best app for components",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
