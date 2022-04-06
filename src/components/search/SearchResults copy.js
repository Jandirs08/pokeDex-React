import React, { useEffect, useState } from "react";
import { PokeCard } from "../pokemones/PokeCard";

export const SearchResults = ({ query }) => {
  const pokeUrl = "https://pokeapi.co/api/v2/pokemon?limit=900";
  //   !POKEMONES EN GENERAL FILTRADOS
  const [pokemonsFiltered, setPokemonsFiltered] = useState([]);
  //   !FECTCH  DE POKEMONES  FILTRADOS
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemonData = async (url) => {
    let res = await fetch(url),
      json = await res.json();

    if (query !== "") {
      const filteredPokemon = await json.results.filter((el) =>
        el.name.includes(query.toLowerCase())
      );
      setPokemonsFiltered(filteredPokemon);
    }

    console.log(pokemonsFiltered);

    pokemonsFiltered.forEach(async (el) => {
      let res = await fetch(el.url),
        json = await res.json();
      console.log("HOLA");
      let pokemon = {
        id: json.id,
        name: json.name,
        avatar: json.sprites.front_default,
        types: json.types,
      };
      console.log("HOLA2222222");
      await setPokemons((pokemons) => [...pokemons, pokemon]);
    });
    console.log("BYE");
  };

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchPokemonData(pokeUrl);
      console.log(resp);
      // setPokemons(resp);
    };
    fetchData();
    // fetchPokemonData(pokeUrl);
    // console.log(pokemons);
    //   }, [query]);
  }, [query]);

  return (
    <>
      {query ? (
        <>
          <div>
            <p>
              Buscaste : <span className="query">{query}</span>
            </p>
          </div>
          {pokemons.map((el) => (
            <PokeCard key={el.id} el={el} />
          ))}
        </>
      ) : (
        // pokemons.map((el) => <PokeCard key={el.id} el={el} />)
        <div>
          <p>
            <span className="query">Debes buscar algo MASCOTAA!!</span>
          </p>
        </div>
      )}
    </>
  );
};
