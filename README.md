# Innovature Todo App Project

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Features](#features)
- [Screenshots](#screenshots)
- [Error Handling](#error-handling)
- [Custom Hooks](#hooks)
  - [useLogin](#uselogin)
  - [useSignUp](#usesignup)
  - [useLogout](#uselogout)
  - [useFetchTask](#usefetchtask)
  - [useCreateTask](#usecreatetask)
  - [useUpdateTask](#useupdatetask)
  - [useDeleteTask](#usedeletetask)
- [Axios Interceptor](#axios-interceptor)

## Overview

This repository contains a React application built with Vite, providing a Todo List application. It uses React-Redux and Redux Toolkit for state management, Redux Persist for local storage, and various other packages for a seamless development experience.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **React-Redux**: Official React bindings for Redux.
- **Redux Toolkit**: The official, recommended way to write Redux logic.
- **Redux Persist**: Persist and rehydrate a Redux store.
- **Axios**: A promise-based HTTP client for making API requests.
- **React Hot Toast**: A library for showing notifications.
- **React Icons**: Include popular icons in your React project easily.
- **React Router DOM**: Declarative routing for React.

## Project Structure

```
.
├── src
│ ├── components
│ │ ├── FormInput.jsx
│ │ ├── Task.jsx
│ │ ├── TaskList.jsx
│ │ └── ...
│ ├── pages
│ │ ├── Home.jsx
│ │ ├── Login.jsx
│ │ ├── Signup.jsx
│ │ └── ...
│ ├── hooks
│ │ ├── useLogin.js
│ │ ├── useSignUp.js
│ │ ├── useLogout.js
│ │ ├── useFetchTask.js
│ │ ├── useCreateTask.js
│ │ ├── useUpdateTask.js
│ │ ├── useDeleteTask.js
│ │ └── ...
│ ├── store
│ │ ├── user.reducer.js
│ │ ├── tasks.reducer.js
│ │ ├── loading.reducer.js
│ │ └── ...
│ ├── services
│ │ ├── axiosInterceptor.js
│ │ └── ...
│ ├── App.jsx
│ ├── main.jsx
│ └── ...
├── public
│ ├── index.html
│ └── ...
├── .env
├── package.json
└── ...
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/sabari570/Todo-App-with-auth-Innovature-frontend-task2.git
```

2. Navigate to the project directory:

```bash
cd Todo-App-with-auth-Innovature-frontend-task2
```

3. Install dependencies:

```bash
npm install
```

## Configuration

Create a `.env` file in the root directory and add the following:

```env
VITE_TASK_APP_BACKEND_BASE_URL=your_backend_baseurl
```

## Running the Application

```bash
npm run dev
```

## Features

- User authentication (Login, Signup, Logout)
- CRUD operations for tasks
- Persisted state using Redux Persist
- Axios interceptor for handling HTTP requests
- Notifications using React Hot Toast
- Responsive design with various components

## Error Handling

Errors are handled using a custom error handler utility that formats error messages for better readability.

## Hooks

### useLogin

Custom hook for handling user login functionality.

### useSignUp

Custom hook for handling user signup functionality.

### useLogout

Custom hook for handling user logout functionality.

### useFetchTask

Custom hook for fetching tasks from the backend.

### useCreateTask

Custom hook for creating a new task.

### useUpdateTask

Custom hook for updating an existing task.

### useDeleteTask

Custom hook for deleting a task.

## Axios Interceptor

The axios interceptor is configured to handle HTTP requests and responses, managing authentication tokens and error handling seamlessly.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
