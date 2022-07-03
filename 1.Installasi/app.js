const express = require("express");
const app = express();
const http = require("http").createServer(app);
const path = require("path");
const [PORT, HOST_URL] = [ 3030, "http://localhost:3030" ];

//Require view engine ejs
const expressLayouts = require("express-ejs-layouts");

//Require untuk konfigurasi Flash
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

//konfigurasi ejs
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//konfigurasi flash
app.use(cookieParser("secret"));

//konfigure session
const cookieTime = 1000 * 60 * 15;
app.use(
  session({
    cookie: { maxAge: cookieTime * 4 * 24 },
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);
let sess;
app.use(flash());

app.use("/", require("./routes/routes"));

http.listen(PORT, () => console.log(`Aplikasi berjalan di ${HOST_URL}`));
