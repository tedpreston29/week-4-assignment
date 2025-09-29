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

app.get("/userRating", async (req, res) => {
  const reviews = await dataBase.query(
    `SELECT * FROM filmRating ORDER BY title ASC`
  );

  res.json(reviews.rows);
});

app.post("/userRating", async (req, res) => {
  const body = req.body;
  const titleFromUser = req.body.title;
  const commentFromUser = req.body.comment;
  const ratingFromUser = req.body.rating;

  const data = await dataBase.query(
    `INSERT INTO filmRating (title, rating, comment) VALUES($1, $2, $3)`,
    [titleFromUser, ratingFromUser, commentFromUser]
  );

  res.json({ status: `Review submitted, Cheers!` });
});

app.delete("/userRating/:id", async (req, res) => {
  const id = req.params.id;
  await dataBase.query(`DELETE FROM filmRating WHERE id = $1`, [id]);
  res.json({ status: `Review ${id} deleted` });
});

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => {
  console.log(`The server be runnin' on ${PORT}`);
});
