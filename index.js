import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/Users.js";
import {btc} from "./routes/btc.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth" , userRouter);
app.use("/btc", btc);


mongoose.connect(
  "mongodb+srv://node:AhJAQ_D@users.6re0uzj.mongodb.net/users?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
);


const server =   app.listen(3001, () => 
console.log("Server started")
);


module.exports = server;
