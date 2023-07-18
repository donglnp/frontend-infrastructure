import { isDevMode } from '@angular/core';
import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { entityConfig } from './entity-metadata';

export const STORE_MODULE = [
  StoreModule.forRoot({}, {}),
  StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  EffectsModule.forRoot([]),
  StoreRouterConnectingModule.forRoot(),
  EntityDataModule.forRoot(entityConfig),
];
