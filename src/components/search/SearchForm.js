import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../pokemones/Loading";

import { SearchResults } from "./SearchResults";

const initialForm = {
  query: "",
};
export const SearchForm = () => {
  //   const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const { query } = form;

  const handleInputChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setFlag(true);
    if (query === "") {
      setPokemons([]);
      setLoading(false);
      setMessage(false);
      setFlag(false);
    }
  }, [query]);

  const pokeUrl = "https://pokeapi.co/api/v2/pokemon?limit=900";
  //   !POKEMONES EN GENERAL FILTRADOS

  //   !FECTCH  DE POKEMONES  FILTRADOS
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const [flag, setFlag] = useState(false);

  const fetchPokemonData = async (url) => {
    // debugger;
    setLoading(true);
    let res = await fetch(url),
      json = await res.json();

    const filteredPokemon = json.results.filter((el) =>
      el.name.includes(query.toLowerCase())
    );
    if (filteredPokemon.length === 0) {
      setMessage(true);
    } else {
      setMessage(false);
    }
    // console.log(filteredPokemon);
    // setPokemonsFiltered(filteredPokemon);

    filteredPokemon.forEach(async (el) => {
      let res = await fetch(el.url);
      if (!res.ok) {
        console.log("err");
      }
      let json = await res.json();
      //   console.log(json);
      //   console.log(json);
      let pokemon = {
        id: json.id,
        name: json.name,
        avatar: json.sprites.other.home.front_default,
        types: json.types,
      };
      setPokemons((pokemons) => [...pokemons, pokemon]);
    });
  };

  const submitSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${query}`);
    // console.log("buscaste", query);

    const fetchData = async () => {
      await fetchPokemonData(pokeUrl);
      setLoading(false);
    };
    fetchData();
  };
  return (
    <>
      <div className="containerForm">
        <h3>Formulario de busqueda</h3>
        <hr />
        <form onSubmit={submitSearch}>
          <div className="field has-addons form is-normal">
            <div className="control ">
              <input
                className="input "
                type="text"
                name="query"
                placeholder="Buscar Pokemon"
                onChange={handleInputChange}
                value={form.query}
                autoComplete="off"
              />
            </div>
            <div className="control">
              <button className="button is-info">Search</button>
            </div>
          </div>
        </form>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <SearchResults
          query={query}
          pokemons={pokemons}
          message={message}
          flag={flag}
        />
      )}
    </>
  );
};
