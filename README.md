# User List Application

## This project is a React application built with TypeScript and Material-UI, designed to display and manage a list of users. Users can be filtered through a search feature that allows for real-time updates.

### Table of Contents

  •	Features
  •	Technologies Used
  •	Setup and Installation
  •	Available Scripts
  •	Folder Structure
  •	Project Components
  •	Contributing
  •	License

### Features

	•	User List: Displays a list of users with their IDs, names, usernames, and emails.
	•	Search Functionality: Filter users by name in real-time.
	•	Error Handling: Displays an error message if data fetching fails.
	•	Loading State: Shows a loading spinner while fetching user data.

#### Technologies Used

	•	React with TypeScript
	•	Material-UI for component styling and layout
	•	Create React App for project setup and configuration
	•	JSONPlaceholder API for mock user data

Setup and Installation

To get started with the project, clone the repository and install the dependencies:


### Folder Structure

user-list-app/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBar.tsx
│   │   ├── UserTable.tsx
│   │   ├── UserTableRow.tsx
│   ├── services/
│   │   └── userService.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── package.json
└── README.md