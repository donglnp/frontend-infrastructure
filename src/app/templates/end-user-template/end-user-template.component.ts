import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BaseComponent } from 'src/app/components/base-component/base.component';

@Component({
  selector: 'app-end-user-template',
  templateUrl: './end-user-template.component.html',
  styleUrls: ['./end-user-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EndUserTemplateComponent extends BaseComponent {}
