import express from "express";
const app = express();
import cors from "cors";
import { Commands } from "./commands";

app.use(cors());

app.get("/", (req, res) => {
    res.json(Commands)
});

app.listen(5000, () => console.log("API is working!"));