import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BaseComponent } from './core/components/base-component/base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent extends BaseComponent {}
