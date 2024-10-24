# MOOV - A Movie Search Application

MOOV is a movie search application that allows users to search for movies and view details about them. The application uses the [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) to fetch movie data.

This project is a React application built with Vite, providing a minimal setup with HMR (Hot Module Replacement) and some ESLint rules.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**

    ```sh
    git clone <repository-url>
    cd <repository-name>
    ```

2. **Create a `.env` file in the root of the project and add the following environment variables:**

    ```sh
    VITE_TMDB_API_KEY=<your-tmdb-api-key>
    ```
    You can get an API key by creating an account on [The Movie Database (TMDb)](https://www.themoviedb.org/documentation/api).

3. **Install dependencies:**

    ```sh
    npm install
    ```

4. **Start the development server:**
    ```sh
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Features

-   Search for movies by title
-   View movie details
-   View similar movies
-   View movie trailers
-   View movie cast

## Technologies

-   React
-   Vite
-   Tailwind CSS
-   Axios
-   React Router
-   React Icons
-   ESLint
-   Prettier