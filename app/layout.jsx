import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { inter } from "@/app/ui/fonts";

export const metadata = {
  title: "My App",
  description: "Using Inter font globally",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white">
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
