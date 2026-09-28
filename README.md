# AI StudyBuddy API Documentation

Welcome to the AI StudyBuddy backend API! This backend is built using Node.js, Express, MongoDB, and the Google Gemini 2.5 Flash model. 

## Base URL
`http://localhost:5000/api`

## Authentication

All protected routes require a JSON Web Token (JWT) to be sent in the `Authorization` header.

**Header Format:**
`Authorization: Bearer <your_jwt_token>`

---

## 1. Auth Endpoints

### Register a User
- **URL**: `/auth/register`
- **Method**: `POST`
- **Description**: Registers a new user and returns an access token.
- **Body** (JSON):
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securepassword123",
    "role": "student" 
  }
  ```

### Login a User
- **URL**: `/auth/login`
- **Method**: `POST`
- **Description**: Authenticates an existing user and returns an access token.
- **Body** (JSON):
  ```json
  {
    "email": "john@example.com",
    "password": "securepassword123"
  }
  ```

---

## 2. Study Material & AI Endpoints

*Note: All endpoints below require the `Authorization` header.*

### Upload Study Material
- **URL**: `/materials/upload`
- **Method**: `POST`
- **Description**: Uploads a file (`.txt`, `.md`, or `.pdf`) and extracts its text.
- **Body** (Form-Data):
  - `file`: The file to upload (required).
  - `title`: The title of the material (optional).

### Generate AI Summary
- **URL**: `/materials/:id/summarize`
- **Method**: `POST`
- **Description**: Generates a concise summary for the uploaded material using Google Gemini.
- **Parameters**: `id` (The ID of the uploaded material)

### Generate AI Flashcards
- **URL**: `/materials/:id/flashcards`
- **Method**: `POST`
- **Description**: Generates 5 flashcards for active recall learning based on the material.
- **Parameters**: `id` (The ID of the uploaded material)

### Generate AI Quiz
- **URL**: `/materials/:id/quiz`
- **Method**: `POST`
- **Description**: Produces a 5-question multiple-choice quiz based on the material.
- **Parameters**: `id` (The ID of the uploaded material)

### Generate AI Study Plan
- **URL**: `/materials/:id/study-plan`
- **Method**: `POST`
- **Description**: Generates a personalized study plan based on user preferences.
- **Parameters**: `id` (The ID of the uploaded material)
- **Body** (JSON):
  ```json
  {
    "goal": "Prepare for backend development exam",
    "hoursPerDay": 2,
    "days": 7
  }
  ```
