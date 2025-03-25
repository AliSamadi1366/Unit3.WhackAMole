import { useGame } from "./GameContext";
import Welcome from "./Welcome";
import Scoreboard from "./Scoreboard";
import Field from "./Field";

export default function App() {
  const { playing } = useGame();
  return (
    <>
      <p>Whack a Mole!</p>
      {playing ? (
        <>
          <Field />
          <Scoreboard />
        </>
      ) : (
        <Welcome />
      )}
    </>
  );
}
