import React from "react";
import "../styles/OrganizationProfile.css";

const OrgHero = ({
  OrgHeroImage,
  OrgLogoImage,
  OrgName,
  OrgSlogan,
  OrgType,
}) => {
  return (
    <section id="organization_hero">
      <div className="fluid_container">
        <div className="organization-hero-elements">
          <div className="organization_hero_image">
            <img
              src={OrgHeroImage}
              alt={`${OrgName} hero image`}
              className="full_image organization_hero_img"
            />
          </div>
          <div className="organization_profile_description flex-row">
            <div className="organization_logo_image col-xl-2-5 col-lg-3 col-md-3 col-sm-3 col-xs-3 col-xxs-5">
              <img
                src={OrgLogoImage}
                alt={`${OrgName} logo`}
                className="full_image organization_logo_img"
              />
            </div>
            <div className="organization_details col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9 col-xxs-7 flex-row">
              <div className="organization_identity">
                <h1>{OrgName}</h1>
                <p>{OrgSlogan}</p>
              </div>

              <div className="organization_badges flex-row d-none-xxs">
                <div className="verified_bdg bdg_name flex-row">
                  <div className="verified_btn bdg_btn">
                    <i className="fa-solid fa-circle-check" />
                  </div>
                  <div>verified</div>
                </div>
                <div className="type_bdg bdg_name flex-row">
                  <div className="type-btn bdg_btn">
                    <i className="fa-solid fa-list" />
                  </div>
                  <div>{OrgType}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrgHero;
