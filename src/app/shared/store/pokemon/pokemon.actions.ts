import { createAction, props } from '@ngrx/store';

import { CardPokemon } from 'src/app/pages/pokemon/models/pokemon.model';

export const LOAD_POKEMON = '[pokemon] load pokemon';
export const LOAD_POKEMON_SUCCESS = '[pokemon] load pokemon success';
export const LOAD_POKEMON_FAIL = '[pokemon] load pokemon fail';
export const LOAD_POKEMON_BY_KEY = '[pokemon] load pokemon by key';

export const load = createAction(LOAD_POKEMON);
export const loadPokemonSuccess = createAction(LOAD_POKEMON_SUCCESS, props<{ data: CardPokemon[] }>());
export const loadPokemonFail = createAction(LOAD_POKEMON_FAIL, props<{ error: string }>());
export const loadPokemonByKey = createAction(LOAD_POKEMON_BY_KEY, props<{ key: string }>());
