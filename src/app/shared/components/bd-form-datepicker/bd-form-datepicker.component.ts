import { Component, Input, ViewChild, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BdDatePicker } from './components';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbDateStruct } from '../datepicker';
import * as moment from 'moment';
import { Constants } from '../../constants/constants';
const noop = () => { };

export const BD_FORM_DATE_PICKER_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BdFormDatePicker),
  multi: true
};

@Component({
  selector: 'bd-form-datepicker',
  templateUrl: './bd-form-datepicker.component.html',
  styleUrls: ['bd-form-datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [BD_FORM_DATE_PICKER_CONTROL_VALUE_ACCESSOR]
})
export class BdFormDatePicker implements ControlValueAccessor {
  @Input() labelText: string;
  @Input() disabled: boolean = false;
  @Input() dateFormat: string = this.constants.DATE_FORMAT;
  @Input() minDate: NgbDateStruct;
  @Input() maxDate: NgbDateStruct;
  @ViewChild('datepicker') datepicker: BdDatePicker;
  private dateValue;

  private value: any;
  private _onTouchedCallback: () => void = noop;
  private _onChangeCallback: (_: any) => void = noop;

  constructor(private constants: Constants, private cdr: ChangeDetectorRef) {
  }

  writeValue(value: any) {
    this.value = value;
    const date = moment(value);
    this.dateValue = date.isValid() ? date.format(this.dateFormat) : null;
    this.cdr.markForCheck();
  }

  onDateChange(value: string) {
    if (value !== this.dateValue) {
      const newDate = moment(value, this.dateFormat);
      this.value = newDate ? moment()
        .year(newDate.year())
        .month(newDate.month())
        .date(newDate.date()).toDate() : null;

        this._onChangeCallback(this.value);
    }
  }

  registerOnChange(fn: any) {
    this._onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this._onTouchedCallback = fn;
  }

  onClickOutside(event) {
    this.datepicker.close();
  }


  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
