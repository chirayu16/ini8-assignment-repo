# User Register Application

This project consists of a frontend built using Angular and a backend built with Node.js and Express. The backend uses MongoDB as its database. Follow the instructions below to set up and run both the frontend and backend on your local machine.

## Prerequisites

Before running the project, ensure you have the following installed:

1. **Node.js**: Download and install Node.js from [here](https://nodejs.org/).
2. **MongoDB**: Install MongoDB on your local machine. Instructions can be found [here](https://www.mongodb.com/docs/manual/installation/).
3. **Angular CLI**: Install the Angular CLI globally by running the following command:
    ```bash
    npm install -g @angular/cli
    ```

### Clone this repository

## Backend Setup (Node.js with Express and MongoDB)

### 1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
### 2. Install dependencies:
```bash
npm install
```
### 3. Set up environment variables:
  ```bash
  MONGO_URI=mongodb://localhost:27017/your-database-namePORT=5000
  ```
### 4.  Start the backend server:
  ```bash
  npm run dev
  ```
  The backend will be running on http://localhost:5000 

# Frontend Setup Guide (Angular)


## Prerequisites

- Node.js (LTS version recommended)
- Angular CLI (if you don't have it installed, run `npm install -g @angular/cli`)


### 1. Navigate to the Frontend Repository
    Move into the frontend folder within the project:
```bash
cd frontend/user-app
```

### 2. Install Frontend Dependencies
    Install the necessary dependencies for the Angular project:

```bash
npm install
```

### 3. Run the Frontend
    To start the Angular development server, run:
```bash
ng serve
```

### 4. Open your browser and navigate to:
```bash
http://localhost:4200
```



      



