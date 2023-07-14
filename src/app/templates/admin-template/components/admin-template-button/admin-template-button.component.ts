import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BaseComponent } from 'src/app/components/base-component/base.component';
import { EStateType } from 'src/app/enums/state-type.enum';

@Component({
  selector: 'app-admin-template-button',
  templateUrl: './admin-template-button.component.html',
  styleUrls: ['./admin-template-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminTemplateButtonComponent extends BaseComponent {
  public EStateType = EStateType;
}
