import { Component, OnInit, Input, Output, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Commodity } from '../../../models';
import { BaseListForm } from '../../base-list-form';

@Component(Object.assign({
  selector: 'base-commodity-form',
  templateUrl: './base-commodity-form.component.html',
  styleUrls: ['./base-commodity-form.component.scss'],
}, BaseListForm.metaData))

export class BaseCommodityFormComponent extends BaseListForm<Commodity>  {

  @Output() change = new EventEmitter();
  private focusedCol = null;
  private titles = [
    { name: 'PICKUP<br />#' },
    { name: 'P.O.' },
    { name: 'COMMO-<br />DITY' },
    { name: 'UNIT<br />TYPE' },
    { name: 'UNIT<br />COUNT' },
    { name: 'PALLET<br />COUNT' },
    { name: 'WEIGHT<br />(IBS)' }
  ];

  constructor(formBuilder: FormBuilder, private cdr: ChangeDetectorRef) {
    super(formBuilder);
  }

  public addCommodity(commodity: Commodity) {
    this.addItem(commodity);
  }

  shouldAddDefault() {
    return false;
  }

  protected createItem(): Commodity {
    return new Commodity();
  }

  protected removeItem(removeData) {
    super.removeItem(removeData);
    this.focusedCol = null;
    this.cdr.detectChanges();
  }

  private onBlur(col) {
    this.focusedCol = null;
  }

  private onFocus(col) {
    this.focusedCol = col;
  }

  private onChange(commodity) {
    this.change.emit(commodity);
  }
}
