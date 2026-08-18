# Task Manager App

A modern, responsive Task Management application built with React, Vite, Redux Toolkit, and Tailwind CSS.

## 🚀 Features

- **Add Tasks**: Easily create new tasks to keep track of your work.
- **Task Status**: Mark tasks as completed or pending.
- **Filter Tasks**: View all tasks, or filter by pending or completed status.
- **Task Statistics**: Real-time progress bar and stats (Total, Pending, Completed).
- **Delete Tasks**: Remove tasks you no longer need.
- **Modern UI**: Clean and beautiful interface styled with Tailwind CSS and the *Plus Jakarta Sans* font.

## 🛠️ Tech Stack

- **React** - UI Library
- **Vite** - Next Generation Frontend Tooling
- **Redux Toolkit** - Global State Management
- **Tailwind CSS** - Utility-first CSS framework

## 📦 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Navigate to the project directory:
   ```bash
   cd "Day 35"
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the App Locally

To start the development server, run:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## 📁 Project Structure

- `src/app/store.js`: Redux store configuration.
- `src/Features/taskSlice.js`: Redux slice containing state and reducers for tasks.
- `src/components/AddTask.jsx`: Component for adding new tasks.
- `src/components/TaskList.jsx`: Component displaying the list of tasks with filters.
- `src/components/TaskCard.jsx`: Individual task component with complete/undo and delete actions.
- `src/components/TaskStats.jsx`: Dashboard component showing task statistics and progress.
- `src/App.jsx`: Main application layout integrating all components.
