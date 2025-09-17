// index.js - Updated with session-based admin authentication and 5-minute expiration
require('dotenv').config();
const express = require("express");
const next = require("next");
const path = require("path");
const session = require("express-session"); // Import express-session

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, dir: "./src" });
const handle = app.getRequestHandler();

// Define the form data parser once to reuse it
const urlencodedParser = express.urlencoded({ extended: true });

app.prepare().then(() => {
  const server = express();

  // EJS setup
  server.set("view engine", "ejs");
  server.set("views", path.join(__dirname, "views"));

  // Apply the JSON parser for Next.js API routes
  server.use(express.json());

  // Session middleware setup
  server.use(session({
    secret: process.env.SESSION_SECRET || 'a-very-secret-key-for-admin', // It's best to use an environment variable
    resave: false,
    saveUninitialized: true,
    rolling: true, // <-- ADDED: Resets the cookie expiration on every request
    cookie: { 
      secure: dev ? false : true, // Use secure cookies in production
      maxAge: 5 * 60 * 1000 // <-- ADDED: 5 minutes in milliseconds
    } 
  }));

  // Middleware to check if the admin is logged in
  const isAdmin = (req, res, next) => {
    if (req.session.isAdmin) {
      return next(); // If logged in, proceed to the route
    }
    // If not logged in, redirect to the login page
    res.redirect("/admin/login");
  };

  // --- Admin Panel Routes ---

  // Page to display the login form
  server.get("/admin/login", (req, res) => {
    res.render("login", { error: null });
  });

  // Handle the login form submission
  server.post("/admin/login", urlencodedParser, (req, res) => {
    const { username, password } = req.body;

    // Check for the correct username and password
    if (username === "dieknobeats@next.com" && password === "123456789") {
      req.session.isAdmin = true; // Set a session variable to mark as logged in
      res.redirect("/admin/course");
    } else {
      res.render("login", { error: "Invalid username or password." });
    }
  });

  // Apply the 'isAdmin' middleware to protect these routes
  server.get("/admin/course", isAdmin, (req, res) => {
    res.render("course");
  });

  server.get("/admin/video", isAdmin, (req, res) => {
    res.render("video");
  });
  
  // --- Next.js Handler ---

  // Let Next.js handle all other requests
  server.all(/.*/, (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`👤 Admin panel: http://localhost:${PORT}/admin/login`);
  });
}).catch((ex) => {
  console.error('Failed to start server:', ex);
  process.exit(1);
});