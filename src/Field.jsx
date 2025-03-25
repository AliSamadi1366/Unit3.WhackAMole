import { useGame } from "./GameContext";
export default function Field() {
  const { field } = useGame();
  return (
    <ul>
      {field.map((hasMole, i) => (
        <Hole key={i} hasMole={hasMole} />
      ))}
    </ul>
  );
}
function Hole({ hasMole }) {
  const { Whack } = useGame();
  if (hasMole) return <li onClick={Whack} className="hole mole"></li>;
  return <li className="hole"></li>;
}
