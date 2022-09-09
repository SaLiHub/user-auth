import express from "express";
import cors from "cors";
import users from './api/routers.js'
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/v1", users);

app.get('/', function(req, res){
    res.redirect('/api/v1/sign-up');
});

export default app