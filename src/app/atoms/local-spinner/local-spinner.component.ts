import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { BaseComponent } from 'src/app/components/base-component/base.component';
import { LocalSpinnerService } from 'src/app/services/local-spinner.service';

@Component({
  selector: 'app-local-spinner[componentId]',
  templateUrl: './local-spinner.component.html',
  styleUrls: ['./local-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocalSpinnerComponent extends BaseComponent {
  @Input() componentId!: string;

  public showSpinner = false;

  constructor(private readonly localSpinnerService: LocalSpinnerService) {
    super();
  }

  protected override onInit(): void {
    if (this.componentId) {
      this.subscribe(this.localSpinnerService.registerComponent(this.componentId), (isLoading: boolean) => {
        this.showSpinner = isLoading;
      });
    }
  }
}
