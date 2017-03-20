import { Component, Input, ElementRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { Contact } from '../../models';
import { Location, MileageRecord } from '../../models';
import { BdFormGroup, BdFormBuilder } from '../../shared';
import { BaseForm } from '../base-form';

@Component(Object.assign({
  selector: 'mileage-form',
  templateUrl: './mileage-form.component.html',
  styleUrls: ['./mileage-form.component.scss']
}, BaseForm.metaData))
export class MileageForm extends BaseForm {
  @Input() disabled: boolean = false;
  @Input()
  public mileageRecord: MileageRecord;
  @Input('group')
  public mileageForm: BdFormGroup;

  private fields = [
    { name: 'value', validators: [] },
    { name: 'date', validators: [] },
  ];

  constructor(
    private _formBuilder: BdFormBuilder, elementRef: ElementRef){
    super(elementRef);
  }

  ngOnChanges(changes: any) {
    this.initForm();
  }

  initForm() {
    this.fields.forEach(field => {
      this.mileageForm.addControl(
        field.name,
        this._formBuilder.control({value: this.mileageRecord[field.name], disabled: this.disabled}, field.validators)
      );
    });
  }
}
