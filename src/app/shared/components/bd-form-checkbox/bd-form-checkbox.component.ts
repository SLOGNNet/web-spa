import { Component, Input, Output, HostListener, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bd-form-checkbox',
  styleUrls: ['./bd-form-checkbox.component.scss'],
  templateUrl: './bd-form-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BdFormCheckbox  {
  @Input() checked: boolean = false;
  @Output() checkedChange = new EventEmitter();

  @HostListener('click', ['$event'])
  onClick(e) {
    e.preventDefault();
    e.stopPropagation();

    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }

  onCheckedChange(e) {
    this.checkedChange.emit(this.checked);
  }
}
