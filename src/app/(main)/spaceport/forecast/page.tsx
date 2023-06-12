"use client";
import React from "react";

export default function Forecast() {
   const test = "cape town";
   // async function fetchWeatherResults() {
   //    const res = await fetch(
   //       `${process.env.BASE_URI}weather?q=${test}&units=metric&APPID=${process.env.WEATHER_API_KEY}`
   //    );
   //    console.log(res.json);
   // }
   return (
      <div className="w-full flex justify-center items-center">
         <div className="flex flex-col">
            <h1>Forecast</h1>
            {/* <input /> */}
            {/* <button type="button" onClick={() => fetchWeatherResults()}>
               TEST
            </button> */}
            <button
               type="button"
               onClick={() => console.log(process.env.NEXT_PUBLIC_TEST_SECRET)}
            >
               TEST
            </button>
         </div>
      </div>
   );
}
