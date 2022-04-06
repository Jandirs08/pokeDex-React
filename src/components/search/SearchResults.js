import React, { useEffect, useState } from "react";
import { MessageNotFound } from "../pokemones/MessageNotFound";
import { PokeCard } from "../pokemones/PokeCard";

export const SearchResults = ({ query, pokemons, message, flag }) => {
  console.log(pokemons);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const resp = await fetchPokemonData(pokeUrl);
  //       console.log(resp);
  //       // setPokemons(resp);
  //     };
  //     fetchData();
  //     // fetchPokemonData(pokeUrl);
  //     // console.log(pokemons);
  //     //   }, [query]);
  //   }, [query]);

  return (
    <>
      {flag ? (
        <>
          <div className="div-search">
            <p>
              Pokemon a buscar : <span className="query">{query}</span>
            </p>
          </div>

          {message ? (
            <MessageNotFound query={query} />
          ) : (
            <div className="card__grid">
              {pokemons.map((el) => (
                <PokeCard key={el.id} el={el} />
              ))}
            </div>
          )}
        </>
      ) : (
        // pokemons.map((el) => <PokeCard key={el.id} el={el} />)
        <div>
          <p>
            <span className="query">Ingresa un Pokemon a buscar</span>
          </p>
        </div>
      )}
    </>
  );
};
