import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

import { ComponentType } from '@angular/cdk/portal';
import { take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DialogService {
  constructor(private dialog: MatDialog) {}

  public open<T, D = any, R = any>(
    componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
    config?: MatDialogConfig<D>,
    afterClosed?: () => any
  ): MatDialogRef<T, R> {
    const dialogConfig: MatDialogConfig = {
      backdropClass: 'backdrop--dialog__cdk',
      ...config,
    };
    const ref = this.dialog.open(componentOrTemplateRef, dialogConfig);
    ref
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        if (!afterClosed) {
          return;
        }
        afterClosed();
      });
    return ref;
  }

  public closeAll(): void {
    this.dialog.closeAll();
  }
}
