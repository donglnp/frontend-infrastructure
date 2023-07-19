import { NgModule, Type } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SearchBoxModule } from 'src/app/molecules/search-box/search-box.module';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonComponent } from './components/pokemon.component';
import { PokemonRoutingModule } from './pokemon-routing.module';

const components: Type<any>[] = [PokemonComponent, PokemonListComponent, PokemonItemComponent];

@NgModule({
  imports: [CommonModule, PokemonRoutingModule, SearchBoxModule],
  declarations: [components],
  exports: [components],
})
export class PokemonModule {}
