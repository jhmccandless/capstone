const express = require("express");
const cors = require("cors");

// const pgp = require("pg-promise")({});
// const dbsettings = process.env.DATABASE_URL || { database: "pig_game" };
const app = express();

const PORT = 3785;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ express: "backend is working" });
});

app.post("/scores", (req, res) => {
  console.log(req.body);
});

// app.set("port", PORT);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
