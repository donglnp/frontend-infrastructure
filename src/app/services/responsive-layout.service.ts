import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Subscribable } from '../components/base-component/subscribable';

export enum Layout {
  MOBILE,
  MOBILE_LANDSCAPE,
  TABLET,
  DESKTOP,
  DESKTOP_LANDSCAPE,
}

@Injectable({ providedIn: 'root' })
export class ResponsiveLayoutService extends Subscribable {
  private readonly LAYOUT_BREAKPOINTS_LIST = [
    { layout: Layout.MOBILE, breakpoints: Breakpoints.HandsetPortrait },
    {
      layout: Layout.MOBILE_LANDSCAPE,
      breakpoints: Breakpoints.HandsetLandscape,
    },
    { layout: Layout.TABLET, breakpoints: Breakpoints.Tablet },
    { layout: Layout.DESKTOP, breakpoints: Breakpoints.WebPortrait },
    { layout: Layout.DESKTOP_LANDSCAPE, breakpoints: Breakpoints.WebLandscape },
  ];

  private currentLayout$ = new BehaviorSubject<Layout>(Layout.DESKTOP_LANDSCAPE);

  constructor(private readonly breakpointObserver: BreakpointObserver) {
    super();

    this.initSubscriptions();
  }

  public getLayoutObservable(): Observable<Layout> {
    return this.currentLayout$.asObservable().pipe(distinctUntilChanged());
  }

  public isMobile(): Observable<boolean> {
    return this.currentLayout$.asObservable().pipe(
      map(v => v === Layout.MOBILE || v === Layout.MOBILE_LANDSCAPE),
      distinctUntilChanged()
    );
  }

  public isTablet(): Observable<boolean> {
    return this.currentLayout$.asObservable().pipe(
      map(v => v === Layout.TABLET),
      distinctUntilChanged()
    );
  }

  public isDesktop(): Observable<boolean> {
    return this.currentLayout$.asObservable().pipe(
      map(v => v === Layout.DESKTOP || v === Layout.DESKTOP_LANDSCAPE),
      distinctUntilChanged()
    );
  }

  public isDesktopLandscape(): Observable<boolean> {
    return this.currentLayout$.asObservable().pipe(
      map(v => v === Layout.DESKTOP_LANDSCAPE),
      distinctUntilChanged()
    );
  }

  private initSubscriptions(): void {
    this.LAYOUT_BREAKPOINTS_LIST.forEach(v => {
      const subscription = this.breakpointObserver
        .observe(v.breakpoints)
        .pipe(filter(view => view.matches))
        .subscribe(() => {
          this.currentLayout$.next(v.layout);
        });
      this.addSubscription(subscription);
    });
  }
}
