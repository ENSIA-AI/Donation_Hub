import React, { useState } from "react";

import "../styles/AnnouncementStyle.css";


import AnnouncemetCard from "../components/AnnouncementCard";
import Search from "../components/Search";
import SeeMoreButton from "../components/SeeMoreButton";

const announcements = [
  {
    id: 1,
    announcementDate: "November 5, 2025",
    announcementImage: "assets/pic/education.jpeg",
    announcementTitle: "New School Supplies Drive",
    announcementDescription:
      "We distributed over 500 school kits to children in the rural areas of Blida...",
    region: "algiers",
    category: "education",
  },

  {
    id: 2,
    announcementDate: "November 5, 2025",
    announcementImage: "assets/pic/education.jpeg",
    announcementTitle: "New School Supplies Drive",
    announcementDescription:
      "We distributed over 500 school kits to children in the rural areas of Blida...",
    region: "algiers",
    category: "education",
  },

  {
    id: 3,
    announcementDate: "November 5, 2025",
    announcementImage: "assets/pic/education.jpeg",
    announcementTitle: "New School Supplies Drive",
    announcementDescription:
      "We distributed over 500 school kits to children in the rural areas of Blida...",
    region: "algiers",
    category: "education",
  },

  {
    id: 4,
    announcementDate: "November 5, 2025",
    announcementImage: "assets/pic/education.jpeg",
    announcementTitle: "New School Supplies Drive",
    announcementDescription:
      "We distributed over 500 school kits to children in the rural areas of Blida...",
    region: "algiers",
    category: "education",
  },

  {
    id: 5,
    announcementDate: "November 5, 2025",
    announcementImage: "assets/pic/education.jpeg",
    announcementTitle: "New School Supplies Drive",
    announcementDescription:
      "We distributed over 500 school kits to children in the rural areas of Blida...",
    region: "algiers",
    category: "education",
  },

  {
    id: 6,
    announcementDate: "November 5, 2025",
    announcementImage: "assets/pic/education.jpeg",
    announcementTitle: "New School Supplies Drive",
    announcementDescription:
      "We distributed over 500 school kits to children in the rural areas of Blida...",
    region: "algiers",
    category: "education",
  },

  {
    id: 7,
    announcementDate: "November 5, 2025",
    announcementImage: "assets/pic/education.jpeg",
    announcementTitle: "New School Supplies Drive",
    announcementDescription:
      "We distributed over 500 school kits to children in the rural areas of Blida...",
    region: "algiers",
    category: "education",
  },

  {
    id: 8,
    announcementDate: "November 5, 2025",
    announcementImage: "assets/pic/education.jpeg",
    announcementTitle: "New School Supplies Drive",
    announcementDescription:
      "We distributed over 500 school kits to children in the rural areas of Blida...",
    region: "algiers",
    category: "education",
  },
  {
  id: 9,
    announcementDate: "November 5, 2025",
    announcementImage: "assets/pic/education.jpeg",
    announcementTitle: "New School Supplies Drive",
    announcementDescription:
      "We distributed over 500 school kits to children in the rural areas of Blida , We distributed over 500 school kits to children in the rural areas of Blida,...",
    region: "algiers",
    category: "education",
},
];

const Announcements = () => {
  const loadMore = () => {
    setVisibleCount((prev) => prev + 3); // show 3 more cards
  };
  const [visibleCount, setVisibleCount] = useState(6);
  return (
    <>
      {/* ===== HEADER ===== */}
      <section className="header-section">
        <div className="containerAnn">
          <div className="heroo col-xl-12 col-lg-9 col-md-9 col-sm-9 col-xs-10 col-xxs-12">
            <h1 className="page-title">Active Campaigns & Announcements</h1>
            <p className="page-description">
              Discover urgent needs and ongoing campaigns from verified
              organizations. Your contribution can make a real difference.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SEARCH BAR ===== */}
      <Search />

      {/* ===== ANNOUNCEMENT CARDS ===== */}
      <div className="containerAnn">
        <div className="announcements flex-row">
          {announcements.slice(0, visibleCount).map((announcement) => (
            <AnnouncemetCard
              key={announcement.id}
              announcementDate={announcement.announcementDate}
              announcementImage={announcement.announcementImage}
              announcementTitle={announcement.announcementTitle}
              announcementDescription={announcement.announcementDescription}
            />
          ))}
        </div>

        {/* ===== SEE MORE BUTTON / NO MORE POSTS ===== */}
{visibleCount < announcements.length ? (
  <SeeMoreButton onClick={loadMore} />
) : (
  <p className="no-more-posts">No more posts</p>
)}
      </div>
    </>
  );
};

export default Announcements;
