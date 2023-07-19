import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PokemonState } from './pokemon.reducer';

const pokemonState = createFeatureSelector<PokemonState>('pokemon');

export const getPokemon = createSelector(pokemonState, state => {
  return state.pokemonList;
});

export const getIsLoading = createSelector(pokemonState, state => {
  return state.isLoading;
});

export const getQuery = createSelector(pokemonState, state => {
  return state.query;
});
