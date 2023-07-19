import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { LOAD_POKEMON, LOAD_POKEMON_BY_KEY, loadPokemonFail, loadPokemonSuccess } from './pokemon.actions';

import { PokemonService } from 'src/app/pages/pokemon/services/pokemon.service';

@Injectable()
export class PokemonEffects {
  private readonly pokemonService = inject(PokemonService);
  private readonly actions$ = inject(Actions);

  _loadPokemon = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_POKEMON),
      exhaustMap(action => {
        return this.pokemonService.getDataFirst().pipe(
          map(res => {
            return loadPokemonSuccess({ data: res });
          }),
          catchError(_error => of(loadPokemonFail({ error: _error })))
        );
      })
    )
  );

  _searchPokemon = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_POKEMON_BY_KEY),
      exhaustMap(action => {
        const obs$ = action?.key ? this.pokemonService.search(action.key) : this.pokemonService.getDataFirst();
        return obs$.pipe(
          map(res => {
            return loadPokemonSuccess({ data: res });
          }),
          catchError(_error => of(loadPokemonFail({ error: _error })))
        );
      })
    )
  );
}
