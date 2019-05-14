import * as Pokedex from "pokeapi-js-wrapper";

import {
  GET_POKEMONS,
  ON_GET_POKEMONS_SUCCESS,
  ON_GET_POKEMONS_ERRORS
} from "../constants";

export const getPokemons = ({ limit, offset }) => {
  return {
    type: GET_POKEMONS,
    limit,
    offset,
    state: "loading"
  };
};

export const onGetPokemonsSuccess = ({ count, next, previous, results }) => {
  return {
    type: ON_GET_POKEMONS_SUCCESS,
    count,
    next,
    previous,
    results,
    state: "loaded"
  };
};

export const onGetPokemonsErrors = ({ errors }) => {
  return {
    type: ON_GET_POKEMONS_ERRORS,
    errors,
    state: "error"
  };
};

const options = {
  protocol: "https",
  hostName: "pokeapi.co",
  versionPath: "/api/v2/",
  cache: true,
  timeout: 5 * 1000 // 5s
};
const pokeApi = new Pokedex.Pokedex(options);

export const fetchPokemons = (limit, offset) => {
  return dispatch => {
    dispatch(getPokemons({ limit, offset }));

    return pokeApi.getPokemonsList({ limit, offset }).then(pokemons => {
      const urls = pokemons.results.map(p => p.url);
      pokeApi.resource(urls).then(pokemon => {
        dispatch(
          onGetPokemonsSuccess({
            count: pokemons.count,
            next: pokemons.next,
            previous: pokemons.previous,
            results: pokemon
          })
        );
      });
    });
  };
};
