# TechToday React Project

## About
TechToday is a dynamic platform designed for technology enthusiasts to explore and share the latest gadgets. The site operates on a crowd-sourced model, allowing users to contribute by adding new consumer electronics and engaging in discussions through comments and adding the products in their wishlist.

This was the course project for the React JS October 2023 Course by SoftUni.

**The application, including both the backend and frontend, is deployed to Firebase and can be accessed here**: [**TechToday Live Application**](https://techtoday-to-firebase.web.app/)

![Home Page of TechToday](site_home.png)

## Technologies Used
### Main
- Language: JavaScript
- Library: React JS
- Backend: [SoftUni Practice Server](https://github.com/softuni-practice-server/softuni-practice-server)
- Deployment: Firebase 

### Secondary
- Vite
- Google Fonts
- Font Awesome

## Design
The design and visual elements of this website were created entirely by me. This encompasses the visual layout, HTML and CSS code (**NO templates were used**), and the design of the website's logo.

## Features
1. Public Part - Accessible to non-registered users
    1. View Home page
    2. View Product Details

2. Users Part - Accessible to registered users
    1. View Home page
    2. View Product Details
    3. Interact with Products - Comment and Add to Wishlist
    4. CRUD on Products - Delete and Edit (if they are owners)
    5. Access to Profile Page
        - View Wishlisted Product
        - View Created Products
        - Add new Product

2. Authentication & Authorization
    1. Register
    2. Logout
    3. Login
    4. Error handling
    5. Form data validation 
    6. Authorization: only product owners can edit or delete their products
    7. Route Guards




## Execution of the Application
### Server
This project uses the SoftUni Practice Server. To start the server, execute the following command:
```
node server
```

### Vite
This project utilizes Vite. To launch the development server, run the following command: 
```
npm run dev
```
## Live Preview -> [Deployed Version](https://techtoday-to-firebase.web.app/)

