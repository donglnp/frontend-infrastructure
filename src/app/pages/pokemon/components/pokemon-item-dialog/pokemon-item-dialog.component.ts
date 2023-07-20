import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseComponent } from 'src/app/core/components/base-component/base.component';
import { ICardPokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-item-dialog',
  templateUrl: './pokemon-item-dialog.component.html',
  styleUrls: ['./pokemon-item-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonItemDialogComponent extends BaseComponent {
  public readonly data: ICardPokemon = inject(MAT_DIALOG_DATA);
}
