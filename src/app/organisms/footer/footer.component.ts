import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BaseComponent } from 'src/app/components/base-component/base.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent extends BaseComponent {}
