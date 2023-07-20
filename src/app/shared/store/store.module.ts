import { isDevMode } from '@angular/core';
import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { entityConfig } from './entity-metadata';
import { AppState } from './global/state';
import { PokemonEffects } from './pokemon/pokemon.effects';

export const STORE_MODULE = [
  StoreModule.forRoot(AppState),
  StoreDevtoolsModule.instrument({ maxAge: false, logOnly: !isDevMode() }),
  EffectsModule.forRoot([PokemonEffects]),
  EntityDataModule.forRoot(entityConfig),
];
