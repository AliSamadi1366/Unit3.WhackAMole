import { useGame } from "./GameContext";
export default function Scoreboard() {
  const { score, Stop } = useGame();
  return (
    <div className="scoreboard">
      <p>Score: {score}</p>
      <button onClick={Stop}>Restart</button>
    </div>
  );
}
