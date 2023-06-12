import React from "react";

function ExperienceCard({
   dates,
   companyName,
   role,
   description,
}: {
   dates: string;
   companyName: string;
   role: string;
   description: string;
}) {
   return (
      <div className="w-[600px] h-[500px] flex flex-col border-2 border-cyan-800 rounded px-6 py-12 space-y-4">
         <div className="w-full flex justify-between">
            <div>Dates:</div>
            <div>{dates}</div>
         </div>
         <div className="w-full flex justify-between">
            <div>Company:</div>
            <div>{companyName}</div>
         </div>
         <div className="w-full flex justify-between">
            <div>Role:</div>
            <div>{role}</div>
         </div>
         <div className="flex grow" />
         <div className="w-full flex flex-col justify-start space-y-2 mt-2">
            <div>Description:</div>
            <p className="text-justify">{description}</p>
         </div>
         <div className="flex grow" />
      </div>
   );
}

export default ExperienceCard;
