import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/components/base-component/base.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent extends BaseComponent {
  public atoms = ['forms', 'input', 'button'];

  constructor(private router: Router) {
    super();
  }

  public onClick(item: string): void {
    this.router.navigate([`/${item}`]);
  }
}
