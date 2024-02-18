import {} from "react";
import { Sidebar } from "../../shared/index";
import HeaderSearch from "./seearchHeader";
import SearchMain from "./searchMain";

// import styles from "./home.module.css";

const Search = () => {
  return (
    <div className="flex items-start noselect animate-appear">
      <Sidebar page="search" />

      <div className="flex-1">
        <HeaderSearch />
        <SearchMain />
      </div>
    </div>
  );
};

export default Search;
