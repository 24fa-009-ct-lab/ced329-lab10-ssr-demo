# CED-329 Lab 10: Exploring Server-Side Rendering (SSR) with Next.js

## Objective
To implement Server-Side Rendering (SSR) in Next.js, fetch API data, and compare SSR with Client-Side Rendering (CSR) and Static Site Generation (SSG).

## Technologies Used
- Next.js
- React
- JavaScript
- JSONPlaceholder API
- Official Joke API

## Pages Implemented

### 1. Basic SSR (`/basic-ssr`)
Fetches a random joke from the Official Joke API using `getServerSideProps()` and displays its setup and punchline.

### 2. SSR Post (`/ssr`)
Fetches a post from JSONPlaceholder using `getServerSideProps()` and displays its title and body.

### 3. CSR Post (`/csr`)
Uses React's `useEffect()` and `useState()` to fetch and display post data in the browser.

### 4. SSG Post (`/ssg`)
Uses `getStaticProps()` to fetch post data at build time.

### 5. Dynamic SSR (`/ssr/2`)
Uses a dynamic route and `context.params.id` to fetch and display a post based on its ID.

## SSR, CSR, and SSG Comparison

| Method | Data Fetching | Advantages | Best Use Cases |
|---|---|---|---|
| SSR | On each request | Fresh data for each request | Frequently changing content |
| CSR | In the browser after rendering | Interactive user experiences | Dashboards and interactive applications |
| SSG | At build time | Fast page delivery | Blogs and documentation |

## How to Run the Project

1. Install Node.js.
2. Open the project directory in a terminal.
3. Install dependencies:

   `npm install`

4. Start the development server:

   `npm run dev`

5. Open `http://localhost:3000` in your browser.

## APIs Used
- Random Joke API: https://official-joke-api.appspot.com/random_joke
- JSONPlaceholder Posts API: https://jsonplaceholder.typicode.com/posts/1

## Conclusion
This lab demonstrates three rendering approaches in Next.js. SSR fetches data at request time, CSR fetches data in the browser, and SSG generates pages using data fetched at build time. The appropriate approach depends on the application's performance and data-freshness requirements.
