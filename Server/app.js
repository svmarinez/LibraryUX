require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const session = require("express-session");
const favicon = require("serve-favicon");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const MongoStore = require("connect-mongo")(session);
const flash = require('connect-flash');
const passport = require('passport');

mongoose.Promise = Promise;
mongoose
  .connect(process.env.DBURL)
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);
const app = express();
// CORS setup

var whitelist = ["http://localhost:4200"];
var corsOptions = {
  origin: function(origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions));

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));



app.use(session({
  secret: 'captainredcheeto',
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 2419200000
  },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

require("./passport")(app);

app.use(flash());
app.use((req, res, next) => {
  app.locals.title = "BibliUX";
  res.locals.user = req.user;
  next();
});

const index = require("./routes/index");
app.use("/", index);
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);
const libRoutes = require("./routes/lib");
app.use("/lib", libRoutes);
/* const formRoutes = require("./routes/form");
app.use("/form", formRoutes)
 */
module.exports = app;
