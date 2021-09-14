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
  const gameEndInfo = req.body;
  let winner, loser, winnerScore, loserScore, gameType, gameEndScore, date;
  winner = gameEndInfo.winner.name;
  winnerScore = gameEndInfo.winner.score;
  loser = gameEndInfo.loser.name;
  loserScore = gameEndInfo.loser.score;
  gameType = gameEndInfo.gameType;
  gameEndScore = gameEndInfo.gameEndTotal;
  date = new Date().toISOString().slice(0, 19).replace("T", " ");
  db.none(
    `INSERT INTO scores (username, did_win, own_score, opponent_score, created_on, game_type, game_goal)
VALUES ('${winner}',
  'true',
  '${winnerScore}',
  '${loserScore}',
  '${date}',
  '${gameType}',
  '${gameEndScore}')`
  );
  db.none(
    `INSERT INTO scores (username, did_win, own_score, opponent_score, created_on, game_type, game_goal)
VALUES ('${loser}',
  'false',
  '${loserScore}',
  '${winnerScore}',
  '${date}',
  '${gameType}',
  '${gameEndScore}')`
  );
});

// const PORT = process.env.PORT || 3785;
const PORT = 3785;

app.set("port", PORT);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
