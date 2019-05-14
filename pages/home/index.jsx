import React from "react";
import useReducer from "react";
import PokeList from "../../components/pokemon-list";
import "./style.scss";

export default _ => (
  <div>
    <h1>Home Page</h1>
    <PokeList />
  </div>
);
