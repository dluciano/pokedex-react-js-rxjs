import {
  GET_POKEMONS,
  ON_GET_POKEMONS_SUCCESS,
  ON_GET_POKEMONS_ERRORS
} from "../constants";

export default (
  state = {
    count: 0,
    next: "",
    previous: "",
    results: [],
    state: "notLoaded",
    errors: []
  },
  action
) => {
  switch (action.type) {
    case GET_POKEMONS:
      state.state = action.state;
      state.limit = action.limit;
      state.offset = action.offset;
      return { ...state };
    case ON_GET_POKEMONS_SUCCESS:
      state.state = action.state;
      state.count = action.count;
      state.next = action.next;
      state.previous = action.previous;
      state.results = action.results.map(pokemon => {
        return {
          id: "" + pokemon.id,
          image: {
            src: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${
              pokemon.id
            }.png`,
            alt: "bulbuasue",
            title: "bulbasaur"
          },
          name: pokemon.name,
          types: pokemon.types.map(t => t.type.name)
        };
      });
      return { ...state };
    case ON_GET_POKEMONS_ERRORS:
      state.state = action.state;
      return { ...state, errors: action.errors };
    default:
      return { ...state };
  }
};
