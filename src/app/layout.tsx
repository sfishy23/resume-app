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
         <body>
            <div className={`${inter.className} text-slate-100`}>
               {children}
            </div>
         </body>
      </html>
   );
}
