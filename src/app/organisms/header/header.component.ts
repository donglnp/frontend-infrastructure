import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BaseComponent } from 'src/app/components/base-component/base.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent extends BaseComponent {}
