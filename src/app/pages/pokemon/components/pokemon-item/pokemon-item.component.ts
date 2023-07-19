import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { BaseComponent } from 'src/app/core/components/base-component/base.component';
import { CardPokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonItemComponent extends BaseComponent {
  @Input() item: CardPokemon;
}
