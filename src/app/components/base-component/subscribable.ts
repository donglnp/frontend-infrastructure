import { Directive, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

import { SubscriptionCollection } from './subscription-collection';
import { take } from 'rxjs/operators';

@Directive()
export abstract class Subscribable implements OnDestroy {
  protected onDestroySubject: Subject<void> = new Subject();
  protected subscriptionCollection = new SubscriptionCollection();

  public ngOnDestroy(): void {
    // Subject
    // using for takeUntil
    this.onDestroySubject.next();
    this.onDestroySubject.complete();

    // Subscription
    this.subscriptionCollection.clear();
    this.onUnsubscribe();
  }

  protected subscribe<T>(observable: Observable<T>, handler: (data: T) => void): void {
    this.subscriptionCollection.add(observable, handler);
  }

  protected subscribeOne<T>(observable: Observable<T>, handler: (data: T) => void): void {
    observable.pipe(take(1)).subscribe(data => handler(data));
  }

  protected addSubscription(...subscriptions: Array<Subscription>): void {
    this.subscriptionCollection.addItems(subscriptions);

    // Add finalize callback here to remove subscription from the subscription collection
    // at the moment subscription has changed its status to COMPLETED
    subscriptions.forEach(sub => {
      const subscriptionRef = sub;
      sub.add(() => {
        this.subscriptionCollection.removeItem(subscriptionRef);
      });
    });
  }

  protected onUnsubscribe(): void {
    // virtual method
  }
}
