# Pizzería Mamma Mía

Welcome to the "Pizzería Mamma Mía" project! This project is built using React and Vite.js to showcase my knowledge of React fundamentals. The application represents a simple pizza website where users can view available pizzas, add them to a cart, and navigate through different sections of the website.

## Project Overview

The main goal of this project is to validate knowledge of introductory React concepts, including the creation and composition of reusable components, conditional rendering, passing props, and styling using Bootstrap.

### Features Implemented

1. **React Project Setup with Vite**
   - The project was created using Vite.js for a fast and efficient development environment.

2. **Components**
   - The project includes the following main components:
     - **Navbar**: Contains navigation options for Home, Profile, Login, Logout, Register, and shows the total value of the shopping cart.
     - **Header**: Displays the title and a background image to represent the pizzeria.
     - **Home**: The main page that contains a list of pizzas available for purchase.
     - **CardPizza**: Represents individual pizza cards, including name, price, ingredients, and image.
     - **Footer**: Displays information about the pizzeria and copyright details.

3. **Navbar Functionality**
   - The `Navbar` component shows different options based on the `token` state:
     - If the user is logged in (`token = true`), the Profile and Logout buttons are displayed.
     - If the user is not logged in (`token = false`), the Login and Register buttons are displayed.
     - The cart total is always visible and formatted using thousands separators.

4. **CardPizza Component**
   - The `CardPizza` component receives props such as the pizza name, price, ingredients, and image URL. It displays these details, along with "View More" and "Add to Cart" buttons (currently non-functional).

5. **Responsive Styling**
   - Bootstrap is incorporated for styling components, ensuring the application is responsive and visually appealing.

6. **Footer**
   - The `Footer` component displays the text: "© 2021 - Pizzería Mamma Mía! - All rights reserved."

## Getting Started

Follow these instructions to get a copy of the project running on your local machine.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
    https://github.com/tamarazapata/PizzeriaReactProject.git
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to view the project.

## Project Structure

```
src/
  |-- assets/                # Static assets (images, etc.)
  |-- components/            # Reusable components
      |-- CardPizza/         # CardPizza component (JSX and CSS)
          |-- CardPizza.jsx
          |-- CardPizza.css
      |-- Header/            # Header component (JSX and CSS)
          |-- Header.jsx
          |-- Header.css
      |-- Navbar/            # Navbar component (JSX and CSS)
          |-- Navbar.jsx
          |-- Navbar.css
      |-- Footer/            # Footer component (JSX and CSS)
          |-- Footer.jsx
          |-- Footer.css
  |-- pages/                 # Page components
      |-- Home/              # Home page (JSX and CSS)
          |-- Home.jsx
          |-- Home.css
  |-- App.jsx                # Main application component
  |-- main.jsx               # Entry point for ReactDOM
  |-- index.css              # Global styles
  |-- index.html             # Main HTML file
```

## Requirements Met

- **App Component**: Displays `Navbar`, `Home`, `Footer`, and `Header` components.
- **Header Component**: Rendered within `Home` and contains a title and description.
- **Navbar**: Displays different buttons based on user authentication state (`token` variable).
- **CardPizza Component**: Renders pizza cards using props for name, price, ingredients, and image.
- **Footer**: Displays static information and is rendered in `App`.

## Technologies Used

- **React**: Library for building the user interface.
- **Vite**: Tooling for faster development experience.
- **Bootstrap**: For responsive styling.

## Future Improvements

- Add functionality to "View More" and "Add to Cart" buttons.
- Implement state management for handling authentication and cart items.
- Enhance UI/UX with animations and advanced styling.


## Acknowledgments

- Thanks to [Desafío Latam](https://www.desafiolatam.com) for providing the challenge and resources for this project and to  my professor [Fabián Pino](https://github.com/FabianPinoP) for his guidance and support.
