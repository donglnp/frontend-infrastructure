import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';

import { MatDialogConfig } from '@angular/material/dialog';
import { BaseComponent } from 'src/app/core/components/base-component/base.component';
import { DialogService } from 'src/app/core/services/dialog.service';
import { ICardPokemon } from '../../models/pokemon.model';
import { PokemonItemDialogComponent } from '../pokemon-item-dialog/pokemon-item-dialog.component';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonItemComponent extends BaseComponent {
  @Input() item: ICardPokemon;

  private readonly dialogService = inject(DialogService);

  public openDetail() {
    const dialogConfig: MatDialogConfig = { data: this.item };
    this.dialogService.open(PokemonItemDialogComponent, dialogConfig);
  }
}
