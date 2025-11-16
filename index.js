// index.js - Updated with static file support + session-based authentication
require('dotenv').config();
const express = require("express");
const next = require("next");
const path = require("path");
const session = require("express-session");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, dir: "./src" });
const handle = app.getRequestHandler();

const urlencodedParser = express.urlencoded({ extended: true });

app.prepare().then(() => {
    const server = express();

    // -----------------------------
    // STATIC FILES (IMPORTANT)
    // -----------------------------
    server.use(express.static(path.join(__dirname, "public")));
    // Now /public/downloads/lofi-pack.zip works at:
    // http://localhost:3000/downloads/lofi-pack.zip

    // EJS setup
    server.set("view engine", "ejs");
    server.set("views", path.join(__dirname, "views"));

    // JSON parser
    server.use(express.json());

    // Session middleware
    server.use(session({
        secret: process.env.SESSION_SECRET || 'a-very-secret-key-for-admin',
        resave: false,
        saveUninitialized: true,
        rolling: true,
        cookie: {
            secure: dev ? false : true,
            maxAge: 5 * 60 * 1000 // 5 minutes
        }
    }));

    // Admin authentication
    const isAdmin = (req, res, next) => {
        if (req.session.isAdmin) {
            return next();
        }
        res.redirect("/admin/login");
    };

    // -----------------------------
    // ADMIN ROUTES
    // -----------------------------

    server.get("/admin/login", (req, res) => {
        res.render("login", { error: null });
    });

    server.post("/admin/login", urlencodedParser, (req, res) => {
        const { username, password } = req.body;

        if (username === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            req.session.isAdmin = true;
            return res.redirect("/admin/course");
        }

        res.render("login", { error: "Invalid username or password." });
    });

    // Protected Routes
    server.get("/admin/course", isAdmin, (req, res) => {
        res.render("course");
    });

    server.get("/admin/video", isAdmin, (req, res) => {
        res.render("video");
    });

    // -----------------------------
    // NEXT.JS HANDLER
    // -----------------------------
    // NEXT.JS HANDLER
    server.use((req, res) => {
        return handle(req, res);
    });


    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
        console.log(`🚀 Server running at http://localhost:${PORT}`);
        console.log(`👤 Admin panel: http://localhost:${PORT}/admin/login`);
        console.log(`📦 Downloads: http://localhost:${PORT}/downloads/lofi-pack.zip`);
    });
});
