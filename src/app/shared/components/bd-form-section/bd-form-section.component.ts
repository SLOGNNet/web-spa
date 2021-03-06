import { Component, Input } from '@angular/core';
@Component({
  selector: 'bd-form-section',
  templateUrl: './bd-form-section.component.html',
  styleUrls: ['./bd-form-section.component.scss']
})
export class BdFormSectionComponent {
  @Input() disabled: boolean = false;
  @Input() labelText: string;
  @Input() isExpanded: boolean = true;

  private get isLabelVisisble() {
    return this.isExpanded && this.labelText;
  }
}
