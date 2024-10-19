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
- cloudinary - api for image ai resizing

## Project Structure

- actions (represents controllers, handles logic)
- components (html components to be reused)
- app (app pages)
- lib (reusable functions, database connection)
- actions (controllers, handles logic)

Example: page.jsx has a RegisterForm that is a component in components folder. The RegisterForm component is connected to the Register action in actions folder.

## .env

CONNECTIONSTRING="Mongodb connection string"
JWTSECRET="Random jwt secret"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="Your Cloud Name"
NEXT_PUBLIC_CLOUDINARY_API_KEY="Your API Key"
CLOUDINARY_API_SECRET="Your API Secret"
