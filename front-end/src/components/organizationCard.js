import React from "react";
import '../styles/styleOrganizations.css'

const OrganizationCard = ()=>{
    return(
    <div className="card-container col-lg-3 col-xl-3 col-md-6 col-sm-12 col-xs-12 col-xxs-12">
        <div className="card">
            <div>
            <img src="assets/images/card-image.png" alt="" className="image_card" />
            </div>
            <div>
                <h4>Bright Future Education </h4>
                <p>
                    Supports underprivileged students with school supplies, tutoring
                    programs, and digital learning workshops
                </p>
            </div>
            <div className="learn-more">
                <img src="assets/icons/arrow-forward.svg" alt="" />
                <a href="org_profile.html">learn more</a>
            </div>
        </div>
    </div>
    );
};

export default OrganizationCard ;