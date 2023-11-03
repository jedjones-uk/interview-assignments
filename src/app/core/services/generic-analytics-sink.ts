import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericAnalyticsSink {
  thirdPartyLibrary: any;

  constructor() {
    if (typeof console !== 'undefined') {
      this.thirdPartyLibrary = console;
    }
  }

  public sendEvent = (
    eventName: string,
    eventCategory: string,
    eventLabel: string = null,
    eventValue: number = null
  ) => {
    if (!this.thirdPartyLibrary) {
      return;
    }
    this.thirdPartyLibrary.log({
      'event': eventName,
      'data': {
        event_category: eventCategory,
        event_label: eventLabel,
        value: eventValue
      }
    });
  };

  public sendPageView(url: string) {
    if (!this.thirdPartyLibrary) {
      return;
    }
    this.thirdPartyLibrary.log({ page_path: url });
  }
}
