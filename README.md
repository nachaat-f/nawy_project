##Overview :
This project is an application built with Node.js and MongoDB Nextjs that is responsible for managing apartments.

##Steps to run local backend & frontend 
*backend 
1-cd backend
2-npm start
*frontend
1-cd apartment-listing-frontend
2-npm run dev 
3-change this in page.tsx example:
await axios.get('http://localhost:5000/api/apartments', {
await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/apartments`, {

**Otherwise 
you have a dockerfile in the frontend and one in the backend 
and one that it is docker-compose.yaml on the whole project 




#backend documnetation 

## Table of Contents
- [Overview](#overview)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Connection](#database-connection)
- [Models](#models)
- [Controllers](#controllers)
- [Routes](#routes)
- [API Endpoints](#api-endpoints)
- [Running the Application](#running-the-application)
- [Error Handling](#error-handling)


## Overview
This project allows users to retrieve a list of apartments, view details of specific apartments, and add new apartments to the database.

## Installation
1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install the required dependencies: `npm install`

## Environment Variables
Create a `.env` file in the root directory and include the following:

## Database Connection
The connection to MongoDB is handled in `db.ts`.

## Models
The apartment schema is defined in `apartment.ts`.

## Controllers
The logic for handling requests is implemented in `apartmentController.ts`.

## Routes
API routes are defined in `apartmentRoutes.ts`.

## API Endpoints
- `GET /api/apartments`
- `GET /api/apartments/:id`
- `POST /api/apartments`

## Running the Application
1. Ensure your MongoDB server is running.
2. Start the server: `npm start`

## Error Handling
Basic error handling is implemented for the API.
