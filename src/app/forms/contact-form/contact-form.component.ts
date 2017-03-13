import { Component, Input, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Validators } from '@angular/forms';
import { Contact } from '../../models';
import { Location } from '../../models';
import { ViewMode } from '../../shared/enums';
import { BdFormGroup, BdFormBuilder } from '../../shared';
import { BaseForm } from '../base-form';

@Component(Object.assign({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['../../../assets/styles/form-control.scss']
}, BaseForm.metaData))
export class ContactForm extends BaseForm {
  @Input() disabled: boolean = false;
  @Input()
  public contact: Contact;
  @Input()
  public locations: Array<Location>;
  @Input('group')
  public contactForm: BdFormGroup;

  private fields = [
    { name: 'firstName', validators: [Validators.required] },
    { name: 'lastName', validators: [] },
    { name: 'email', validators: [] },
    { name: 'position', validators: [] },
    { name: 'locationId', validators: [] },
    { name: 'location', validators: [] },
    { name: 'contactInfo', validators: [] },
    { name: 'location', validators: [] }
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
      this.contactForm.addControl(
        field.name,
        this._formBuilder.control(this.contact[field.name], field.validators)
      );
    });
  }
}
