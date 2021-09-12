const express = require("express");
const cors = require("cors");

const pgp = require("pg-promise")({});
const dbsettings = { database: "pig_game" };
const db = pgp(dbsettings);
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  // console.log(req);
  const results = await db.query(`SELECT * FROM scores`);
  // console.log(results);

  // res.send({ express: "backend is working" });
  res.send(results);
});

// app.post("/scores", async (req, res) => {
//   let results = await db.query(`SELECT * FROM pig_game`);
//   console.log(results);
//   console.log(req);
// });

// const PORT = process.env.PORT || 3785;
const PORT = 3785;

app.set("port", PORT);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
