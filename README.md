# Backend Notes Application

A backend Notes Application built using Node.js, Express.js, and MongoDB to practice REST APIs and CRUD operations.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Features

- Create a new note
- Get all notes
- Update an existing note
- Delete a note

## Installation

1. Clone the repository:

   git clone https://github.com/zeeshan-ansari-01/Backend-Notes-Application.git

2. Navigate to the project folder:

   cd Backend-Notes-Application

3. Install dependencies:

   npm install

4. Create a `.env` file in the root folder and add your MongoDB connection string:

   MONGODB_URI=your_mongodb_connection_string

5. Start the server:

   node server.js

The server will run on port `3000`.

## API Endpoints

| Method | Endpoint       | Description              |
|--------|----------------|--------------------------|
| POST   | `/notes`       | Create a new note        |
| GET    | `/notes`       | Retrieve all notes       |
| PATCH  | `/notes/:id`   | Update an existing note  |
| DELETE | `/notes/:id`   | Delete a note            |