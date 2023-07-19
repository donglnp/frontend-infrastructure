import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { FormControl } from '@angular/forms';
import { BaseComponent } from 'src/app/core/components/base-component/base.component';
import { IInputFormField } from 'src/app/core/interfaces/form-field.interface';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent extends BaseComponent {
  public control = new FormControl('', { nonNullable: true });

  @Input() set query(query: string) {
    this.control.setValue(query);
  }

  @Output() search = new EventEmitter<string>();

  public field: IInputFormField = {
    key: 'search',
    placeholder: 'Enter a search keyword',
  };

  onSearch(): void {
    const query = this.control.value.trim().toLowerCase();
    this.search.emit(query);
  }
}
