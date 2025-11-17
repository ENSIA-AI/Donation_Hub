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
      <OrganizationCard title="Bright Futer Organization" discription="Supports underprivileged students with school supplies, tutoring programs, and digital learning workshops" image="assets/images/card-image.png" />
      <OrganizationCard title="Bright Futer Organization" discription="Supports underprivileged students with school supplies, tutoring programs, and digital learning workshops" image="assets/images/card-image.png"  />
      <OrganizationCard title="Bright Futer Organization" discription="Supports underprivileged students with school supplies, tutoring programs, and digital learning workshops" image="assets/images/card-image.png"  />
      <OrganizationCard title="Bright Futer Organization" discription="Supports underprivileged students with school supplies, tutoring programs, and digital learning workshops" image="assets/images/card-image.png" />
      <OrganizationCard title="Bright Futer Organization" discription="Supports underprivileged students with school supplies, tutoring programs, and digital learning workshops" image="assets/images/card-image.png" />
      <OrganizationCard title="Bright Futer Organization" discription="Supports underprivileged students with school supplies, tutoring programs, and digital learning workshops" image="assets/images/card-image.png" />
      <OrganizationCard title="Bright Futer Organization" discription="Supports underprivileged students with school supplies, tutoring programs, and digital learning workshops" image="assets/images/card-image.png" />
      <OrganizationCard title="Bright Futer Organization" discription="Supports underprivileged students with school supplies, tutoring programs, and digital learning workshops" image="assets/images/card-image.png" />
    </div>
  </div>
 </main> 
);
};

export default ExploreOrganizations;