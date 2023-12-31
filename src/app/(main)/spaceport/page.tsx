import Link from "next/link";
import React from "react";

export default function SpacePort() {
   const buttons = [
      {
         title: "Check forecast",
         url: "forecast",
      },
      {
         title: "Munitions inventory",
         url: "munitions",
      },
      {
         title: "Refuel",
         url: "refuel",
      },
   ];
   return (
      <div className="w-full flex flex-col justify-center items-center">
         <div className="p-12">
            <div className="flex justify-center content-center">
               <h1 className="heading1">Spaceport</h1>
            </div>
            <div className="flex md:flex-row flex-col mt-12 justify-center items-center">
               {buttons.map((bu, i) => {
                  return (
                     <div key={i} className="group relative mb-12 md:mx-12">
                        <div className="absolute left-0 group-hover:-left-12 group-hover:scale-125 transition-all duration-300 border-y-2 border-l-2 rounded-l-xl border-cyan-800 w-4 h-12" />
                        <div className="absolute right-0 group-hover:-right-12 group-hover:scale-125 transition-all duration-300 border-y-2 border-r-2 rounded-r-xl border-cyan-800 w-4 h-12" />
                        <Link href={`/spaceport/${bu.url}`}>
                           <button
                              type="button"
                              className="text-2xl font-normal group-hover:font-bold group-hover:scale-110 transition-all duration-300 ease-in-out border-2 rounded-xl border-cyan-800 px-6 h-12"
                           >
                              <span className="uppercase">{bu.title}</span>
                           </button>
                        </Link>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
}
