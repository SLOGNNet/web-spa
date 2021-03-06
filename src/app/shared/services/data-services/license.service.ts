import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import MockData from './mock-data';

@Injectable()
export class LicenseService {
  getAllRestrictions(): Observable<any> {
    return Observable.create((observer: any) => {
      observer.next(MockData.restrictions);
    });
  }

  getAllEndorsements(): Observable<any> {
    return Observable.create((observer: any) => {
      observer.next(MockData.endorsements);
    });
  }
}
