import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "Resume",
   description: "A little side project to test next 13",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body
            style={{
               backgroundImage: `url(${process.env.FIXED_URL}/mainBG.jpg)`,
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
               backgroundPosition: "center center",
            }}
            className={`${inter.className} text-slate-100`}
         >
            <div className="text-yellow-500 font-bold">
               {process.env.FIXED_URL}
            </div>
            {children}
         </body>
      </html>
   );
}
