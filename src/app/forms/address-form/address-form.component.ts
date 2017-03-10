import { Component, Input, Output, EventEmitter, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Address } from '../../models';
import { ViewMode } from '../../shared/enums';
import { GoogleService } from '../../shared';
import { BaseForm } from '../base-form';
@Component(Object.assign({
  selector: 'address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
}, BaseForm.metaData))
export class AddressForm extends BaseForm {
  @Input() disabled: boolean = false;
  @Input() isNameFieldVisible: boolean = true;
  @Input()
  public address: Address;
  @Input('group')
  public addressForm: FormGroup;
  @Output() update = new EventEmitter();
  @Output() updatePlace = new EventEmitter();
  private _placeSource: any[];
  private _placeQuery: string = '';
  private _map = {
    labelText: '',
    latitude: 0,
    longitude: 0
  };


  constructor(
    private _cdr: ChangeDetectorRef,
    private _formBuilder: FormBuilder,
    private _googleService: GoogleService,
    element: ElementRef
    ) {
    super(element);
  }

  ngOnChanges(changes: any) {
    this.initForm();
    this._initPlaceTypeahead();
    this._updateMap(this.address.latitude, this.address.longitude, this.address.streetAddress1);
  }

  initForm() {
    const fields = this._createFields();
    fields.forEach(field => {
      this.addressForm.addControl(
        field.name,
        this._formBuilder.control(this.address[field.name], field.validators)
      );
    });
      this.addressForm.valueChanges.subscribe((value) => {
        if (this.addressForm.valid) {
           this.update.emit(value);
        }
      });
  }

  onRemoveMap() {
    this._updateMap();
  }

  onAddressRemove() {
    this.addressForm.setValue(Object.assign(
      {},
      this.addressForm.value,
      {
        city: '',
        state: '',
        zip: '',
        streetAddress2: '',
        latitude: 0,
        longitude: 0
      }
    ));

    this._updateMap();
  }

  public onPlaceSelect(place) {
    if (place && typeof place.place_id === 'string') {
      this.updatePlace.emit({addressId: this.address.id, placeId: place.place_id});
    }
  }

  private _createFields() {
    const fields = [
      { name: 'id', validators: [] },
      { name: 'state', validators: [] },
      { name: 'zip', validators: [] },
      { name: 'phoneExtension', validators: [] },
      { name: 'faxExtension', validators: [] },
      { name: 'streetAddress1', validators: [] },
      { name: 'streetAddress2', validators: [] },
      { name: 'city', validators: [] },
      { name: 'latitude', validators: [] },
      { name: 'longitude', validators: [] }
    ];
    if (this.isNameFieldVisible) {
      fields.push(  { name: 'name', validators: [Validators.required] });
    }
    return fields;
  }

  private _initPlaceTypeahead() {
    this._placeQuery = this.address.streetAddress1;

    this._placeSource = Observable.create((observer: any) => {
      observer.next(this._placeQuery);
    }).mergeMap((token: string) => this._googleService.getPredictions(token));
  }

  private _updateMap(latitude = 0, longitude = 0, labelText = ''): void {
    this._map = {
      latitude,
      longitude,
      labelText
    };
  }
}
