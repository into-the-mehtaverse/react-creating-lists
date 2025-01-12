import { moves } from './data';

function PokeMoves() {
    return (
        <div>
            <h1>PokeMoves</h1>
            <ul>
                {moves.map(move => (
                    <li key={move.id}>{move.id}. {move.move}</li>
                ))}
            </ul>
        </div>
    )
}

export default PokeMoves;
