import React , { useEffect, useState } from "react";
import axios from "../api/axios";
import DashRejCard from "./DashRejCard";

const DashRejTable = ()=>{
    const [rejected ,setRejected]=useState([]);
    useEffect(()=>{
        axios
        .get('/organization?status=rejected')
        .then((response)=>{
            setRejected(response.data);
        })
        .catch((error)=>{
            console.error("Error fetching organizations:", error);
        });
    },[]);
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
                { rejected.slice(0,10).map((rej)=>(
               <DashRejCard
                name={rej.org_name}
                email={rej.org_email}      // corrected
                number={rej.org_phone}     // corrected
                category={rej.category?.category}
                wilaya={rej.wilaya?.wilaya_name}
                proof={rej.org_proof_url}
                />

                ))
                }
            </div>
        </div>
    );
};
export default DashRejTable;