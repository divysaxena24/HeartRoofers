const sampleListings = [
  {
    title: "Backpacker Hostel in Varanasi",
    description: "A vibrant hostel located in the heart of Varanasi, offering dormitory-style accommodations and a communal atmosphere.",
    location: "Varanasi, Uttar Pradesh",
    price: 700, // Changed from "₹700/night"
    contact: {
      phone: "9123456789",
      email: "varanasihostel@gmail.com"
    },
    facilities: ["Free WiFi", "Shared Kitchen", "24/7 Reception"],
    roomSharingType: "Mixed Dorm",
    genderPreference: "Any",
    foodOptions: ["Vegetarian", "Non-Vegetarian"],
    availability: 5,
    rulesPolicies: ["No smoking", "Quiet hours after 10 PM"],
    image: {
      url: "https://ipm.my/wp-content/uploads/2024/03/Figure-1-Proposed-New-Workers-Hostel-1.jpg",
      filename: "listing1"
    }
  },
  {
    title: "Beachfront Hostel in Goa",
    description: "A laid-back hostel situated near the beach, perfect for travelers seeking relaxation and adventure.",
    location: "Goa",
    price: 800, // Changed from "₹800/night"
    contact: {
      phone: "9876543210",
      email: "goabeachhostel@gmail.com"
    },
    facilities: ["Free WiFi", "Beach Access", "Barbecue Area"],
    roomSharingType: "Mixed Dorm",
    genderPreference: "Any",
    foodOptions: ["Vegetarian", "Non-Vegetarian"],
    availability: 4,
    rulesPolicies: ["No smoking", "No pets allowed"],
    image: {
      url: "https://www.maramani.com/cdn/shop/files/18BedroomHostelDesign-ID39901-Image03.jpg?v=1696842758&width=1800",
      filename: "listing2"
    }
  },
  {
    title: "Mountain View Hostel in Manali",
    description: "A cozy hostel nestled in the mountains, offering breathtaking views and a peaceful environment.",
    location: "Manali, Himachal Pradesh",
    price: 900, // Changed from "₹900/night"
    contact: {
      phone: "9988776655",
      email: "manalihostel@gmail.com"
    },
    facilities: ["Free WiFi", "Mountain Views", "Shared Lounge"],
    roomSharingType: "Mixed Dorm",
    genderPreference: "Any",
    foodOptions: ["Vegetarian", "Non-Vegetarian"],
    availability: 3,
    rulesPolicies: ["No smoking", "Quiet hours after 10 PM"],
    image: {
      url: "https://archello.s3.eu-central-1.amazonaws.com/images/2021/05/06/charged-voids-cgc-student-hostel-landran-student-housing-archello.1620328313.0563.jpg",
      filename: "listing3"
    }
  },
  
  {
    title: "Heritage Hostel in Jaipur",
    description: "A heritage-style hostel offering a blend of traditional architecture and modern amenities.",
    location: "Jaipur, Rajasthan",
    price: 850, // Changed from "₹850/night"
    contact: {
      phone: "9988776655",
      email: "jaipurheritagehostel@gmail.com"
    },
    facilities: ["Free WiFi", "Cultural Activities", "Shared Lounge"],
    roomSharingType: "Mixed Dorm",
    genderPreference: "Any",
    foodOptions: ["Vegetarian", "Non-Vegetarian"],
    availability: 4,
    rulesPolicies: ["No smoking", "Quiet hours after 10 PM"],
    image: {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/00/c5/d6/ywca-international-hostel.jpg?w=900&h=-1&s=1",
      filename: "listing4"
    }
  },
  {
    title: "Modern Hostel in Delhi",
    description: "A contemporary hostel located in the heart of Delhi, offering stylish accommodations and easy access to city attractions.",
    location: "Delhi",
    price: 1000, // Changed from "₹1000/night"
    contact: {
      phone: "9123456789",
      email: "delhihostel@gmail.com"
    },
    facilities: ["Free WiFi", "Shared Kitchen", "24/7 Reception"],
    roomSharingType: "Mixed Dorm",
    genderPreference: "Any",
    foodOptions: ["Vegetarian", "Non-Vegetarian"],
    availability: 5,
    rulesPolicies: ["No smoking", "Quiet hours after 10 PM"],
    image: {
      url: "https://archello.com/thumbs/images/2021/05/06/charged-voids-cgc-student-hostel-landran-student-housing-archello.1620328313.0563.jpg?fit=crop&w=1260&h=840",
      filename: "listing5"
    }
  },
  {
    title: "Countryside Hostel in Coorg",
    description: "A serene hostel located amidst the coffee plantations of Coorg, offering a tranquil retreat for nature lovers.",
    location: "Coorg, Karnataka",
    price: 950, // Changed from "₹950/night"
    contact: {
      phone: "9988776655",
      email: "coorghostel@gmail.com"
    },
    facilities: ["Free WiFi", "Nature Trails", "Shared Lounge"],
    roomSharingType: "Mixed Dorm",
    genderPreference: "Any",
    foodOptions: ["Vegetarian", "Non-Vegetarian"],
    availability: 3,
    rulesPolicies: ["No smoking", "Quiet hours after 10 PM"],
    image: {
      url: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
      filename: "listing6"
    }
  },
  {
    title: "Artistic Hostel in Pondicherry",
    description: "An artistic hostel featuring vibrant decor and creative spaces, perfect for artists and free spirits.",
    location: "Pondicherry",
    price: 800, // Changed from "₹800/night"
    contact: {
      phone: "9123456789",
      email: "pondicherryhostel@gmail.com"
    },
    facilities: ["Free WiFi", "Art Workshops", "Shared Lounge"],
    roomSharingType: "Mixed Dorm",
    genderPreference: "Any",
    foodOptions: ["Vegetarian", "Non-Vegetarian"],
    availability: 4,
    rulesPolicies: ["No smoking", "Quiet hours after 10 PM"],
    image: {
      url: "https://images.pexels.com/photos/5147364/pexels-photo-5147364.jpeg",
      filename: "listing7"
    }
  },
  {
    title: "Beachside Hostel in Gokarna",
    description: "A laid-back hostel located near the beach, offering a relaxed atmosphere and stunning ocean views.",
    location: "Gokarna, Karnataka",
    price: 850, // Changed from "₹850/night"
    contact: {
      phone: "9988776655",
      email: "gokarnabeachhostel@gmail.com"
    },
    facilities: ["Free WiFi", "Beach Access", "Barbecue Area"],
    roomSharingType: "Mixed Dorm",
    genderPreference: "Any",
    foodOptions: ["Vegetarian", "Non-Vegetarian"],
    availability: 5,
    rulesPolicies: ["No smoking", "Quiet hours after 10 PM"],
    image: {
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/637004859.jpg?k=a3e043d9904b3a5178f9f6022be7d56c2f4476ec688a2855c479975941155052&o=&hp=1",
      filename: "listing8"
    }
  },
  {
    title: "Mountain Retreat Hostel in Darjeeling",
    description: "A peaceful hostel offering panoramic views of the Himalayas and a cozy environment.",
    location: "Darjeeling, West Bengal",
    price: 950, // Changed from "₹950/night"
    contact: {
      phone: "9123456789",
      email: "darjeelinghostel@gmail.com"
    },
    facilities: ["Free WiFi", "Mountain Views", "Shared Lounge"],
    roomSharingType: "Mixed Dorm",
    genderPreference: "Any",
    foodOptions: ["Vegetarian", "Non-Vegetarian"],
    availability: 3,
    rulesPolicies: ["No smoking", "Quiet hours after 10 PM"],
    image: {
      url: "https://assets.telegraphindia.com/telegraph/2021/Mar/1615498268_phoobsering-tea-estate.jpg",
      filename: "listing9"
    }
  },
  {
    title: "Historical Hostel in Agra",
    description: "A hostel located near the Taj Mahal, offering a blend of history and comfort.",
    location: "Agra, Uttar Pradesh",
    price: 1000, // Changed from "₹1000/night"
    contact: {
      phone: "9988776655",
      email: "agrahostel@gmail.com"
    },
    facilities: ["Free WiFi", "Historical Tours", "Shared Lounge"],
    roomSharingType: "Mixed Dorm",
    genderPreference: "Any",
    foodOptions: ["Vegetarian", "Non-Vegetarian"],
    availability: 4,
    rulesPolicies: ["No smoking", "Quiet hours after 10 PM"],
    image: {
      url: "https://content3.jdmagicbox.com/v2/comp/agra/53/0562p562std26153/catalogue/youth-hostel-agra-sanjay-place-agra-government-hostels-w4serp6yhe.jpg",
      filename: "listing10"
    }
  }
];

module.exports = sampleListings;