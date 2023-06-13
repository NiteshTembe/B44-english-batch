
import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import { usersRouter } from "./routes/users.js";
import { authRouter } from "./routes/auth.js";
import { refreshRouter } from "./routes/refresh.js"
import cors from 'cors';
import credentials from "./middleware/credentials.js";
import corsOptions from "./config/corsOptions.js";
import cookieParser from "cookie-parser";
import verifyJWT from "./middleware/verifyJWT.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

//console.log(process.env.MONGO_URL);
const MONGO_URL = process.env.MONGO_URL;

//Mongo connection
async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is Connected");
  return client;
}

export const client = await createConnection();


// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

//converting body to json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//REST API Endpoints
app.get("/", (req, res) => {
  res.send("Hello Everyone🥳🥳🥳🥳");
});

app.use("/auth", authRouter);
app.use("/refresh", refreshRouter);

app.use(verifyJWT);
app.use("/users", usersRouter);

app.listen(PORT, () => console.log("Server started on the port", PORT));