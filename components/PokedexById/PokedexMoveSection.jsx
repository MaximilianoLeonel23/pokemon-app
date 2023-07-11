import { capitalize } from "@/helpers/capitalize";

const PokedexMoveSection = ({ pokemon }) => {
  const eggMoves = pokemon.moves.filter(
    (move) => move.version_group_details[0].move_learn_method.name === "egg"
  );
  const machineMoves = pokemon.moves.filter(
    (move) => move.version_group_details[0].move_learn_method.name === "machine"
  );
  const lvlUpMoves = pokemon.moves.filter(
    (move) =>
      move.version_group_details[0].move_learn_method.name === "level-up"
  );

  return (
    <section className="hidden container text-sm text-zinc-700">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h4 className="font-medium">Egg moves</h4>
          <div className="grid grid-cols-2">
            {eggMoves.map((move, i) => {
              return <p key={i}>{capitalize(move.move.name)}</p>;
            })}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-medium">Level-up moves</h4>
          <div className="grid grid-cols-2">
            {lvlUpMoves.map((move, i) => {
              return <p key={i}>{capitalize(move.move.name)}</p>;
            })}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-medium">Machine moves</h4>
          <div className="grid grid-cols-2">
            {machineMoves.map((move, i) => {
              return <p key={i}>{capitalize(move.move.name)}</p>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PokedexMoveSection;
