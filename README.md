# FilmAdvisor
**FilmAdvisor connects you with friends to discover the perfect movie. Save time with social recommendations and ratings tailored to your unique taste.**

## Overview
FilmAdvisor is a social movie discovery platform designed to eliminate decision fatigue when choosing what to watch. [cite_start]By integrating personal ratings with a social network of friends, the application provides a curated experience that prioritizes trust and shared interests over generic algorithms. [cite: 2, 4, 31]

## Core Features
* [cite_start]**Social Review Feed**: Real-time access to what your trusted network (e.g., Erna, Håkon, Stoltenberg) is currently watching and their critiques. [cite: 6, 10, 13]
* [cite_start]**Personalized Ratings**: A dedicated space to manage your own movie history, complete with star ratings and detailed commentary. [cite: 18, 25, 27]
* [cite_start]**Advanced Discovery**: Dynamic search and filtering capabilities allowing users to sort by genre, rating, actors, or release date. [cite: 3, 5, 37]
* **User Management**: Secure registration and profile customization, including personal bios and profile imagery.

## Installation and Technical Setup
The application is built using a clean, modular TypeScript architecture, bundled with Vite for a fast and modern development experience.

### Prerequisites
* A modern web browser (Google Chrome, Mozilla Firefox, or Microsoft Edge).
* [cite_start]A text editor (e.g., VS Code) if you wish to explore the code workspace. [cite: 1]

### Deployment Steps
1.  **Clone or Download**: Download the repository and extract the contents of the zip file.
2.  **Installation**: Run `npm install` to install dependencies (Vite and TypeScript).
3.  **Launch**: Run `npm run dev` to start the Vite development server.
4.  **Database Initialisation**: The app starts with pre-loaded data for films such as Godfather and Star Wars to demonstrate functionality.

## Architecture
This project implements the Model-View-Controller (MVC) design pattern to ensure scalability and maintainable code:
* **Model**: Manages data structures for users, movies, and ratings.
* **View**: Handles the visual representation of the UI components.
* **Controller**: Acts as the interface between the user inputs and the data logic.

---
*Developed as a student project focusing on social utility and intuitive design.*
