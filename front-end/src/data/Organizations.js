export const Organizations = [
  {
    id: 1,
    name: "HopeBridge",
    slogan: "Supporting Communities with Care",
    type: "Non-profit",
    heroImage: "assets/Images/organization-hero-image.jpg",
    logoImage: "assets/Images/organization_logo.jpg",
    description:
      "HopeBridge Foundation is a non-profit organization established in 2015 to support underprivileged families and promote access to education and healthcare in Algeria.",
    posts: [
      {
        id: 1,
        date: "November 5, 2025",
        image: "assets/Images/post1.png",
        title: "New School Supplies Drive",
        description:
          "We distributed over 500 school kits to children in rural areas of Blida...",
      },
      {
        id: 2,
        date: "October 12, 2025",
        image: "assets/Images/post2.png",
        title: "Food Donation Event",
        description:
          "Thanks to your donations, we delivered food packages to 120 families...",
      },
      {
        id: 3,
        date: "November 7, 2025",
        image: "assets/Images/post3.png",
        title: "Medical Supplies Drive",
        description:
          "Our volunteers distributed essential medical kits across rural clinics...",
      },
    ],
    mission: {
      mission:
        "To provide lasting support to families in need through ethical giving and community-first programs.",
      vision:
        "To create a society where compassion guides every action and no one is left behind.",
      image: "assets/Images/mission-vision.png",
    },
    programs: [
      {
        title: "Education for All",
        description:
          "We provide school kits, uniforms, and scholarships to children in rural and low-income areas.",
        image: "assets/Images/program1.png",
      },
      {
        title: "Clean Water Initiative",
        description:
          "We build and maintain solar-powered wells in remote communities.",
        image: "assets/Images/program2.png",
      },
    ],
    impact: [
      { value: "1,200+", description: "people reached by health programs" },
      { value: "700+", description: "children supported at school" },
      { value: "400+", description: "families receive monthly assistance" },
    ],
    values: ["Solidarity", "Transparency", "Empowerment", "Compassion"],
    contact: [
      {
        type: "Address",
        icon: "fa-solid fa-location-dot",
        content: "12 Rue Emir Abdelkader, Oran, Algeria",
      },
      { type: "Phone", icon: "fa-solid fa-phone", content: "+213 550 123 456" },
      {
        type: "Email",
        icon: "fa-solid fa-envelope",
        content: "hope@bridgedz.org",
        isLink: true,
        href: "mailto:hope@bridgedz.org",
      },
      {
        type: "Media",
        icon: "fa-solid fa-globe",
        isMedia: true,
        links: [
          {
            name: "Facebook",
            icon: "assets/Images/facebook.png",
            href: "https://web.facebook.com/",
          },
          {
            name: "Instagram",
            icon: "assets/Images/instagram.png",
            href: "https://www.instagram.com/",
          },
          { name: "Website", icon: "assets/Images/web.png", href: "#" },
        ],
      },
    ],
  },
  //   ================================================== organization 2 ==================================================
  {
    id: 2,
    name: "GreenFuture",
    slogan: "Planting Trees, Growing Hope",
    type: "Environmental NGO",
    heroImage: "assets/Images/greenfuture-hero.jpg",
    logoImage: "assets/Images/greenfuture-logo.jpg",
    description:
      "GreenFuture is dedicated to restoring Algeria's green spaces through tree planting campaigns and community awareness.",
    posts: [
      {
        id: 1,
        date: "October 20, 2025",
        image: "assets/Images/green-post1.png",
        title: "Urban Tree Planting",
        description: "Volunteers planted 200 trees in Algiers urban areas...",
      },
      {
        id: 2,
        date: "September 15, 2025",
        image: "assets/Images/green-post2.png",
        title: "Community Garden Workshop",
        description:
          "We trained 50 families on sustainable gardening techniques...",
      },
    ],
    mission: {
      mission:
        "To restore natural habitats and increase green coverage in cities and rural areas.",
      vision:
        "A future where urban and rural communities coexist with nature harmoniously.",
      image: "assets/Images/green-mission.png",
    },
    programs: [
      {
        title: "Urban Reforestation",
        description:
          "Planting trees in cities to reduce pollution and heat islands.",
        image: "assets/Images/green-program1.png",
      },
      {
        title: "Community Gardens",
        description:
          "Teaching sustainable gardening to strengthen local food security.",
        image: "assets/Images/green-program2.png",
      },
    ],
    impact: [
      { value: "3,500+", description: "trees planted" },
      { value: "1,200+", description: "volunteers engaged" },
      { value: "15", description: "communities transformed" },
    ],
    values: ["Solidarity", "Transparency", "Empowerment", "Compassion"],
    contact: [
      {
        type: "Address",
        icon: "fa-solid fa-location-dot",
        content: "25 Green Street, Algiers, Algeria",
      },
      { type: "Phone", icon: "fa-solid fa-phone", content: "+213 550 987 654" },
      {
        type: "Email",
        icon: "fa-solid fa-envelope",
        content: "contact@greenfuture.org",
        isLink: true,
        href: "mailto:contact@greenfuture.org",
      },
      {
        type: "Media",
        icon: "fa-solid fa-globe",
        isMedia: true,
        links: [
          {
            name: "Facebook",
            icon: "assets/Images/facebook.png",
            href: "https://web.facebook.com/",
          },
          {
            name: "Instagram",
            icon: "assets/Images/instagram.png",
            href: "https://www.instagram.com/",
          },
        ],
      },
    ],
  },
  //   ================================================== organization 3 ==================================================
  {
    id: 3,
    name: "TechForAll",
    slogan: "Empowering Through Technology",
    type: "Educational NGO",
    heroImage: "assets/Images/techforall-hero.jpg",
    logoImage: "assets/Images/techforall-logo.png",
    description:
      "TechForAll bridges the digital divide by providing coding classes, workshops, and devices to underserved youth.",
    posts: [
      {
        id: 1,
        date: "November 1, 2025",
        image: "assets/Images/tech-post1.png",
        title: "Coding Bootcamp",
        description:
          "Introduced 100 students to web development and programming fundamentals...",
      },
      {
        id: 2,
        date: "October 5, 2025",
        image: "assets/Images/tech-post2.png",
        title: "Robotics Workshop",
        description:
          "Students built simple robots using Arduino kits and learned programming logic...",
      },
    ],
    mission: {
      mission:
        "To provide equal access to technology education and skills development.",
      vision:
        "A future where every young person can leverage technology to improve their life and community.",
      image: "assets/Images/tech-mission.png",
    },
    programs: [
      {
        title: "Coding Classes",
        description: "Free coding classes for students aged 10-18.",
        image: "assets/Images/tech-program1.png",
      },
      {
        title: "Tech Labs",
        description:
          "Community labs with computers and internet access for digital learning.",
        image: "assets/Images/tech-program2.png",
      },
    ],
    impact: [
      { value: "500+", description: "students trained" },
      { value: "50+", description: "community workshops" },
      { value: "300+", description: "computers distributed" },
    ],
    values: ["Solidarity", "Transparency", "Empowerment", "Compassion"],
    contact: [
      {
        type: "Address",
        icon: "fa-solid fa-location-dot",
        content: "45 Digital Avenue, Oran, Algeria",
      },
      { type: "Phone", icon: "fa-solid fa-phone", content: "+213 550 654 321" },
      {
        type: "Email",
        icon: "fa-solid fa-envelope",
        content: "info@techforall.org",
        isLink: true,
        href: "mailto:info@techforall.org",
      },
      {
        type: "Media",
        icon: "fa-solid fa-globe",
        isMedia: true,
        links: [
          {
            name: "Facebook",
            icon: "assets/Images/facebook.png",
            href: "https://web.facebook.com/",
          },
          {
            name: "Instagram",
            icon: "assets/Images/instagram.png",
            href: "https://www.instagram.com/",
          },
          { name: "Website", icon: "assets/Images/web.png", href: "#" },
        ],
      },
    ],
  },
  //   ================================================== organization 4==================================================
  {
    id: 4,
    name: "Health4All",
    slogan: "Healthcare for Every Community",
    type: "Medical NGO",
    heroImage: "assets/Images/health4all-hero.jpg",
    logoImage: "assets/Images/health4all-logo.png",
    description:
      "Health4All provides free medical care, health workshops, and emergency aid to underserved communities.",
    posts: [
      {
        id: 1,
        date: "Nov 2, 2025",
        image: "assets/Images/health-post1.jpg",
        title: "Free Clinic Day",
        description: "Over 300 people received free checkups and medicines...",
      },
      {
        id: 2,
        date: "Oct 12, 2025",
        image: "assets/Images/health-post2.jpg",
        title: "Vaccination Drive",
        description: "Distributed vaccines to rural children and elders...",
      },
    ],
    mission: {
      mission: "Ensure access to essential healthcare for all.",
      vision: "A world where no one suffers due to lack of medical care.",
      image: "assets/Images/health-mission.png",
    },
    programs: [
      {
        title: "Mobile Clinics",
        description: "Bringing healthcare to remote areas.",
        image: "assets/Images/health-program1.png",
      },
      {
        title: "Health Workshops",
        description:
          "Educating communities about hygiene and disease prevention.",
        image: "assets/Images/health-program2.png",
      },
    ],
    impact: [
      { value: "10,000+", description: "patients treated" },
      { value: "150+", description: "volunteers engaged" },
      { value: "20+", description: "mobile clinics deployed" },
    ],
    values: ["Solidarity", "Transparency", "Empowerment", "Compassion"],
    contact: [
      {
        type: "Address",
        icon: "fa-solid fa-location-dot",
        content: "10 Health Street, Algiers, Algeria",
      },
      { type: "Phone", icon: "fa-solid fa-phone", content: "+213 550 321 987" },
      {
        type: "Email",
        icon: "fa-solid fa-envelope",
        content: "info@health4all.org",
        isLink: true,
        href: "mailto:info@health4all.org",
      },
    ],
  },
  //   ================================================== organization 5 ==================================================
  {
    id: 5,
    name: "YouthEmpower",
    slogan: "Building Leaders of Tomorrow",
    type: "Youth NGO",
    heroImage: "assets/Images/youthempower-hero.jpg",
    logoImage: "assets/Images/youthempower-logo.png",
    description:
      "YouthEmpower trains and mentors young people to become community leaders and entrepreneurs.",
    posts: [
      {
        id: 1,
        date: "Nov 5, 2025",
        image: "assets/Images/youth-post1.jpg",
        title: "Leadership Workshop",
        description:
          "100 youths trained on leadership skills and project management...",
      },
      {
        id: 2,
        date: "Oct 15, 2025",
        image: "assets/Images/youth-post2.jpg",
        title: "Startup Mentoring",
        description:
          "Guided young entrepreneurs to launch their first businesses...",
      },
    ],
    mission: {
      mission: "Empower youth through education and mentorship.",
      vision:
        "A society with confident, responsible, and skilled young leaders.",
      image: "assets/Images/youth-mission.png",
    },
    programs: [
      {
        title: "Mentorship Program",
        description: "Pairing youth with experienced mentors.",
        image: "assets/Images/youth-program1.png",
      },
      {
        title: "Entrepreneur Bootcamps",
        description: "Training future business leaders.",
        image: "assets/Images/youth-program2.png",
      },
    ],

    impact: [
      { value: "2,000+", description: "youth trained" },
      { value: "300+", description: "mentors engaged" },
      { value: "50+", description: "projects launched" },
    ],
    values: ["Solidarity", "Transparency", "Empowerment", "Compassion"],
    contact: [
      {
        type: "Address",
        icon: "fa-solid fa-location-dot",
        content: "15 Youth Avenue, Oran, Algeria",
      },
      { type: "Phone", icon: "fa-solid fa-phone", content: "+213 550 654 789" },
      {
        type: "Email",
        icon: "fa-solid fa-envelope",
        content: "contact@youthempower.org",
        isLink: true,
        href: "mailto:contact@youthempower.org",
      },
    ],
  },
  //   ================================================== organization 6 ==================================================
  {
    id: 6,
    name: "EduAccess",
    slogan: "Education Without Barriers",
    type: "Educational NGO",
    heroImage: "assets/Images/eduaccess-hero.jpg",
    logoImage: "assets/Images/eduaccess-logo.png",
    description:
      "EduAccess ensures that children in rural and low-income areas have access to quality education.",
    posts: [
      {
        id: 1,
        date: "Nov 10, 2025",
        image: "assets/Images/edu-post1.jpg",
        title: "Book Drive",
        description: "Distributed 1,000 books to rural schools...",
      },
      {
        id: 2,
        date: "Oct 20, 2025",
        image: "assets/Images/edu-post2.jpg",
        title: "Teacher Training",
        description: "Trained 50 teachers in modern pedagogical methods...",
      },
    ],
    mission: {
      mission: "Provide access to quality education.",
      vision: "A world where every child can learn and thrive.",
      image: "assets/Images/edu-mission.png",
    },
    programs: [
      {
        title: "School Supplies",
        description: "Provide notebooks, pens, and digital tools.",
        image: "assets/Images/edu-program1.png",
      },
      {
        title: "Teacher Training",
        description: "Train teachers in modern educational techniques.",
        image: "assets/Images/edu-program2.png",
      },
    ],
    impact: [
      { value: "5,000+", description: "students reached" },
      { value: "200+", description: "teachers trained" },
      { value: "50+", description: "schools supported" },
    ],
    values: ["Solidarity", "Transparency", "Empowerment", "Compassion"],
    contact: [
      {
        type: "Address",
        icon: "fa-solid fa-location-dot",
        content: "20 Knowledge Street, Blida, Algeria",
      },
      { type: "Phone", icon: "fa-solid fa-phone", content: "+213 550 876 543" },
      {
        type: "Email",
        icon: "fa-solid fa-envelope",
        content: "info@eduaccess.org",
        isLink: true,
        href: "mailto:info@eduaccess.org",
      },
    ],
  },
  //   ================================================== organization 7 ==================================================
  {
    id: 7,
    name: "CleanOceans",
    slogan: "Protecting Marine Life",
    type: "Environmental NGO",
    heroImage: "assets/Images/cleanoceans-hero.jpg",
    logoImage: "assets/Images/cleanoceans-logo.png",
    description:
      "CleanOceans works to reduce marine pollution and protect coastal ecosystems in Algeria.",
    posts: [
      {
        id: 1,
        date: "Nov 1, 2025",
        image: "assets/Images/ocean-post1.jpg",
        title: "Beach Cleanup",
        description: "Collected 500 kg of waste along the coast...",
      },
      {
        id: 2,
        date: "Oct 10, 2025",
        image: "assets/Images/ocean-post2.jpg",
        title: "Marine Awareness Workshop",
        description: "Educated local communities about plastic pollution...",
      },
    ],
    mission: {
      mission: "Reduce marine pollution and protect ecosystems.",
      vision: "Healthy oceans and thriving marine life.",
      image: "assets/Images/ocean-mission.png",
    },
    programs: [
      {
        title: "Beach Cleanup",
        description: "Regular cleanup campaigns along the coastline.",
        image: "assets/Images/ocean-program1.png",
      },
      {
        title: "Marine Education",
        description: "Workshops and school programs about ocean conservation.",
        image: "assets/Images/ocean-program2.png",
      },
    ],
    impact: [
      { value: "10+", description: "coastal cleanups per year" },
      { value: "2,000+", description: "volunteers engaged" },
      { value: "50+", description: "tons of waste removed" },
    ],
    values: ["Solidarity", "Transparency", "Empowerment", "Compassion"],
    contact: [
      {
        type: "Address",
        icon: "fa-solid fa-location-dot",
        content: "5 Coastal Street, Oran, Algeria",
      },
      { type: "Phone", icon: "fa-solid fa-phone", content: "+213 550 123 789" },
      {
        type: "Email",
        icon: "fa-solid fa-envelope",
        content: "contact@cleanoceans.org",
        isLink: true,
        href: "mailto:contact@cleanoceans.org",
      },
    ],
  },
  //   ================================================== organization 8 ==================================================
  {
    id: 8,
    name: "SafeHaven",
    slogan: "Shelter and Support for Everyone",
    type: "Social NGO",
    heroImage: "assets/Images/safehaven-hero.jpg",
    logoImage: "assets/Images/safehaven-logo.png",
    description:
      "SafeHaven provides shelters, food, and psychological support for homeless people and vulnerable communities.",
    posts: [
      {
        id: 1,
        date: "Nov 5, 2025",
        image: "assets/Images/safe-post1.jpg",
        title: "Winter Shelter Opened",
        description:
          "Opened a new shelter accommodating 100 people during winter...",
      },
      {
        id: 2,
        date: "Oct 15, 2025",
        image: "assets/Images/safe-post2.jpg",
        title: "Food Distribution",
        description: "Delivered meals to over 300 people in need...",
      },
    ],
    mission: {
      mission: "Provide safety, food, and support to the homeless.",
      vision: "A society where no one sleeps without shelter or hope.",
      image: "assets/Images/safe-mission.png",
    },
    programs: [
      {
        title: "Shelter Program",
        description: "Offer safe housing for vulnerable people.",
        image: "assets/Images/safe-program1.png",
      },
      {
        title: "Food Support",
        description: "Daily meals and essentials for the needy.",
        image: "assets/Images/safe-program2.png",
      },
    ],
    impact: [
      { value: "1,500+", description: "people sheltered" },
      { value: "10,000+", description: "meals distributed" },
      { value: "100+", description: "volunteers engaged" },
    ],
    values: ["Solidarity", "Transparency", "Empowerment", "Compassion"],
    contact: [
      {
        type: "Address",
        icon: "fa-solid fa-location-dot",
        content: "12 Haven Street, Blida, Algeria",
      },
      { type: "Phone", icon: "fa-solid fa-phone", content: "+213 550 222 333" },
      {
        type: "Email",
        icon: "fa-solid fa-envelope",
        content: "info@safehaven.org",
        isLink: true,
        href: "mailto:info@safehaven.org",
      },
    ],
  },
  //   ================================================== organization 9==================================================
  {
    id: 9,
    name: "GreenTech",
    slogan: "Sustainable Technology Solutions",
    type: "Environmental / Tech NGO",
    heroImage: "assets/Images/greentech-hero.jpg",
    logoImage: "assets/Images/greentech-logo.png",
    description:
      "GreenTech develops renewable energy solutions and promotes eco-friendly technology initiatives.",
    posts: [
      {
        id: 1,
        date: "Nov 3, 2025",
        image: "assets/Images/greentech-post1.png",
        title: "Solar Panel Installation",
        description: "Installed solar panels in rural communities...",
      },
      {
        id: 2,
        date: "Oct 22, 2025",
        image: "assets/Images/greentech-post2.png",
        title: "Energy Awareness Campaign",
        description: "Conducted workshops to educate on renewable energy...",
      },
    ],
    mission: {
      mission: "Promote renewable energy and sustainable tech.",
      vision: "A greener future through technology.",
      image: "assets/Images/greentech-mission.png",
    },
    programs: [
      {
        title: "Solar Projects",
        description: "Provide solar energy solutions to rural areas.",
        image: "assets/Images/greentech-program1.png",
      },
      {
        title: "Tech Awareness",
        description: "Raise awareness about sustainable tech.",
        image: "assets/Images/greentech-program2.png",
      },
    ],
    impact: [
      { value: "50+", description: "solar systems deployed" },
      { value: "5,000+", description: "people educated" },
      { value: "10+", description: "workshops organized" },
    ],
    values: ["Solidarity", "Transparency", "Empowerment", "Compassion"],
    contact: [
      {
        type: "Address",
        icon: "fa-solid fa-location-dot",
        content: "30 Innovation Street, Algiers, Algeria",
      },
      { type: "Phone", icon: "fa-solid fa-phone", content: "+213 550 333 444" },
      {
        type: "Email",
        icon: "fa-solid fa-envelope",
        content: "contact@greentech.org",
        isLink: true,
        href: "mailto:contact@greentech.org",
      },
    ],
  },
  {
    id: 10,
    name: "FoodForLife",
    slogan: "Ending Hunger One Meal at a Time",
    type: "Charity",
    heroImage: "assets/Images/foodforlife-hero.jpg",
    logoImage: "assets/Images/foodforlife-logo.png",
    description:
      "FoodForLife distributes nutritious meals to impoverished families and organizes food drives.",
    posts: [
      {
        id: 1,
        date: "Nov 5, 2025",
        image: "assets/Images/food-post1.jpg",
        title: "Winter Food Drive",
        description: "Distributed food baskets to 300 families...",
      },
      {
        id: 2,
        date: "Oct 20, 2025",
        image: "assets/Images/food-post2.jpg",
        title: "Community Kitchen",
        description: "Served over 1,000 meals to homeless citizens...",
      },
    ],
    mission: {
      mission: "End hunger in local communities.",
      vision: "No one should go to bed hungry.",
      image: "assets/Images/food-mission.png",
    },
    programs: [
      {
        title: "Food Baskets",
        description: "Delivering meals to families in need.",
        image: "assets/Images/food-program1.png",
      },
      {
        title: "Community Kitchens",
        description: "Provide hot meals daily.",
        image: "assets/Images/food-program2.png",
      },
    ],
    impact: [
      { value: "15,000+", description: "meals served" },
      { value: "2,000+", description: "families supported" },
      { value: "150+", description: "volunteers" },
    ],
    values: ["Solidarity", "Transparency", "Empowerment", "Compassion"],
    contact: [
      {
        type: "Address",
        icon: "fa-solid fa-location-dot",
        content: "55 Nourish Street, Oran, Algeria",
      },
      { type: "Phone", icon: "fa-solid fa-phone", content: "+213 550 444 555" },
      {
        type: "Email",
        icon: "fa-solid fa-envelope",
        content: "info@foodforlife.org",
        isLink: true,
        href: "mailto:info@foodforlife.org",
      },
    ],
  },
  //   ================================================== organization 11 ==================================================
  {
    id: 11,
    name: "ArtConnect",
    slogan: "Empowering Through Arts",
    type: "Cultural NGO",
    heroImage: "assets/Images/artconnect-hero.jpg",
    logoImage: "assets/Images/artconnect-logo.png",
    description:
      "ArtConnect promotes arts education, workshops, and cultural events for youth and communities.",
    posts: [
      {
        id: 1,
        date: "Nov 8, 2025",
        image: "assets/Images/art-post1.jpg",
        title: "Youth Art Workshop",
        description: "50 students learned painting and sculpture...",
      },
      {
        id: 2,
        date: "Oct 12, 2025",
        image: "assets/Images/art-post2.jpg",
        title: "Art Exhibition",
        description: "Showcased local talent to 300 visitors...",
      },
    ],
    mission: {
      mission: "Use arts to educate and empower youth.",
      vision:
        "A culturally enriched society with access to creative expression.",
      image: "assets/Images/art-mission.png",
    },
    programs: [
      {
        title: "Workshops",
        description: "Creative workshops for children and youth.",
        image: "assets/Images/art-program1.png",
      },
      {
        title: "Exhibitions",
        description: "Showcase artistic talent in the community.",
        image: "assets/Images/art-program2.png",
      },
    ],
    impact: [
      { value: "1,000+", description: "students participated" },
      { value: "100+", description: "artworks displayed" },
      { value: "50+", description: "events organized" },
    ],
    values: ["Solidarity", "Transparency", "Empowerment", "Compassion"],
    contact: [
      {
        type: "Address",
        icon: "fa-solid fa-location-dot",
        content: "20 Arts Avenue, Algiers, Algeria",
      },
      { type: "Phone", icon: "fa-solid fa-phone", content: "+213 550 555 666" },
      {
        type: "Email",
        icon: "fa-solid fa-envelope",
        content: "info@artconnect.org",
        isLink: true,
        href: "mailto:info@artconnect.org",
      },
    ],
  },
  //   ================================================== organization 12 ==================================================
  {
    id: 12,
    name: "SafeWater",
    slogan: "Clean Water for Every Home",
    type: "Environmental NGO",
    heroImage: "assets/Images/safewater-hero.jpg",
    logoImage: "assets/Images/safewater-logo.png",
    description:
      "SafeWater provides potable water solutions, wells, and sanitation education to rural communities.",
    posts: [
      {
        id: 1,
        date: "Nov 12, 2025",
        image: "assets/Images/water-post1.jpg",
        title: "Well Installation",
        description: "Installed 10 new wells in remote villages...",
      },
      {
        id: 2,
        date: "Oct 18, 2025",
        image: "assets/Images/water-post2.jpg",
        title: "Sanitation Workshop",
        description: "Educated 200 villagers on hygiene and water safety...",
      },
    ],
    mission: {
      mission: "Ensure access to clean water and sanitation.",
      vision: "A world where every household has safe drinking water.",
      image: "assets/Images/water-mission.png",
    },
    programs: [
      {
        title: "Well Projects",
        description: "Build wells and water systems in remote areas.",
        image: "assets/Images/water-program1.png",
      },
      {
        title: "Hygiene Education",
        description: "Teach communities about sanitation practices.",
        image: "assets/Images/water-program2.png",
      },
    ],
    impact: [
      { value: "20+", description: "wells built" },
      { value: "5,000+", description: "people provided with clean water" },
      { value: "10+", description: "sanitation workshops" },
    ],
    values: ["Solidarity", "Transparency", "Empowerment", "Compassion"],
    contact: [
      {
        type: "Address",
        icon: "fa-solid fa-location-dot",
        content: "18 Water Street, Oran, Algeria",
      },
      { type: "Phone", icon: "fa-solid fa-phone", content: "+213 550 666 777" },
      {
        type: "Email",
        icon: "fa-solid fa-envelope",
        content: "info@safewater.org",
        isLink: true,
        href: "mailto:info@safewater.org",
      },
    ],
  },
];
