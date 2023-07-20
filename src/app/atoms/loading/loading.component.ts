import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BaseComponent } from 'src/app/core/components/base-component/base.component';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent extends BaseComponent {}
