# HeartRoofers

HeartRoofers is a user-friendly web application that simplifies the process of finding and listing rental properties. Whether you're a tenant looking for a new home or a property owner wanting to reach potential tenants, HeartRoofers provides a seamless platform to connect both parties.

## 🚀 Features

- **Advanced Searching** – Quickly find properties based on location, price and state .
- **Verified Listings** – All listings are verified to ensure authenticity and reliability.
- **Direct Communication** – Contact property owners directly through the platform.
- **Responsive Design** – Fully responsive interface for smooth experience on desktop and mobile devices.

## 🌐 Live Demo

Experience HeartRoofers live: [https://heartroofers.onrender.com/](https://heartroofers.onrender.com/)

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Hosting:** Render.com
- **Cloud Storage:** Cloudinary (for images)

## 🏗️ Project Architecture

### System Architecture
```mermaid
graph TD
    Client[Browser: EJS, CSS, JS]
    Server[Express/Node.js Server]
    Auth[Passport.js Auth]
    DB[(MongoDB Atlas)]
    Cloud[Cloudinary Storage]
    Valid[Joi Validation]

    Client <--> Server
    Server <--> Auth
    Server <--> DB
    Server <--> Cloud
    Server --> Valid
```

### User Flow
```mermaid
graph LR
    H[Home Page] --> S[Signup/Login]
    H --> E[Explore Listings]
    S --> H
    E --> D[Listing Details]
    D --> R[Add/Delete Review]
    D --> OW[Owner: Edit/Delete Listing]
    H --> NL[List New Property]
```

## ✨ Recent Technical Improvements
I've recently enhanced the platform with premium UI/UX features and robust security:
- **Premium Confirmation UI**: Replaced native browser alerts with a custom, glassmorphism-styled confirmation modal for all critical actions (Logout, Deletion).
- **Modern Notification System**: Overhauled the alert system with smooth animations, contextual icons, and glassmorphism effects.
- **Robust Phone Validation**: Implemented strict 10-digit phone number validation on both frontend and backend (Joi regex).
- **Streamlined Onboarding**: Added auto-login functionality after successful signup and context-aware CTA buttons on the home page.

## 📦 Installation

To run HeartRoofers locally:

1. **Clone the repository:** <br>
  git clone https:https://github.com/divysaxena24/HeartRoofers.git <br>
  cd HeartRoofers

2. **Install dependencies:** <br>
     npm install

3. **Configure environment variables:** <br>
  Create a `.env` file in the root directory and add:<br> 
  PORT=8080 <br>
  MONGO_URI=your_mongodb_connection_string <br>
  JWT_SECRET=your_secret_key <br>


4. **Start the development server:** <br>
   node app.js 


5. Visit [http://localhost:3000](http://localhost:8080) to see the app in action. <br>  

## Video Walkthrough


https://github.com/user-attachments/assets/2f927db1-6298-4ef3-a9c8-66592e8da7f5


## ScreenShots

<img width="1901" height="978" alt="Screenshot 2026-01-09 223414" src="https://github.com/user-attachments/assets/72a939ed-5340-46cc-b1fc-03e66bfa9329" />
<img width="1910" height="927" alt="Screenshot 2026-01-09 223347" src="https://github.com/user-attachments/assets/39b61f24-7031-493f-b26b-b829bc56dd2b" />
<img width="1894" height="902" alt="Screenshot 2026-01-09 223330" src="https://github.com/user-attachments/assets/d2768242-6055-4d8c-8e55-909e111081ee" />



## 🤝 Contributing

We welcome contributions to improve HeartRoofers. To contribute:

1. **Fork the repository.**

2. **Create a new branch:** <br>
   git checkout -b feature/YourFeature


3. **Make your changes and commit them:** <br>
   git commit -m "Add new feature"


4. **Push to your branch:** <br>
    git push origin feature/YourFeature


5. **Open a Pull Request** and describe your changes.
