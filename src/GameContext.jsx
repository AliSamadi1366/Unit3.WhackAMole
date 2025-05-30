import { createContext, useState, useContext } from "react";
const NUM_HOLES = 9;

const GameContext = createContext();

export function GameProvider({ children }) {
  const [field, setField] = useState(makeField([]));
  const [playing, setPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [highScores, setHighScores] = useState([]);

  const Whack = () => {
    setField(makeField(field));
    setScore(score + 1);
  };

  const Start = () => {
    setScore(0);
    setField(makeField([]));
    setPlaying(true);
  };

  const Stop = () => {
    setPlaying(false);
    const newScores = [...highScores, score].sort((a, z) => z - a);
    setHighScores(newScores.slice(0, 5));
  };

  const value = {
    field,
    playing,
    score,
    highScores,
    Start,
    Stop,
    Whack,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw Error("Game context must be used within GameProvider.");
  return context;
}
function makeField(field = []) {
  const newField = Array(NUM_HOLES).fill(false);
  let mole = Math.floor(Math.random() * NUM_HOLES);

  while (field[mole]) {
    mole = Math.floor(Math.random() * NUM_HOLES);
  }
  newField[mole] = true;
  return newField;
}
