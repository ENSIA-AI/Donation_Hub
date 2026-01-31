import React from "react";
import { Link } from "react-router-dom";
const DashOrgCard = (props) =>{
    return(
     <div className="org_card">
       <div className="img">
         <p>ORG</p>
       </div>
       <div className="cont1">
         <div className="org_name">
            <h4>{props.title}</h4>
         </div>
          <div className="org_link_prof">
           <Link to={props.link}>link to ptofile</Link>
          </div>
       </div>
       <div className="org_wilaya">
         <p>{props.wilaya}</p>
       </div>
       <div className="org_category">
         <p>{props.category}</p>
       </div>
     </div>
    );
};
export default DashOrgCard;