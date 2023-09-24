const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

// requiring cors 
const cors = require("cors");

app.use(cors({origin: "https://ptinternationalmandiriexpo.com"}))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

const body_parser = require('body-parser');
app.use(body_parser.json());

// requiring router 
const user_router = require("./Routes/users");
app.use("/users", user_router);

// connection to MongoDB
require("./MongoDB/connection");

app.listen(PORT, () => {
    console.log(`server is connected`);
})