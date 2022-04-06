import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "../components/home/Home";
import { Loading } from "../components/pokemones/Loading";
import { PokeDetails } from "../components/pokemones/PokeDetails";
import { Pokemones } from "../components/pokemones/Pokemones";

import { Search } from "../components/search/Search";

import NavbarPoke from "../components/ui/NavbarPoke";
import { NotFound } from "../components/ui/NotFound";

export const AppRouter = () => {
  return (
    <div className="prueba">
      <Router>
        <NavbarPoke />
        <Routes>
          <Route path="/">
            <Route index element={<Pokemones />} />
            <Route path="pokeDex/" element={<Pokemones />} />
            <Route path="Search" element={<Search />} />
            <Route path="details/:pokeName" element={<PokeDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};
