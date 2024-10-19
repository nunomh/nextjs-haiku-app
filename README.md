# Next.js Haiku App

Next.js Tutorial for Beginners (User CRUD App)

Based on the youtube video: https://www.youtube.com/watch?v=iJejohAs9EY

## Technologies

- Next.js
- Tailwind CSS
- DaisyUI
- MongoDB
- bcrypt - for password hashing
- jsonwebtoken

## Project Structure

- actions (represents controllers, handles logic)
- components (html components to be reused)
- app (app pages)
- lib (reusable functions, database connection)
- actions (controllers, handles logic)

Example: page.jsx has a RegisterForm that is a component in components folder. The RegisterForm component is connected to the Register action in actions folder.

## .env

CONNECTIONSTRING=  
JWTSECRET=
