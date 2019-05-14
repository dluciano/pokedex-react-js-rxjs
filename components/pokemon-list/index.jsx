import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPokemons } from "../../actions";
import PokemonSmallCard from "../pokemon-small-card";
import "./style.scss";

const PokemonList = function({ pokemons, state, onload }) {
  useEffect(() => {
    if (state !== "notLoaded") {
      return;
    }
    onload(2, 0);
  }, [onload, state]);

  return (
    <div>
      {pokemons.map(p => (
        <PokemonSmallCard key={p.id} pokemon={p} />
      ))}
    </div>
  );
};

export default connect(
  state => ({
    pokemons: state.getIn(["pokemon"]).results,
    state: state.getIn(["pokemon"]).state,
    errors: state.getIn(["pokemon"]).errors
  }),
  {
    onload: fetchPokemons
  }
)(PokemonList);
