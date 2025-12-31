import React from "react";
import DashRejCard from "./DashRejCard";

const DashRejTable = ()=>{
    return(
       <div className="dashOrgTable">
            <div className="orgDashTitle">
            <h1> Rejected Organizations</h1>
            </div>
            <div className="rej_table">
                <div className="rej_title">
                    <div className="rej_title_cont">
                        <p>organization name</p>
                    </div>
                    <div className="rej_title_cont">
                        <p>Email Adress</p>
                    </div>
                    <div className="rej_title_cont">
                        <p>Phone number</p>
                    </div>
                    <div className="rej_title_cont">
                        <p>Category</p>
                    </div>
                    <div className="rej_title_cont">
                        <p>Wilaya</p>
                    </div>
                    <div className="rej_title_cont">
                        <p>Proof</p>
                    </div>
                </div>
                <DashRejCard
                name= "emaple name"
                email= "exemple@mail.com"
                number= "058475275" 
                category = "category"
                wilaya = "wilaya"
                proof = "proof"
                />
            </div>
        </div>
    );
};
export default DashRejTable;