import React from "react";
const DashDonaCard =(props)=>{
   return(
      <div className="org_card">
        <div className="card_con">
           <p>{props.donner}</p>
        </div>
        <div className="card_con">
           <p>{props.receiver}</p>
        </div>
        <div className="card_con con2">
           <p>{props.type}</p>
           <p className="amount">{props.amount}</p>
        </div>
        <div className="card_con">
           <p>{props.date}</p>
        </div>
        <div className="card_con">
           <p>{props.post}</p>
        </div>
      </div>
   );
};
export default DashDonaCard;