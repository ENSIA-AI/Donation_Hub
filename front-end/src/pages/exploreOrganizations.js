import React from "react";
import '../styles/styleOrganizations.css'
import OrganizationCard from '../components/organizationCard'
import SearchBar from "../components/SearchBar";
const ExploreOrganizations = ()=>{
 return (
 <main>

  <div className="title ">
    <h1>Verified organizations</h1>
    <p className="subtitle">
      discover trusted organizations making a real difference in our communities
    </p>
  </div>
  {/* search bar */}
   <SearchBar/>

  {/* cards */}
  <div className="container ">
    <div className="cards-container flex-row flex-row-center">
      <OrganizationCard/>
      <OrganizationCard/>
      <OrganizationCard/>
      <OrganizationCard/>
      <OrganizationCard/>
      <OrganizationCard/>
      <OrganizationCard/>
      <OrganizationCard/>
    </div>
  </div>
 </main> 
);
};

export default ExploreOrganizations;