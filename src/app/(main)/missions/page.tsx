"use client";
import Carousel from "@/components/Carousel";
import React from "react";
import data from "../../../content/content.json";

export default function Missions() {
   const cardsData = data.experience.map((v, i) => {
      return {
         dates: v.dates,
         companyName: v.company,
         role: v.jobTitle,
         description: v.description,
      };
   });
   return (
      <div className="w-full flex flex-col justify-center items-center">
         <div className="p-12">
            <div className="flex justify-center content-center">
               <h1 className="heading1">MISSIONS</h1>
            </div>
            <div className="mt-12">Swipe to see previous missions!</div>
            <div className="flex justify-center items-center w-[600px] mt-12">
               <Carousel slides={cardsData} />
            </div>
         </div>
      </div>
   );
}
