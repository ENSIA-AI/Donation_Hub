import React from "react";
import "../styles/OrganizationProfile.css";
const OrgContactInfos = ({ contactData }) => {
  return (
    <div className="org-contact-infos col-xl-3 col-lg-3 col-md-2 col-sm-2 col-xs-11 col-xxs-11">
      <div className="org-contact-infos-card flex-row">
        {contactData.map((item, index) => (
          <div key={index} className="org-contact-info col-xs-5 col-xxs-12">
            <div className="org-contact-type flex-row">
              <i className={item.icon} style={item.styleIcon || {}} />
              <h1 style={item.styleTitle || {}}>{item.type}</h1>
            </div>
            {item.isLink ? (
              <a href={item.href} className="org-contact-link">
                {item.content}
              </a>
            ) : item.isMedia ? (
              item.links.map((link, i) => (
                <div key={i} className="flex-row media">
                  <img
                    src={
                      link.name === "Facebook"
                        ? "/icons/facebook.jpg"
                        : link.name === "Instagram"
                          ? "/icons/instagram.jpg"
                          : "/icons/default.png"
                    }
                    className="social_link_icon"
                    alt={link.name + "-icon"}
                  />

                  <a href={link.href} className="org-contact-link">
                    {link.name}
                  </a>
                  <br />
                  <br />
                </div>
              ))
            ) : (
              <p>{item.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrgContactInfos;
