# 🍽️ Saryarka Kitchen

### Web Technology — Final Project

\<p align="center">
&#x20; A responsive restaurant website showcasing Kazakh and Central Asian cuisine in Astana.
\</p>

---

## 📌 Project Overview

**Saryarka Kitchen** is a multi-page restaurant website developed as part of the Web Technology Final Project at Astana IT University.

The project continues from our original Midterm and Endterm projects. We maintained the restaurant concept and original design while improving the website with additional interactive features using HTML, CSS, Bootstrap, JavaScript and jQuery.

In the Final Project, we added Light and Dark Mode, guest sign-in using localStorage, an interactive FAQ section and an external food API.

Visitors can explore restaurant information, browse the menu and gallery, register as guests, discover food inspiration and interact with different website features.

## 👥 Group Members

| Name            | Role              |
| --------------- | ----------------- |
| Matiullah Zaman | Project Developer |
| Zainab Noori    | Project Developer |

Both members contributed to the development, improvement, integration and testing of the website.

---

## ✨ Main Features

### 🌐 Website Pages

- **Home:** Restaurant introduction, highlights and food inspiration.
- **About:** Restaurant story, promises, team information and frequently asked questions.
- **Menu:** Food and drink items with interactive features.
- **Gallery:** Collection of restaurant and food images.
- **Reservations:** Guest registration, sign-in and reservation information.

### 🌓 Light and Dark Mode — Final Addition

- Switch between light and dark themes.
- Theme preference saved using `localStorage`.
- Selected theme remains active after refreshing the page.
- Consistent theme across all five pages.

### 🔐 Guest Registration and Sign In

- Required-field validation.
- Email validation.
- Password strength indicator.
- Password confirmation.
- Guest account information stored using `localStorage`.
- Sign-in and sign-out functionality.
- Welcome message displayed across all website pages.
- Login status remains available after refreshing the page.

### 🍴 Interactive Menu

- Live menu search.
- Case-insensitive search functionality.
- Category filters:
  - All
  - Meat
  - Vegetarian
  - Dessert
  - Drinks
- CRUD operations:
  - **Create:** Add new menu items.
  - **Read:** Display menu items.
  - **Update:** Edit existing menu items.
  - **Delete:** Remove menu items.
- Confirmation message before deleting items.

### 🖼️ Gallery

- Responsive image grid.
- Image lightbox.
- Previous and next image navigation.
- Keyboard navigation using arrow keys.
- Smooth image transitions using jQuery.

### ❓ Frequently Asked Questions — Final Addition

- Five restaurant-related questions.
- Answers shown and hidden using jQuery `.slideToggle()`.
- Animated opening and closing.
- Dynamic plus and minus indicators.

### 🍲 Food Inspiration API — Final Addition

- Integrated with TheMealDB public API.
- Uses JavaScript `fetch()` to retrieve meal information.
- Processes API responses in JSON format.
- Displays meal name, image, category and origin.
- Button allows visitors to discover random meals.
- Includes error handling if the API request fails.

### 📱 Responsive Design

- Responsive layout for desktop, tablet and mobile.
- Bootstrap components and CSS media queries.
- Flexible navigation, images and content sections.

---

## 🛠️ Technologies Used

| Technology      | Purpose                                       |
| --------------- | --------------------------------------------- |
| HTML5           | Website structure                             |
| CSS3            | Styling and responsive design                 |
| Bootstrap 5.3.3 | Layout and responsive components              |
| JavaScript      | Interactive functionality and API integration |
| jQuery 3.7.1    | DOM manipulation and animations               |
| Fetch API       | Retrieving external API data                  |
| TheMealDB API   | Random meal information                       |
| localStorage    | Saving theme and guest login information      |

---

## 📂 Project Structure

```text
RestaurantEND/
│
├── index.html
├── about.html
├── menu.html
├── gallery.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│
└── README.md
```

---

## 🤝 Individual Contributions

### 👨‍💻 Matiullah Zaman

**Midterm and Endterm Contributions:**

- Developed the HTML structure and content for the Home, Menu and Reservations pages.
- Worked on CSS styling and responsive layouts.
- Implemented guest registration form validation using JavaScript.
- Added email validation and password strength functionality.
- Implemented live menu search and category filtering.
- Participated in integrating and testing website features.

**Final Project Contributions and Knowledge:**

- Understands the Light and Dark Mode functionality and how the theme preference is saved using `localStorage`.
- Understands guest registration, sign-in, sign-out and the welcome message functionality.
- Understands how `localStorage` keeps guest login information available after refreshing the page.
- Understands the interactive FAQ and how jQuery controls showing and hiding answers.
- Understands the Food Inspiration feature and how TheMealDB API provides meal information.
- Can explain the overall website structure, technologies and responsive design.

### 👩‍💻 Zainab Noori

**Midterm and Endterm Contributions:**

- Developed the HTML structure and content for the About and Gallery pages.
- Worked on CSS styling, Bootstrap components and visual presentation.
- Contributed to JavaScript and jQuery functionality.
- Implemented menu CRUD operations.
- Developed the gallery lightbox with previous and next image navigation.
- Added keyboard navigation and smooth image transitions.
- Participated in reviewing and testing the website.

**Final Project Contributions and Knowledge:**

- Understands the Light and Dark Mode functionality and how the theme preference is saved using `localStorage`.
- Understands guest registration, sign-in, sign-out and the welcome message functionality.
- Understands how `localStorage` keeps guest login information available after refreshing the page.
- Understands the interactive FAQ and how jQuery controls showing and hiding answers.
- Understands the Food Inspiration feature and how TheMealDB API provides meal information.
- Can explain the overall website structure, technologies and responsive design.

### 🤝 Team Collaboration

Both members worked together to:

- Connect and maintain all five website pages.
- Maintain a consistent design and user experience.
- Integrate and test the website features.
- Review the Final Project additions, including Light and Dark Mode, guest sign-in, FAQ and Food Inspiration API.
- Understand the overall project functionality and technologies.

---

## 🚀 How to Run the Project

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Make sure all project folders and files are in their correct locations.
4. Install the Live Server extension if it is not already installed.
5. Open `index.html` and run it using Live Server.
6. Navigate through the website using the navigation menu.

---

## 🔗 Project Links

- **GitHub Repository:** [Saryarka Kitchen — GitHub](https://github.com/Matiullah77/RestaurantEND)
- **Live Website:** [Saryarka Kitchen — Live Website](https://matiullah77.github.io/RestaurantEND/)

---

## 📌 Important Notes

- This Final Project continues from our original Midterm and Endterm projects and uses the same GitHub repository.
- Guest registration and sign-in demonstrate client-side functionality using `localStorage`. They are not connected to a secure authentication server.
- Passwords are stored in browser storage for demonstration purposes only. This is not suitable for real-world authentication.
- Menu CRUD operations work in the browser and are not connected to a database.
- The reservation form demonstrates client-side interaction and does not create real restaurant bookings.
- Food Inspiration retrieves meal information from an external public API.
- An internet connection is required for the API feature.
- Website images are stored in the `images` folder.

---

## 🤖 AI Acknowledgment

AI tools were used as supporting resources during development for understanding programming concepts, troubleshooting code, improving functionality and preparing project documentation. The team reviewed and tested the implemented features.

---

## 🎓 Academic Information

**University:** Astana IT University (AITU)
**Course:** Web Technology
**Project:** Final Project
**Project Name:** Saryarka Kitchen
**Group:** 2501

---

\<p align="center">   \<strong>Saryarka Kitchen\</strong>\<br>   Bringing Kazakh and Central Asian flavors to the web.\<br>\<br>   Developed by \<strong>Matiullah Zaman & Zainab Noori\</strong> \</p>
