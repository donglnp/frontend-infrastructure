import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BaseComponent } from 'src/app/components/base-component/base.component';

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrls: ['./admin-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminTemplateComponent extends BaseComponent {}
