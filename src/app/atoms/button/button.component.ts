import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { EStateType } from 'src/app/core/enums/state-type.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() type = EStateType.PRIMARY;
  @Input() disabled = false;

  @Output() clickEmitter = new EventEmitter<MouseEvent>();

  public getType(): string {
    return this.type;
  }

  public onClick($event: MouseEvent): void {
    this.clickEmitter.emit($event);
  }
}
