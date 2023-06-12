import React from "react";
import data from "../../../content/content.json";

function About() {
   return (
      <div className="w-full flex justify-center items-center">
         <div className="w-full flex p-12">
            <div className="w-full flex flex-col justify-center items-center space-y-12">
               <div>
                  <h1 className="heading1">Introduction</h1>
               </div>
               <div className="w-[450px] flex flex-col border-2 border-b-0 border-cyan-800 rounded-t-xl px-6 py-2 space-y-4">
                  <p className="text-justify pb-12">{data.introduction}</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default About;

function NeedToAddThisLater() {
   return (
      <div>
         <a href="https://www.freepik.com/free-photo/3d-render-abstract-background-with-flowing-digital-particles-design_22134616.htm#page=3&query=scifi%20splash%20future%20banner&position=0&from_view=keyword&track=ais">
            Image by kjpargeter
         </a>{" "}
         on Freepik
      </div>
   );
}
