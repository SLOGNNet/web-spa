import { Component, Optional, TemplateRef,
  ViewEncapsulation, HostBinding, Input, Output, EventEmitter,
  ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { BdInputComponent } from '../bd-input';
const noop = () => { };

@Component({
  selector: 'bd-typeahead',
  templateUrl: './bd-form-typeahead.component.html',
  styleUrls: ['./bd-form-typeahead.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BdFormTypeaheadComponent implements ControlValueAccessor {
  @Input() removeButtonHidden = false;
  @Input() public itemTemplate: TemplateRef<any>;
  @Input() public labelText: string = '';
  @Input() disabled: boolean = false;
  @Input() placeholder: string;
  @Input() public footerButtonText: string = '';
  @Input() public source: Observable<any>;
  @Input() public optionField: string;
  @Input() value: string;
  @Output() public onSelect: EventEmitter<any> = new EventEmitter<any>(false);
  @Output() public valueChange = new EventEmitter();
  @Output() public onRemove: EventEmitter<any> = new EventEmitter();
  @Output() public onFooterButtonClick: EventEmitter<any> = new EventEmitter();
  @ViewChild('input') inputElement: BdInputComponent;
  @HostBinding('class.bd-focused') _focused: boolean = false;

  protected isLoading: boolean = false;
  protected isNoResultsShown: boolean = false;
  private _onTouchedCallback: () => void = noop;
  private _onChangeCallback: (_: any) => void = noop;

  constructor(@Optional() ngControl: NgControl, private changeDetectionRef: ChangeDetectorRef) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  changeValue(v: any) {
    this.value = v;
    // fire change callback only for selected from list items
    // if user change input value - consider it as empty result

    this.valueChange.emit(v);
  }

  public changeTypeaheadLoading(isLoading: boolean): void {
    this.isLoading = isLoading;
  }

  public changeTypeaheadNoResults(isNoResultsShown: boolean): void {
    this.isNoResultsShown = isNoResultsShown;
  }

  public typeaheadOnSelect(match): void {
    this.onSelect.emit(match.item);
    this._onChangeCallback(this.value);
  }

  remove(event): void {
    if (this.disabled) return;

    event.stopPropagation();
    this.changeValue('');
    this._onChangeCallback('');
    this.onRemove.emit(event);
  }

  public onFooterClick(): void {
    this.changeValue('');
    this._onChangeCallback('');
    this.onFooterButtonClick.emit();
  }

  onFocusChanged(isFocused) {
    this._focused = isFocused;
  }

  writeValue(value: any) {
    this.value = value;
    this.changeDetectionRef.markForCheck();
  }

  registerOnChange(fn: any) {
    this._onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this._onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
