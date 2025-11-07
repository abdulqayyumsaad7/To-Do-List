# Full-Stack To-Do List Application

A simple **To-Do List** application built with **React (frontend)**, **Node.js + Express (backend)**, and **MySQL (database)**.  
It allows users to **create, read, update, and delete tasks** with real-time updates, helping manage tasks and improve productivity.

---

## 📂 Project Structure

```

todolist/
├── backend/         # Node.js + Express backend
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js          # Database connection
│   │   ├── models/
│   │   │   └── Task.js        # Task model
│   │   ├── routes/
│   │   │   └── taskRoutes.js  # API routes
│   │   └── index.js            # Server entry point
│   └── .env                     # Database configuration
├── frontend/        # React frontend
│   ├── src/
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
└── README.md

````

---

## 🛠️ Technologies Used

- **Frontend:** React, Axios, CSS  
- **Backend:** Node.js, Express, Sequelize ORM  
- **Database:** MySQL  
- **Other Tools:** dotenv, cors, body-parser

---

## ⚡ Features

- Add new tasks
- View all tasks
- Mark tasks as complete/incomplete
- Delete tasks
- Full CRUD operations connected to MySQL database

---

## 🔧 Backend Setup

1. Go to the backend folder:
```bash
cd backend
````

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with MySQL credentials:

```env
DB_NAME=todolistdb
DB_USER=root
DB_PASSWORD=yourpassword
DB_HOST=localhost
DB_DIALECT=mysql
PORT=5000
```

4. Create MySQL database if not exists:

```sql
CREATE DATABASE todolistdb;
```

5. Start the backend server:

```bash
node src/index.js
```

Server should run at:

```
http://localhost:5000
```

---

## 🔧 Frontend Setup

1. Go to frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the React development server:

```bash
npm start
```

Frontend should open at:

```
http://localhost:3000
```

---

## 🔗 Connecting Frontend to Backend

The frontend is configured to call backend API at:

```
http://localhost:5000/api/tasks
```

The React app can:

* Fetch all tasks
* Add new tasks
* Update task completion status
* Delete tasks

---

## 📌 Notes

* Ensure **MySQL server is running** before starting backend.
* You can customize database credentials in `.env`.
* This project uses **Sequelize ORM** for database interaction (no Prisma).

---

## 👨‍💻 Author

* Md Abdul Qayyum

---

## 🚀 Future Improvements

* Add **user authentication (login/register)**
* Add **task categories and priorities**
* Add **due dates and notifications**
* Add **drag-and-drop sorting of tasks**

---

## 🎉 License

This project is **open source** and free to use.


Do you want me to do that?
```
