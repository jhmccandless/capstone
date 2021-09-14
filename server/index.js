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
  const results = await db.query(`SELECT * FROM scores`);
  res.send(results);
});

app.post("/scores_db", async (req, res) => {
  // let newScoreInfo = req.body;
  console.log("inside post");
  console.log(req.body);
});

// const PORT = process.env.PORT || 3785;
const PORT = 3785;

app.set("port", PORT);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
