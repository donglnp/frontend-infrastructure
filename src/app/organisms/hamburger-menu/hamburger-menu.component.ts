import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BaseComponent } from 'src/app/components/base-component/base.component';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HamburgerMenuComponent extends BaseComponent {}
