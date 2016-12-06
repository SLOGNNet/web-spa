import { Injectable, Inject } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Customer } from './models';
import { List } from 'immutable';
import { Observable } from 'rxjs/Observable';
import { delay } from 'rxjs/Delay';

@Injectable()
export class CustomerService {

  private _customersData: Array<Customer> = [
    { id: 1, name: 'ARP Logistic INC', address: { streetAddress: 'New-York' }, status: 1, type: 1, taxId: '1', mc: '423466' },
    { id: 2, name: 'DNS Logistic Corp', address: { streetAddress: 'Chicago' }, status: 1, type: 1, taxId: '1', mc: '889065' },
    { id: 3, name: 'Purum Company', address: { streetAddress: 'California' }, status: 1, type: 1, taxId: '1', mc: '254785' },
    { id: 4, name: 'Approximately', address: { streetAddress: 'Kiev' }, status: 1, type: 1, taxId: '1', mc: '456887' },
    { id: 5, name: 'Satisfying company', address: { streetAddress: 'Warsaw' }, status: 1, type: 1, taxId: '1', mc: '123452' },
    { id: 6, name: 'Dido & CO', address: { streetAddress: 'Paris' }, status: 1, type: 1, taxId: '1', mc: '342903' },
    { id: 7, name: 'Tydysh-tydysh', address: { streetAddress: 'Berlin' }, status: 1, type: 1, taxId: '1', mc: '678904' },
    { id: 8, name: 'Umpa Lumpa INC', address: { streetAddress: 'Madrid' }, status: 1, type: 1, taxId: '1', mc: '341112' },
    { id: 9, name: 'Public Enemy', address: { streetAddress: 'Rome' }, status: 1, type: 1, taxId: '1', mc: '789009' },
    { id: 10, name: 'Keep calm man)', address: { streetAddress: 'Cape-town' }, status: 1, type: 1, taxId: '1', mc: '566003' }];

  constructor(private http: Http) {
    this.http = http;
  }

  get(id: number): Observable<Customer> {
    return Observable.of(
      this._customersData.find((customer) => id === customer.id)
    );
  }

  search(query: string): Observable<Customer[]> {
    let queryRegex = new RegExp(query, 'ig');
    return Observable.of(
      this._customersData.filter((customer: Customer) => {
        return queryRegex.test(customer.name);
      }));
  }
}
