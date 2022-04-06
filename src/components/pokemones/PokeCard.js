import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../ui/Footer";

export const PokeCard = ({ el }) => {
  //   console.log(el);
  let navigate = useNavigate();

  const { id, avatar, name, types } = el;
  //   const LinkDetails = () => {
  //     navigate(`details/${name}`);
  //   };
  return (
    <>
      <div className="card__pokemon">
        <div className="evo_div">
          {/* <Link to={`/details/${name}`}>Mas Información</Link> */}
          <figure className="container-card-img ">
            <Link to={`/details/${name}`}>
              <img
                src={avatar}
                alt={name}
                className="animation-up-down"
                //   onClick={() => navigate(`details/${name}`)}
              />
            </Link>
          </figure>
        </div>
        <div className="card__name">
          <span>{name}</span>
        </div>
        <Link to={`/details/${name}`}>
          <button className="button is-info btn-information">
            <span> Información</span>
          </button>
        </Link>

        <div className="wrap__detailsTypes">
          {types.map((type, index) => (
            <>
              <div
                key={"type " + index}
                className={`details__type ${type.type.name}`}
              >
                <p>{type.type.name}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
