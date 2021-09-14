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
  const results = await db.query(
    `SELECT * FROM scores ORDER BY percentage DESC`
  );
  res.send(results);
});

app.post("/scores_db", async (req, res) => {
  const gameEndInfo = req.body;
  let winner,
    loser,
    winnerScore,
    loserScore,
    gameType,
    gameEndScore,
    date,
    percentageWin,
    percentageWinNeg;
  winner = gameEndInfo.winner.name;
  winnerScore = gameEndInfo.winner.score;
  loser = gameEndInfo.loser.name;
  loserScore = gameEndInfo.loser.score;
  gameType = gameEndInfo.gameType;
  gameEndScore = gameEndInfo.gameEndTotal;
  percentageWin = (winnerScore - loserScore) / winnerScore;
  percentageWinNeg = (-1 * (winnerScore - loserScore)) / winnerScore;
  date = new Date().toISOString().slice(0, 19).replace("T", " ");
  console.log(percentageWin);
  console.log(percentageWinNeg);
  db.none(
    `INSERT INTO scores (username, did_win, created_on, game_type, own_score, opponent_score, game_goal, percentage)
VALUES ('${winner}',
  'true',
  '${date}',
  '${gameType}',
  ${winnerScore},
  ${loserScore},
  ${gameEndScore},
  ${percentageWin})`
  );
  db.none(
    `INSERT INTO scores (username, did_win, created_on, game_type, own_score, opponent_score, game_goal, percentage)
VALUES ('${loser}',
  'false',
  '${date}',
  '${gameType}',
  ${loserScore},
  ${winnerScore},
  ${gameEndScore},
  ${percentageWinNeg})`
  );
});

// const PORT = process.env.PORT || 3785;
const PORT = 3785;

app.set("port", PORT);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
