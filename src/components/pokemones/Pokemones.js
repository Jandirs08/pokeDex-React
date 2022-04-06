import React, { useEffect, useState } from "react";
import { PokeCard } from "./PokeCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loading } from "./Loading";
import Footer from "../ui/Footer";
// import nextId from "react-id-generator";

const fetchPokemonData = async (len) => {
  const promiseArr = [];
  for (let i = len; i < len + 20; i++) {
    promiseArr.push(
      (await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)).json()
    );
  }
  const resolvedData = await Promise.all(promiseArr);
  //   console.log(resolvedData);
  return resolvedData.map((item) => {
    return {
      id: item.id,
      name: item.name,
      avatar: item.sprites.other.home.front_default,
      //   avatar: item.sprites.other.dream_world.front_default,
      //   avatar: item.sprites.front_default,
      types: item.types,
    };
  });
};
export const Pokemones = () => {
  //   let htmlId = nextId();
  const [pokemons, setPokemons] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [buttonUp, setButtonUp] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setMessage("Loading...ESPERA");
      const resp = await fetchPokemonData(1);
      setPokemons(resp);
      setLoading(false);
    };
    fetchData();
  }, []);
  const fectchScroll = () => {
    fetchPokemonData(pokemons.length).then((newPokemons) => {
      setPokemons([...pokemons, ...newPokemons]);
    });
  };

  const up = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const checkScrollTop = () => {
    if (!buttonUp && window.pageYOffset > 400) {
      setButtonUp(true);
    } else if (buttonUp && window.pageYOffset <= 400) {
      setButtonUp(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);

  return (
    <>
      {/* <div className="card__grid"> */}
      <div>
        {pokemons.length === 0 ? (
          <Loading />
        ) : (
          <InfiniteScroll
            // style={{ overflow: "none" }}
            className="card__grid"
            dataLength={pokemons.length} //This is important field to render the next data
            next={fectchScroll}
            // hasMore={pokemons.length < 1000}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <i
              className="fa-solid fa-up-long button-up"
              onClick={up}
              style={{ display: buttonUp ? "flex" : "none" }}
            ></i>
            {pokemons.map((el, index) => (
              <>
                <PokeCard key={el.id} el={el} />

                {/* <Footer /> */}
              </>
            ))}

            <Footer />
          </InfiniteScroll>
        )}
      </div>
    </>
  );
};
