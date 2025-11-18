
import React,{useState} from "react";
import '../styles/styleOrganizations.css';
import OrganizationCard from '../components/organizationCard';
import SearchBar from "../components/SearchBar";
import SeeMoreButton from "../components/SeeMoreButton";

const ExploreOrganizations = () => {

  const organizations = [
    {
      title: "Bright Future",
      description: "Supports underprivileged students with school supplies, tutoring programs, and digital learning workshops",
      image: "assets/images/card-image.png"
    },
    {
      title: "Green Earth Initiative",
      description: "Promotes environmental awareness through tree planting, recycling campaigns, and clean-up drives",
      image: "assets/images/card-image.png"
    },
    {
      title: "Health for All",
      description: "Provides free medical checkups and health education in underserved communities",
      image: "assets/images/card-image.png"
    },
    {
      title: "Health for All",
      description: "Provides free medical checkups and health education in underserved communities",
      image: "assets/images/card-image.png"
    },
    {
      title: "Health for All",
      description: "Provides free medical checkups and health education in underserved communities",
      image: "assets/images/card-image.png"
    },
    {
      title: "Health for All",
      description: "Provides free medical checkups and health education in underserved communities",
      image: "assets/images/card-image.png"
    },
    {
      title: "Health for All",
      description: "Provides free medical checkups and health education in underserved communities",
      image: "assets/images/card-image.png"
    },
    {
      title: "Health for All",
      description: "Provides free medical checkups and health education in underserved communities",
      image: "assets/images/card-image.png"
    },
        {
      title: "Health for All",
      description: "Provides free medical checkups and health education in underserved communities",
      image: "assets/images/card-image.png"
    },
    {
      title: "Health for All",
      description: "Provides free medical checkups and health education in underserved communities",
      image: "assets/images/card-image.png"
    },
    {
      title: "Health for All",
      description: "Provides free medical checkups and health education in underserved communities",
      image: "assets/images/card-image.png"
    },
    {
      title: "Health for All",
      description: "Provides free medical checkups and health education in underserved communities",
      image: "assets/images/card-image.png"
    },
  
    // Add more organizations as needed
  ];
  
  const [visibleCount,setVisibleCount] = useState(8);
  const loadMore = () => {
      setVisibleCount(prev =>prev + 4);
  }
  return (
    <main>
      <div className="title">
        <h1>Verified organizations</h1>
        <p className="subtitle">
          Discover trusted organizations making a real difference in our communities
        </p>
      </div>

      {/* Search bar */}
        <SearchBar />
    
      

      {/* Cards rendered dynamically */}
      <div className="container">
        <div className="cards-container flex-row flex-row-center">
          {organizations.slice(0,visibleCount).map((org, index) => (
            <OrganizationCard
              key={index}
              title={org.title}
              description={org.description}
              image={org.image}
            />
          ))}
        </div>
      </div>
      {visibleCount< organizations.length ?(<SeeMoreButton onClick={loadMore}/>) :<span className="noMore"> <p>no more cards</p></span>}
      
    </main>
  );
};

export default ExploreOrganizations;