import express from "express";
import session from "express-session";
import db from "./config/database.js";
import questionsRouter from "./routes/index.js";
import cors from "cors";
import Knex from "knex";
import connectSessionKnex from "connect-session-knex";

const app = express();

const knex = Knex({
  client: "mysql", // e.g., "mysql" or "pg"
  connection: {
    host: "localhost",
    user: "root",
    password: "password",
    database: "queueoverflow",
  },
});

const KnexSessionStore = connectSessionKnex(session);
const store = new KnexSessionStore({
  knex,
  tablename: "sessions",
});

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
    store,
    cookie: {
      secure: true,
      sameSite: "None",
    },
  })
);
try {
  await db.authenticate();
  console.log("Database connected...");
} catch (error) {
  console.error("Connection error:", error);
}

// Update CORS middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your React app's origin
    credentials: true,
  })
);
app.use(express.json());

// Middleware to check if the user is authenticated
const authenticateUser = (req, res, next) => {
  if (req.session.userId) {
    // User is authenticated
    return next();
  } else {
    // User is not authenticated
    return next();
  }
};

// Apply the authentication middleware to all routes under /queueoverflow
app.use("/queueoverflow", authenticateUser, questionsRouter);

app.listen(5000, () => console.log("Server running at port 5000"));
