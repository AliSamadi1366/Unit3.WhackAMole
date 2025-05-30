import { useGame } from "./GameContext";
export default function Scoreboard() {
  const { score, stop } = useGame();
  return (
    <div className="scoreboard">
      <p>Score: {score}</p>
      <button onClick={stop}>Restart</button>
    </div>
  );
}
