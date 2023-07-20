# NoteIT Documentation

## Table of Contents

1. Introduction

   - Overview
   - Features

2. Installation and Setup

   - Prerequisites
   - Installation Steps

3. Usage Guide

   - Creating a Note
   - Viewing a Note
   - Editing a Note
   - Deleting a Note

4. API Reference

   - Endpoints
   - Request Examples
   - Response Examples

5. Database Schema

   - Note Model

6. Technologies Used

   - EJS
   - Node.js
   - Express.js
   - MongoDB
   - Bootstrap

7. Contributors

## 1. Introduction

### Overview

The Notes App is a simple and intuitive web application built to help users create, manage, and organize their notes. The app is built using the EJS templating engine, Node.js, Express.js, MongoDB, and Bootstrap for the front-end design. Its user-friendly interface and powerful features make it an ideal choice for users seeking an efficient note-taking solution.

### Features

- Create and store notes with titles and content.
- View a list of all notes.
- View details of a specific note.
- Edit existing notes to update their content.
- Delete unwanted notes to keep the list clean and organized.

## 2. Installation and Setup

### Prerequisites

Before installing the Notes App, ensure you have the following prerequisites:

- Node.js installed on your system.
- MongoDB set up and running locally or remotely.

### Installation Steps

1. Clone the GitHub repository or download the source code.

2. Navigate to the project directory using the command line.

3. Install the required dependencies by running the following command:

`npm install`

4. Configure the MongoDB connection string in the `config.js` file.

5. Start the server by running:

6. The Notes App should now be accessible at `http://localhost:1234` in your web browser.

## 3. Usage Guide

### Creating a Note

1. On the home page, click on the "Create New Note" button.
2. Enter a title and content for your note in the provided input fields.
3. Click the "Add to Note" button to store the note in the database.

### Viewing a Note

1. The home page displays a list of all your saved notes.
2. Click on a note's title to view its content in detail.

### Editing a Note

1. To edit a note, navigate to the note's detail page by clicking on its title.
2. Modify the content of the note as desired.
3. Click the "Update" button to update the note in the database.

### Deleting a Note

1. To delete a note, navigate to the note's detail page by clicking on its title.
2. Click the "Delete" button to remove the note from the database.

## 4. API Reference

### Endpoints

- `GET /notes`: Get all notes.
- `GET /notes/:id`: Get a specific note by ID.
- `POST /notes`: Create a new note.
- `PUT /notes/:id`: Update an existing note by ID.
- `DELETE /notes/:id`: Delete a note by ID.

## 5. Database Schema

### Note Model

```js
const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
```

## 6. Technologies Used

### EJS

EJS is a templating engine that allows us to embed JavaScript code directly within HTML pages. It helps us render dynamic content on the client-side.

### Node.js

Node.js is a JavaScript runtime environment that allows us to execute JavaScript code outside of a web browser, making it possible to build server-side applications.

### Express.js

Express.js is a minimalist web application framework for Node.js, simplifying the process of building robust and scalable web applications.

### MongoDB

MongoDB is a NoSQL database that stores data in a JSON-like format. It provides flexibility and scalability, making it a popular choice for modern web applications.

### Bootstrap

Bootstrap is a powerful front-end framework that simplifies the process of designing responsive and visually appealing user interfaces. By utilizing Bootstrap, we can ensure that the Notes App looks great on various devices and screen sizes.

Bootstrap provides a plethora of pre-designed components, such as buttons, forms, and navigation bars, making it easy to create a consistent and user-friendly experience.

We've leveraged Bootstrap's grid system, CSS classes, and JavaScript components to enhance the overall user interface and improve the usability of the app.

## 7. Contributors

Amanuael Kebede

## Contributing

We welcome contributions from the community to enhance the NoteIT further. If you'd like to contribute, please follow these steps:

1. Fork the repository and create your branch: `git checkout -b my-feature-branch`
2. Commit your changes: `git commit -m 'Add some feature'`
3. Push to the branch: `git push origin my-feature-branch`
4. Submit a pull request detailing your changes.

## Support

If you encounter any issues or have questions about NotesIT, please feel free to contact us at [manuelheav32@gmail.com].
