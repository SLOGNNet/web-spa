import { Component, ViewChild } from '@angular/core';
import { Load } from '../models';
import { IListDataActions } from '../../actions';
import { ViewMode } from '../../shared/enums';
import { cloneDeep } from 'lodash';
import { ActivatedRoute, Router, Params, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
export abstract class BaseListComponent<T> {
  protected items: T[] = new Array<T>();

  private childRouteSubscription: any;
  private childRoute: any;
  private selected = [];

  constructor(private actions: IListDataActions<T>, protected items$: Observable<Array<T>>,
    protected router: Router, protected route: ActivatedRoute) {
    actions.getAll();
  }

  ngAfterViewInit() {
    this.items$.subscribe((items) => {
      this.items = items;
      this.subscribeToDetailsChildRoute();
    });
  }

  protected onAdd() {
    this.deselectRow();
    this.navigateToDetails(0);
  }

  protected abstract routePath(): string;

  private onSelect(event: any) {
    const item: T = event.selected[0];
    this.navigateToDetails(item['id']);
  }

  private navigateToDetails(id: number) {
    this.router.navigate([this.routePath(), id],  {preserveQueryParams: true});
  }

  private deselectRow() {
    this.selected = [];
  }

  private selectRow(id: number) {
    this.selected = this.items.filter(item => item['id'] === id);
  }


  private subscribeToDetailsChildRoute() {
    // child route subscribtion approach taken from https://github.com/angular/angular/issues/11692
    this.router.events.subscribe(e => {
      const route = this.route.firstChild;
      if (e instanceof NavigationEnd && this.childRoute !== this.route.firstChild) {
        if (this.childRouteSubscription) {
          this.childRouteSubscription.unsubscribe();
        }
        this.childRoute = this.route.firstChild;
        if (this.childRoute) {
          this.childRouteSubscription = this.childRoute
            .params
            .subscribe(this.onDetailRouteChange.bind(this));
        }
        else {
          this.onDetailRouteChange({});
        }
      }
    });
  }

  private onDetailRouteChange(params: any) {
    const id = Number.parseInt(params['id']);
    if (!isNaN(id)) {
      this.selectRow(id);
    } else {
      this.deselectRow();
    }
  }
}
