import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

export const metadata = {
  title: "TaskNest | Todo App",
  description: "Your Haven for To-Do Lists",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-slate-50 min-h-screen min-w-[350px]`}
      >
        <Header />
        <div className="max-w-[800px] mx-auto border-r border-l">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
