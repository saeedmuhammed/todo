// Icons import
import { useState } from "react";
import { Eye, Watch } from "../../Icons/Icons";

// Image Import
import avatar from "../../Images/27470335_7309683.jpg";

// Components Import
import Description from "../Description/Description";


export default function Card({ card}) {
  const [showDetails, setShowDetails] = useState(false);


  function formatDate(string) {
    const date = new Date(string);
    const options = { month: 'short', day: 'numeric' };
    return date.toLocaleString('en-US', options);
  }




  return (
    <>
    
    {showDetails ? <Description setShowDetails={setShowDetails} card={card} /> 
    :
     <div className="bg-white border-solid border border-[#EDF0FF] p-2 rounded-lg my-2 cursor-pointer" onClick={()=>setShowDetails(true)}>
       <div className={`bg-yellow-300 w-1/4 h-[9px] rounded-2xl mb-2`}></div>
       <h1 className="font-bold text-sm">{card.Task}</h1>
       <div className="flex justify-between items-end mt-2">
         <div className="flex items-center">
           <Eye className="inline-block mr-1" />
           <Watch className="inline-block mr-1 ml-2" />
           <h3 className="inline-block text-primary opacity-50 font-bold text-xs">
             {formatDate(card.created_at)}
           </h3>
         </div>
         <div className="flex-shrink-0 hidden lg:block">
           <img src={avatar} alt="avatar" className="rounded-full w-9 h-9" />
         </div>
       </div>
     </div>
    }
    </> 
  );
}
