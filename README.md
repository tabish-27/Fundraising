# Fundraising Platform 💰🚀

A full-stack fundraising application that allows users to sign up, log in, view leaderboards, and claim rewards based on their contributions. Built with the **MERN stack** and deployed on **Vercel**.

🌐 **Live Site**: [fundraising-red.vercel.app](https://fundraising-red.vercel.app)  
📦 **GitHub Repo**: [github.com/tabish-27/Fundraising](https://github.com/tabish-27/Fundraising)

---

## 📁 Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM

### Backend

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

---

## 🔧 Features

- 🔐 User Authentication (Signup/Login)
- 📊 Leaderboard with ranked contributors
- 🎁 Reward claiming system
- ⚙️ Fully responsive design
- ✨ Modern UI with smooth navigation

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the repository

```bash
git clone https://github.com/tabish-27/Fundraising.git
cd Fundraising
2. Setup Frontend
cd client
npm install
npm run dev
3. Setup Backend
cd ../server
npm install
npm run dev
📁 Folder Structure
Fundraising/
├── client/         # Frontend - React + Tailwind
│   └── src/
│       ├── components/
│       ├── pages/
│       └── assets/
├── server/         # Backend - Node + Express
│   ├── controllers/
│   ├── routes/
│   └── data/
🛠 Environment Variables
Create a .env file inside the server/ directory:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
📌 Important Commands
Purpose	Command
Run Frontend	npm run dev (inside client/)
Run Backend	npm run dev (inside server/)
Build Frontend	npm run build (inside client/)

📄 License
This project is open source and free to use under the MIT License.

🙋‍♂️ Author
Made with 💙 by Tabish Javed
Feel free to connect and reach out!
