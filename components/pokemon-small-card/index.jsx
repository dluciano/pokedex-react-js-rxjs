import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./style.scss";

const PokemonSmallCard = ({ pokemon }) => (
  <article className="pokecard">
    <div>
      <Link to={`/pokemon/${pokemon.id}`}>
        <img
          src={pokemon.image.src}
          alt={pokemon.image.title}
          title={pokemon.image.title}
        />
      </Link>
      <div>
        <span>C</span>
        <span>L</span>
        <span>T</span>
      </div>
      <div>#{pokemon.id}</div>
    </div>
    <header>{pokemon.name}</header>
    <main>
      {pokemon.types.map(type => (
        <div key={type}>{type}</div>
      ))}
    </main>
  </article>
);

PokemonSmallCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default PokemonSmallCard;
