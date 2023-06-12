"use client";
import Button from "@/components/Button";
import React, { useState } from "react";

interface WeatherResult {
   weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
   }[];
   base: string;
   main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
   };
   name: string;
   wind: {
      speed: number;
      deg: number;
   };
}

export default function Forecast() {
   const [isLoading, setIsLoading] = useState(false);
   const [weatherData, setWeatherData] = useState<null | WeatherResult>(null);

   const [searchCity, setSearchCity] = useState("");

   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchCity(event.target.value);
   };

   async function fetchWeatherResults() {
      try {
         setIsLoading(true);
         const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}weather?q=${searchCity}&units=metric&APPID=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
         );
         const data = await response.json();
         if (data) {
            setWeatherData(data);
            setIsLoading(false);
         }
      } catch (error) {
         console.error(error);
         setIsLoading(false);
      }
   }

   return (
      <div className="w-full flex justify-center items-center">
         <div className="flex flex-col justify-center items-center p-12">
            <h1 className="heading1">Launch-site weather forecast</h1>
            <div className="flex flex-col space-y-6 mt-12">
               <div className="flex flex-col justify-center text-center items-center">
                  <label className="block text-white text-sm font-bold mb-1">
                     Enter the launch site location
                  </label>
                  <input
                     onFocus={() => setSearchCity("")}
                     className="bg-slate-900 shadow appearance-none border-2 border-cyan-800 rounded w-full py-2 px-3 text-white mb-3 leading-tight text-center"
                     type="text"
                     value={searchCity}
                     onChange={onChange}
                  />
               </div>

               <Button
                  loading={isLoading}
                  onClick={() => fetchWeatherResults()}
               >
                  Submit
               </Button>
            </div>

            {weatherData && !isLoading && (
               <div className="border-2 border-cyan-800 rounded mt-12 w-full px-6 py-2">
                  <div className="flex justify-between">
                     <div>Launch Area</div>
                     <div>{weatherData.name}</div>
                  </div>
                  <div className="flex justify-between">
                     <div>Current Temp.</div>
                     <div>{weatherData.main.temp} °C</div>
                  </div>
                  <div className="flex justify-between">
                     <div>Conditions</div>
                     <div>{weatherData.weather[0].main}</div>
                  </div>
                  <div className="flex justify-between">
                     <div>Wind speed</div>
                     <div>{Math.floor(weatherData.wind.speed * 3.6)} km/h</div>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
}
