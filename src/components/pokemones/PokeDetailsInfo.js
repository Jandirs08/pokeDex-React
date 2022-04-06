import React from "react";
import { DetermineGenderRate } from "../../functions/utils";

export const PokeDetailsInfo = ({ pokemons }) => {
  const { abilities, gender, habitat, height, captureRate, weight } =
    pokemons[0];
  //   console.log(pokemons);
  //   console.log(name);
  return (
    <div className="info__flex">
      <div>
        <h4>Height</h4>
        <hr />
        <p>{Math.round(height * 10) / 100} m</p>
      </div>
      <div>
        <h4>Capture rate</h4>
        <hr />
        <p>{Math.round(captureRate * 100) / 100}%</p>
      </div>
      <div>
        <h4>Weight</h4>
        <hr />
        <p>{Math.round(weight * 10) / 100} kg</p>
      </div>
      <div>
        <h4>Abilities</h4>
        <hr />
        <p>{abilities}</p>
      </div>
      <div>
        <h4>Gender</h4>
        <hr />
        <p>{gender != null ? DetermineGenderRate(gender) : "-"}</p>
      </div>
      <div>
        <h4>Habitat</h4>
        <hr />
        <p>{abilities != null ? abilities : "-"}</p>
      </div>
    </div>
  );
};
