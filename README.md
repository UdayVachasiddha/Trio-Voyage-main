# ✈️ TrioVoyage — Curated Tours & Travels

Welcome to **TrioVoyage**, a premium, responsive, and modern multi-page travel portal designed to showcase curated vacation packages and handle customer booking enquiries seamlessly.

TrioVoyage delivers a state-of-the-art web experience, blending a sleek, modern visual aesthetic with fast, client-side dynamic features. It is built to stand out with professional typography, custom card structures, interactive detail overlays, and full mobile optimization.

---

## 🌟 Key Features

*   **Premium Multi-page Experience**: Full-featured pages including Home, Services, Our Story, FAQ's, Blogs, Careers, and Contact Us.
*   **Dynamic Tour Booking Grid**: Features custom filters (e.g., Europe, Asia, All) and a responsive search bar to filter packages instantly.
*   **Interactive Booking Modal**: Allows users to view detailed itineraries and instantly pre-fill enquiry forms with their chosen trip.
*   **Modern Visual Aesthetic**: Built with custom HSL-tailored colors, smooth hover micro-animations, clean card components, glassmorphism elements, and professional typography using Google Fonts (Inter).
*   **React Prototype Ready**: Includes a React + Tailwind CSS single-file component prototype (`Main.js`) for modern frontend frameworks integration.

---

## 🛠️ Tech Stack

*   **Core**: Semantic HTML5, Vanilla CSS3, Modern JavaScript (ES6+).
*   **Styling**: Custom CSS variables, responsive CSS Grid layouts, and Flexbox for unified alignment and pixel-perfect design.
*   **React Porting Component**: React, Tailwind CSS (found in `Main.js`).

---

## 📁 Repository Structure

Below is an overview of the key files in the repository:

| File Name | Description |
| :--- | :--- |
| [`index.html`](file:///c:/Users/Uday/Downloads/Trio-Voyage/index.html) | The home page showcasing curated tour cards, dynamic search/filter, testimonial section, and quick enquiry form. |
| [`services.html`](file:///c:/Users/Uday/Downloads/Trio-Voyage/services.html) | Details our travel services, customized itineraries, flight bookings, and local guide arrangements. |
| [`aboutus.html`](file:///c:/Users/Uday/Downloads/Trio-Voyage/aboutus.html) | "Our Story" page showing the background, vision, and core team members of TrioVoyage. |
| [`faq.html`](file:///c:/Users/Uday/Downloads/Trio-Voyage/faq.html) | An interactive FAQ accordions page answering common questions about booking, packing, and cancellations. |
| [`Blogs.html`](file:///c:/Users/Uday/Downloads/Trio-Voyage/Blogs.html) | A visual blog feed displaying travel articles, expert tips, and travel photography guides. |
| [`Career.html`](file:///c:/Users/Uday/Downloads/Trio-Voyage/Career.html) | A recruitment page containing current career openings, employee perks, and application forms. |
| [`ContactUs.html`](file:///c:/Users/Uday/Downloads/Trio-Voyage/ContactUs.html) | Contact page featuring customer support details, locations, and direct message forms. |
| [`Main.js`](file:///c:/Users/Uday/Downloads/Trio-Voyage/Main.js) | A React component prototype utilizing Tailwind CSS utility classes, providing a direct reference to rebuild or migrate this portal into Next.js/Vite. |

---

## 🚀 How to Run Locally

Since the core project is built using vanilla HTML, CSS, and JavaScript, it has **zero external dependencies** and can be run immediately.

### Option 1: Direct File Access
Simply double-click the [`index.html`](file:///c:/Users/Uday/Downloads/Trio-Voyage/index.html) file to open it directly in any modern web browser.

### Option 2: Local HTTP Server (Recommended)
Running via a local development server ensures consistent behaviors for assets and links. Use one of the following simple commands in your terminal:

*   **Node.js**:
    ```bash
    npx serve
    ```
*   **Python 3**:
    ```bash
    python -m http.server 8000
    ```
    *Access the site at `http://localhost:8000`*

### Option 3: VS Code Live Server
If using VS Code, right-click [`index.html`](file:///c:/Users/Uday/Downloads/Trio-Voyage/index.html) and select **Open with Live Server**.

---

## 🏗️ Developing & Customizing

### 1. Adding/Editing Travel Packages
The travel package listings are managed inside the script block at the bottom of [`index.html`](file:///c:/Users/Uday/Downloads/Trio-Voyage/index.html). To add or modify tours, edit the `packages` array:
```javascript
const packages = [
  {
    id: 4,
    title: 'Tokyo & Kyoto Explorer',
    subtitle: '7 days · 6 nights',
    price: '₹1,59,999',
    img: 'url-to-your-image.jpg',
    bullets: ['Bullet train passes', 'Geisha district walk', 'Shinto shrines visit'],
    short: 'A captivating blend of ultra-modern cities and ancient traditions.',
    category: 'asia' // Used for category filtering ('europe', 'asia', etc.)
  }
];
```

### 2. Upgrading to React / Tailwind
If you plan to port this site into a modern single-page application (SPA) environment, refer to [`Main.js`](file:///c:/Users/Uday/Downloads/Trio-Voyage/Main.js). Copy the code into your React directory, ensure Tailwind CSS is installed and configured, and you'll have an identical, responsive functional layout ready for production.

---

## 🎨 Theme & Typography
*   **Fonts**: The project imports the Google Font **Inter** (`300`, `400`, `600`, `700`, `800`) for high-legibility interface design.
*   **Color Palette**: Defined using CSS root custom variables (`--bg`, `--accent1`, `--accent2`, etc.) in the top stylesheets. Modify these variables to change the entire website's theme color instantaneously.

---

*Bon Voyage! 🌍*
