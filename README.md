# 📘 CareerSage AI

### *AI-Driven Career Guidance and Recommendation System for Students*

CareerSage AI is a web-based career guidance system designed for **10th and 12th grade students**.
It uses **Machine Learning**, **aptitude tests**, **academic scores**, and **personality MCQs** to recommend the most suitable career paths, along with courses and college suggestions.

This project solves the common problem of **career confusion and lack of proper counseling** among students, especially in rural and semi-urban areas.

---

## 🚀 Features

### 🔹 Student Module

* User Registration & Login
* Choose Grade: **10th / 12th**
* Enter Academic Marks
* Complete a **15-Question MCQ Aptitude Test**
* Get a **Personalized Career Recommendation**

### 🔹 AI / ML Module

* Machine learning model trained on a custom dataset
* Uses Decision Tree / Random Forest classifier
* Predicts careers based on academic + aptitude performance
* Generates recommendation after MCQ test completion

### 🔹 Backend (Flask API)

* REST APIs for Register, Login, Predict
* SQLite database for storing user data
* Model integration with `.pkl` files

### 🔹 Frontend (React.js)

* Clean UI
* Pages for Login, Register, Career Test, MCQ Test, and Result
* Fully connected to Flask using fetch API

---

## 🧠 Machine Learning Model

The ML model uses features like:

* Math Score
* Logic Score
* Creativity Level
* Communication Level
* Preferred Subject
* MCQ Test Score

The model outputs:
👉 Recommended Career (Engineer, Doctor, Designer, Teacher, etc.)

---

## 🏗️ Tech Stack

| Layer            | Technology         |
| ---------------- | ------------------ |
| Frontend         | React.js           |
| Backend          | Flask (Python)     |
| Database         | SQLite             |
| Machine Learning | Scikit-Learn       |
| Language         | Python, JavaScript |

---

## 📂 Project Folder Structure

```
CareerSageAI/
│
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── LoginPage.js
│   │   │   ├── RegisterPage.js
│   │   │   ├── CareerTestForm.js
│   │   │   ├── MCQTest10th.js
│   │   │   ├── MCQTest12th.js
│   │   ├── App.js
│   │   ├── index.js
│   └── package.json
│
├── server/                 # Flask Backend
│   ├── app.py
│   ├── career_model.pkl
│   ├── career_encoder.pkl
│   ├── database.db
│   └── requirements.txt
│
└── dataset/
    └── CareerSageAI_Training_Dataset.csv
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/CareerSageAI.git
cd CareerSageAI
```

---

### 2️⃣ Backend Setup (Flask)

```bash
cd server
pip install -r requirements.txt
python app.py
```

Backend will run at:

```
http://127.0.0.1:5000
```

---

### 3️⃣ Frontend Setup (React)

```bash
cd client
npm install
npm start
```

Frontend will run at:

```
http://localhost:3000
```

## 🚀 Future Enhancements

* Add **AI Chatbot** for student doubts
* Suggest **colleges with real-time admission data**
* Add **PDF Report Generator**
* Add **Mobile App** version
* Improve dataset with real student data
* Multi-language support (English, Marathi, Hindi)

---

## 👨‍💻 Contributors

| Name                       | Email                                                                     |
| -------------------------- | ------------------------------------------------------------------------- |
| **Mihir Tamboli**          | [mihirtamboli262003@gmail.com](mailto:mihirtamboli262003@gmail.com)       |
| **Prathmesh Bhilegaonkar** | [prathmeshbhilegaonkar@gmail.com](mailto:prathmeshbhilegaonkar@gmail.com) |
| **Moreshwar Naikwadi**     | [moreshwarnaikwadi9021@gmail.com](mailto:moreshwarnaikwadi9021@gmail.com) |
| **Omkar Shenkar**          | [omkarshenkar111@gmail.com](mailto:omkarshenkar111@gmail.com)             |

### Guide

**Prof. Komal Munde**
Department of Computer Science & Engineering
MIT ADT University, Pune

---

## ⭐ Special Thanks

Thanks to MIT ADT University for providing guidance and support during the development of this project.

---

## 📜 License

This project is created for educational purposes.


