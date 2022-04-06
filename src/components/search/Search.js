import React from "react";
import Footer from "../ui/Footer";
import { SearchForm } from "./SearchForm";

export const Search = () => {
  return (
    <div className="search-container">
      <SearchForm />
      <Footer />
    </div>
  );
};
