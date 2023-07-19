import { Action, createReducer, on } from '@ngrx/store';
import { load, loadPokemonByKey, loadPokemonFail, loadPokemonSuccess } from './pokemon.actions';

import { CardPokemon } from 'src/app/pages/pokemon/models/pokemon.model';

export interface PokemonState {
  pokemonList: CardPokemon[];
  isLoading: boolean;
  query: string;
  msg?: string;
}

const initialState: PokemonState = {
  pokemonList: [],
  isLoading: false,
  query: '',
};

const _pokemonReducer = createReducer(
  initialState,
  on(load, state => {
    return {
      ...state,
      isLoading: true,
    };
  }),

  on(loadPokemonSuccess, (state, action) => {
    return {
      ...state,
      pokemonList: [...action.data],
      isLoading: false,
    };
  }),
  on(loadPokemonFail, (state, action) => {
    return {
      ...state,
      msg: action.error,
      isLoading: false,
    };
  }),

  on(loadPokemonByKey, (state, action) => {
    return {
      ...state,
      pokemonList: [],
      query: action.key,
      isLoading: true,
    };
  })
);

export function pokemonReducer(state: PokemonState = initialState, action: Action) {
  return _pokemonReducer(state, action);
}
