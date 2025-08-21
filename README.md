# ILS MERN Project

This is a **MERN stack project** that contains both the **frontend (client)** and **backend (server)** in a single repository.

---

## 📂 Project Structure
```
ils/
 ├── client/   # React frontend
 └── server/   # Node.js + Express backend
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/ils.git
cd ils
```

---

### 2. Setup Backend (Server)
1. Navigate to the server folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file inside `server/` with the following variables:
   ```env
   PORT=5000
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-secret-key
   NODE_ENV=development
   ```
4. Start the server (development mode):
   ```bash
   npm run dev
   ```
   > Server will run on **http://localhost:5000**

---

### 3. Setup Frontend (Client)
1. Open a new terminal and navigate to the client folder:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```
   > Client will run on **http://localhost:3000**

---

## 🔗 API Endpoints (Examples)
- `POST /api/auth/register` → Register new user  
- `POST /api/auth/login` → Login user & get JWT  
- `GET /api/products` → Fetch all products  
- `POST /api/cart/add` → Add item to cart  
- `POST /api/order/createCartOrder` → Create order from cart  

---

## ⚙️ Technologies Used
- **Frontend:** React.js, Axios, Redux (optional)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB + Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Other:** bcrypt, dotenv, nodemon

---

## 📝 Scripts

### Server (`/server/package.json`)
- `npm run dev` → Run backend in development mode using nodemon
- `npm start` → Run backend normally

### Client (`/client/package.json`)
- `npm start` → Start React frontend
- `npm run build` → Build production-ready frontend

---

## 📦 Install Both Client & Server Together
If you want to install everything at once:
```bash
cd ils
npm install --prefix client
npm install --prefix server
```

---

## ⚠️ Notes
- Make sure **MongoDB is running** locally or use [MongoDB Atlas](https://www.mongodb.com/atlas).  
- Update `.env` files with correct values.  
- Do **not** commit `.env` files (already ignored in `.gitignore`).  


## 📜 License
This project is licensed under the MIT License.
