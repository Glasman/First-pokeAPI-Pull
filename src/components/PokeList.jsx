import { useEffect, useState } from "react";
import PokeRow from "./PokeRow";

export default function PokeList() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const pokeData = await response.json();
      setPokemon(pokeData.results);
      
      
    }
    fetchPokemon();
    console.log(pokemon);
    
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>PokeMon</th>
        </tr>
      </thead>
      <tbody>{
        
        pokemon.map((pokedude) => {
          return <PokeRow key = {pokedude.name} pokedude={pokedude} />
        })
           
         
        }</tbody>
    </table>
  );
}
