import React, { useState } from "react";
import { getUrlImageById } from "../../helpers/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
export const PokeDetailsEvo = ({ data, types }) => {
  //   console.log(data);
  const [evolution, setEvolution] = useState(BuildChain());
  //
  const navigate = useNavigate();

  const prueba = () => {
    navigate(`/details/venusaur}`);
  };
  //
  //   console.log(data);
  //   console.log(evolution);
  //   console.log(types);
  function RecursiveBuildChain(currGen) {
    const id = currGen.species.url.split("/").slice(-2, -1)[0];
    if (currGen.evolves_to.length === 0) {
      return {
        children: [],
        id,
        name: currGen.species.name,
      };
    }

    const children = currGen.evolves_to.map((child) =>
      RecursiveBuildChain(child)
    );

    return {
      children,
      id,
      name: currGen.species.name,
    };
  }

  function BuildChain() {
    const id = data.chain.species.url.split("/").slice(-2, -1)[0];
    // console.log(id);
    return {
      children:
        data.chain.evolves_to.length === 0
          ? []
          : data.chain.evolves_to.map((e) => RecursiveBuildChain(e)),
      id,
      name: data.chain.species.name,
    };
  }

  //   console.log(evolution);
  return (
    <div className="evo__grid">
      <div className={`evo_div ${types[0].type.name}`}>
        <figure>
          <Link to={`/details/${evolution.name}`}>
            <img
              src={getUrlImageById(evolution.id)}
              alt=""
              className="animation-up-down"
            />
          </Link>
        </figure>
        <p>{evolution.name}</p>
      </div>
      {evolution.children.length > 0 && (
        <>
          <div className="container-arrow arr">
            <FontAwesomeIcon
              className={`text-${types[0].type.name}`}
              icon={faArrowRight}
            />
          </div>

          <div className={`evo_div ${types[0].type.name}`}>
            <figure>
              <Link to={`/details/${evolution.children[0].name}`}>
                <img
                  src={getUrlImageById(evolution.children[0].id)}
                  alt=""
                  className="animation-up-down"
                />
              </Link>
            </figure>

            <p>{evolution.children[0].name}</p>
          </div>
          {evolution.children[0].children.length > 0 && (
            <>
              <div className="container-arrow arr">
                <FontAwesomeIcon
                  className={`text-${types[0].type.name}`}
                  icon={faArrowRight}
                />
              </div>

              <div className={`evo_div ${types[0].type.name}`}>
                <figure>
                  <Link
                    to={`/details/${evolution.children[0].children[0].name}`}
                  >
                    <img
                      src={getUrlImageById(
                        evolution.children[0].children[0].id
                      )}
                      alt=""
                      className="animation-up-down"
                    />
                  </Link>
                </figure>
                <p>{evolution.children[0].children[0].name}</p>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
