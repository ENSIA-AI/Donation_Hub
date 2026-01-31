import React from "react";

const DashRejCard =(props)=>{
   return(
     <div className="org_card rej_card">
        <div className="rej">
           <p>{props.name}</p>
        </div>
        <div className="rej">
           <p>{props.email}</p>
        </div>
        <div className="rej">
           <p>{props.number}</p>
        </div>
        <div className="rej">
           <p>{props.category}</p>
        </div>
        <div className="rej">
           <p>{props.wilaya}</p>
        </div>
        <div className="rej">
            
           <p>{props.proof}</p>
        </div>
     </div>
   );
};
export default DashRejCard;
