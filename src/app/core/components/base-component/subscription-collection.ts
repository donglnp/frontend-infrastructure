import { Observable, Subscription } from 'rxjs';

export class SubscriptionCollection {
  private subscriptionRefs: Subscription[] = [];

  public clear(): void {
    this.subscriptionRefs.forEach(s => !s.closed && s.unsubscribe());
  }

  public add<T>(observable: Observable<T>, handler: (data: T) => void): void {
    const subscription: Subscription = observable.subscribe(data => {
      handler(data);
    });
    this.subscriptionRefs.push(subscription);
  }

  public addItems(subscriptions: Subscription[]): void {
    this.subscriptionRefs.push(...subscriptions);
  }

  public removeItem(subscriptions: Subscription): void {
    const index = this.subscriptionRefs.findIndex(s => s === subscriptions);
    if (index >= 0) {
      this.subscriptionRefs.splice(index, 1);
    }
  }
}
