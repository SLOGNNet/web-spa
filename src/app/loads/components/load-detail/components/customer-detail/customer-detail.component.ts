import { Component, Input } from '@angular/core';
import { Company, Contact } from '../../../../../models';

@Component({
  selector: 'customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent {
  @Input() company: Company;
  @Input() selectedContact: Contact;

  get fullName() {
    return `${this.selectedContact.firstName} ${this.selectedContact.lastName}`;
  }
}
