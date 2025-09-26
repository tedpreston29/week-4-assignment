import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());

const dataBase = new pg.Pool({
  connectionString: process.env.DB_CONN,
});

app.get("/", (req, res) => {
  res.status(200).json(`I AM ROOT!`);
});

// app.get("/filmRating", async (req, res) => {
//   const reviews = // Come back to here after table created
// })

app.listen(9999, () => {
  console.log(`The server be runnin' on http://localhost:9999`);
});
