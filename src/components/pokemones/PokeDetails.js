import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokeDetailsEvo } from "./PokeDetailsEvo";
import { PokeDetailsImage } from "./PokeDetailsImage";
import { PokeDetailsInfo } from "./PokeDetailsInfo";
import { PokeDetailsStats } from "./PokeDetailsStats";

import { useLocation } from "react-router-dom";
import api from "../../services/api";
import { Loading } from "./Loading";
import Footer from "../ui/Footer";

export const PokeDetails = () => {
  const { pokeName } = useParams();
  const [pokemons, setPokemons] = useState([]);

  const location = useLocation();

  let pokeUrlSpecies = `https://pokeapi.co/api/v2/pokemon-species/${pokeName}`;
  let pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
  useEffect(() => {
    window.scrollTo(0, 0);
    LoadSpecies(pokeUrl, pokeUrlSpecies);
  }, [location.pathname]);

  async function LoadSpecies(url, pokeUrlSpecies) {
    let res = await fetch(url),
      json = await res.json();

    // PETICION A LAS ESPECIES DE LOS POKEMONES
    let resSpecies = await fetch(pokeUrlSpecies),
      jsonSpecies = await resSpecies.json();

    // PETICION A LAS EVOLUCIONES DE LOS POKEMONES
    let pokeUrlEvo = jsonSpecies.evolution_chain.url;
    let resEvo = await fetch(pokeUrlEvo),
      jsonEvo = await resEvo.json();

    let abilities = "";
    json.abilities.map((item, index) => {
      abilities += `${item.ability.name}${
        json.abilities.length == index + 1 ? "" : ", "
      }`;
    });
    // JUNTO TODAS LAS PETICIONES DE LOS POKEMONES EN UN SOLO OBJETO
    let pokemon = {
      id: json.id,
      name: json.name,
      avatar: json.sprites.other.home.front_default,
      types: json.types,
      height: json.height,
      weight: json.weight,
      abilities,
      habitat: jsonSpecies.habitat?.name,
      gender: jsonSpecies.gender_rate,
      captureRate: jsonSpecies.capture_rate,
      stats: json.stats,
      data: jsonEvo,
    };
    // EL OBJETO POKEMON LO AGREGO AL STATE POKEMONS
    // setPokemons((pokemons) => [...pokemons, pokemon]);
    setPokemons((pokemons) => [pokemon]);
  }
  console.log(pokemons);
  return (
    <>
      <div className="details">
        {pokemons.length === 0 ? (
          <Loading />
        ) : (
          <>
            <PokeDetailsImage
              avatar={pokemons[0].avatar}
              name={pokemons[0].name}
              types={pokemons[0].types}
            />
            <PokeDetailsInfo pokemons={pokemons} />
            <PokeDetailsStats
              stats={pokemons[0].stats}
              types={pokemons[0].types}
            />
            <PokeDetailsEvo data={pokemons[0].data} types={pokemons[0].types} />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};
