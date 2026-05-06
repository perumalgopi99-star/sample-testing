# Sample Todo App

A modern, full-stack web application built with Node.js and vanilla JavaScript.

## Features

- ✨ Clean, modern UI with gradient design
- 📝 Create, read, update, and delete todos
- ✓ Mark todos as complete/incomplete
- 🚀 REST API backend with Express.js
- 📱 Responsive design
- ⚡ Real-time updates

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Database**: In-memory (can be extended to use a database)

## Installation

```bash
npm install
```

## Running the App

```bash
npm start
```

The app will be available at `http://localhost:3000`

## API Endpoints

### Get all todos
```
GET /api/todos
```

### Create a new todo
```
POST /api/todos
Content-Type: application/json

{
  "title": "My new todo"
}
```

### Update a todo
```
PUT /api/todos/:id
Content-Type: application/json

{
  "title": "Updated title",
  "completed": true
}
```

### Delete a todo
```
DELETE /api/todos/:id
```

### Health check
```
GET /api/health
```

## Project Structure

```
.
├── server.js          # Express server and API routes
├── package.json       # Node.js dependencies
├── public/
│   └── index.html     # Frontend app
└── README.md          # This file
```

## Development

To modify the app:

1. Edit `server.js` to change the backend API
2. Edit `public/index.html` to change the frontend
3. Run `npm start` to see your changes

## Notes

- Todos are stored in memory, so they will reset when the server restarts
- To persist data, you could integrate a database like MongoDB or PostgreSQL
- This is a sample application for demonstration purposes
