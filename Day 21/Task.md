# 💰 Expense Tracker App (API-Based Only)

## 📌 Objective

Build a **real-world Expense Tracker Application** using React where all data is stored and managed through an API (JSON Server).
⚠️ No localStorage should be used. (Can be used for login...)

---

## 🧠 Concepts Covered

* useState
* useEffect
* Conditional Rendering
* Two-Way Binding
* Context API (Global State)
* Routing (React Router)
* API Handling using Axios

---

## 🚀 Project Requirements

### 1. 📝 Add Expense

Create a form with:

* Title
* Amount
* Category (Food, Travel, Shopping, etc.)
* Date

**Requirements:**

* Implement **two-way binding**
* On submit → send POST request using Axios
* Store data in JSON Server (database)

---

### 2. 📋 Expense List

* Fetch all expenses from API
* Display:

  * Title
  * Amount
  * Category
  * Date
* Each item must have:

  * ❌ Delete button (API call)

---

### 3. 🌐 API Integration (MANDATORY)

Use Axios for all operations:

| Action           | Method | Endpoint      |
| ---------------- | ------ | ------------- |
| Get all expenses | GET    | /expenses     |
| Add expense      | POST   | /expenses     |
| Delete expense   | DELETE | /expenses/:id |

👉 **Base URL:**

```
http://localhost:3000
```

---

### 4. 🌍 Global State (Context API)

Create a global store using Context API:

* `expenses` (array)
* `addExpense()`
* `deleteExpense()`

👉 All components must consume data from Context (no props drilling)

---

### 5. 🔄 useEffect Usage

* Fetch expenses when app loads
* Update UI after API operations

---

### 6. 🔀 Routing

Implement routing:

* `/` → Dashboard (Expense list + form)
* `/reports` → Reports page (summary view)

---

### 7. 🎯 Conditional Rendering

Handle UI states:

* ⏳ Loading state (while fetching API)
* ❌ Error state (API failure)
* 📭 Empty state (no expenses)

---

## ⚠️ Strict Rules

❌ Do NOT use:

* localStorage
* Hardcoded data
* Static arrays

✅ MUST:

* Use API for all data operations
* Use Axios properly
* Keep UI in sync with backend

---

## ⭐ Extra Features (Compulsary)

* ✏️ Edit Expense (PUT/PATCH)
* 🔍 Filter by category
* 📊 Monthly expense chart
* 🔄 Auto-refresh data (polling with useEffect)
* 🔎 Search functionality

---

## 🛠️ JSON Server Setup

### Install:

```bash
npm install -g json-server
```

### Create `db.json`:

```json
{
  "expenses": []
}
```

### Run server:

```bash
json-server --watch db.json --port 3000
```

---

## 📁 Suggested Folder Structure

```
src/
 ├── components/
 ├── context/
 ├── pages/
 ├── services/   # Axios config
 ├── App.jsx
 └── main.jsx
```

---

## ⚙️ Tech Stack

* React (Vite)
* Axios
* JSON Server
* React Router DOM

---

## 📅 Submission Guidelines

* Submit GitHub repository link
* Include:

  * Project description
  * Setup instructions (including JSON Server)
  * Screenshots
  * Features list

---

## 🎯 Goal

By completing this project, you will:

* Work with real API-based data flow
* Understand frontend-backend interaction
* Build production-like React applications

---

🔥 Treat this like a **real client project**, not a practice task.
