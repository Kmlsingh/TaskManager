# Task Management Application

This repository contains a Task Management application with a backend built using Node.js, Express, and MongoDB, and a frontend built using React and Vite.

## Features
- User registration and login with OTP verification
- JWT-based authentication
- CRUD operations for tasks
- Task prioritization and status management
- Email notifications for OTP and task reminders
- Responsive UI with React and CSS modules

## Project Structure

```
Task-Management-Backend/
    .env
    .gitignore
    app.js
    config/
        dbConfig.js
    models/
        otpModel.js
        taskModel.js
        userModel.js
    package.json
    readme.md
    utils/
        emailHelpers.js
        otpHelpers.js
        reminderHelper.js
Task-Management-Frontend/
    .env
    .gitignore
    eslint.config.js
    index.html
    package.json
    README.md
    src/
        App.jsx
        assets/
            taskLogo.png
        components/
            Navbar.jsx
            Navbar.module.css
            TaskFilters.css
            TaskFilters.jsx
            ...
        index.css
        main.jsx
        pages/
        vite.config.js
```

## Backend Installation

1. Navigate to the Task-Management-Backend directory:
    ```sh
    cd Task-Management-Backend
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Create a `.env` file in the root of the `Task-Management-Backend` directory and add the following environment variables:
    ```env
    MONGO_DB_URL=<your_mongodb_url>
    SEND_MAIL_GMAIL_ACCOUNT=<your_gmail_account>
    SEND_MAIL_GMAIL_ACCOUNT_PASSWORD=<your_gmail_password>
    FRONTEND_URL=http://localhost:5173
    JWT_SECRET_KEY=<your_jwt_secret_key>
    ```
4. Start the backend server:
    ```sh
    npm run dev
    ```

## API Endpoints

- `POST /users/register` - Register a new user
- `POST /users/login` - Login a user
- `POST /otps` - Send OTP to email
- `GET /users/me` - Get current user info
- `GET /users/logout` - Logout user
- `POST /tasks` - Create a new task
- `GET /tasks` - Get tasks for the current user
- `PATCH /tasks/:taskId` - Update a task
- `DELETE /tasks/:taskId` - Delete a task

## Frontend Installation

1. Navigate to the Task-Management-Frontend directory:
    ```sh
    cd Task-Management-Frontend
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Create a `.env` file in the root of the `Task-Management-Frontend` directory and add the following environment variable:
    ```env
    VITE_BACKEND_URL=http://localhost:1814
    ```
4. Start the frontend development server:
    ```sh
    npm run dev
    ```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
- Express
- MongoDB
- React
- Vite
- Nodemailer
- Node-Cron

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

