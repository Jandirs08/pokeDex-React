import React from "react";
import { getUrlImageById } from "../../helpers/utils";

export const PokeDetailsImage = ({ avatar, name, types }) => {
  //   console.log(types);

  return (
    <div className="detailsImage">
      <h2>{name}</h2>
      {/* <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png"
        alt="Pokemon Imagen"
      /> */}
      <div className="details__img">
        <img src={avatar} alt="Pokemon Imagen" className="animation-up-down" />
      </div>
      <div className="wrap__detailsTypes">
        {types.map((type) => (
          <div key={type.slot} className={`details__type ${type.type.name}`}>
            <p>{type.type.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
