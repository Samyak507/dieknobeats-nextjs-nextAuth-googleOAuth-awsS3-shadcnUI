// index.js - Alternative approach using middleware
require('dotenv').config();
const express = require("express");
const next = require("next");
const path = require("path");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, dir: "./src" }); // Next.js app lives in /src
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // ✅ EJS setup
  server.set("view engine", "ejs");
  server.set("views", path.join(__dirname, "views"));

  // ✅ Parse form data (for admin forms)
  server.use(express.urlencoded({ extended: true }));
  server.use(express.json());

  // ✅ Admin Panel Routes
  server.get("/admin/login", (req, res) => {
    res.render("login", { error: null });
  });

  server.get("/admin/course", (req, res) => {
    res.render("course");
  });

  server.get("/admin/video", (req, res) => {
    res.render("video");
  });

  // ✅ Middleware approach - handles all remaining requests
  server.use((req, res, next) => {
    // Let Next.js handle everything else
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`📁 Next.js pages from: ./src`);
    console.log(`👤 Admin panel: http://localhost:${PORT}/admin/login`);
  });
}).catch((ex) => {
  console.error('Failed to start server:', ex);
  process.exit(1);
});