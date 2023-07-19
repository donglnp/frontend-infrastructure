import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';

import { Store } from '@ngrx/store';
import { BaseComponent } from 'src/app/core/components/base-component/base.component';
import { load, loadPokemonByKey } from 'src/app/shared/store/pokemon/pokemon.actions';
import { getIsLoading, getPokemon, getQuery } from 'src/app/shared/store/pokemon/pokemon.selectors';
import { CardPokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent extends BaseComponent {
  private readonly store = inject(Store<CardPokemon[]>);

  public data$$: Signal<CardPokemon[]> = this.store.selectSignal(getPokemon);
  public isLoading$$: Signal<boolean> = this.store.selectSignal(getIsLoading);
  public query$$: Signal<string> = this.store.selectSignal(getQuery);

  override onInit() {
    this.store.dispatch(load());
  }

  onSearch(query: string): void {
    this.store.dispatch(loadPokemonByKey({ key: query }));
  }
}
