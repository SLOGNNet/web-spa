import { Component, Optional, Input, ViewChild, OnChanges, QueryList, ViewChildren, ChangeDetectorRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BdFormControl, FormValidationService } from '../..';
@Component({
  selector: 'bd-validator',
  styleUrls: ['./bd-validator.component.scss'],
  templateUrl: './bd-validator.component.html',
})
export class BdValidatorComponent implements OnChanges {
  @Input()
  component: BdFormControl;
  @Input()
  errorDefs: any;
  @ViewChild(NgControl) controls;
  errorMessage: string = '';

  constructor(@Optional() validationService: FormValidationService) {
    if (validationService) {
      validationService.showValidation
        .subscribe(() => this.checkErrors(this.component, true));
    }
  }

  ngOnChanges(changes: any): void {
    const component: BdFormControl = changes.component.currentValue;
    component.valueChanges.subscribe(() => {
      this.checkErrors(component);
    });
    this.checkErrors(component);
  }

  checkErrors(control, force: boolean = false) {
    this.errorMessage = '';
    const errors = control.errors;
    const shouldShow =  control.touched || force;
    if (errors && shouldShow) {
      Object.keys(this.errorDefs).some(key => {
        if (errors[key]) {
          this.errorMessage = this.errorDefs[key];
          return true;
        }
      });
    }
  }
}