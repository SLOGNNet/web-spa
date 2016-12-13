import { Address } from './index';
export enum CustomerTypes {
  Broker = 1,
  FreightForwarder = 2,
  Shipper = 3,
  Carrier = 4
};

export enum CustomerStatuses {
  INACTIVE = 0,
  ACTIVE = 1,
  UNAVALIABLE = 2
}

export class Customer {
  id: number;
  name: string;
  status: CustomerStatuses;
  type: CustomerTypes;
  mc: string;
  taxId: string;
  address: Address;

  static create(): Customer{
    const result = new Customer();
    result.status = CustomerStatuses.INACTIVE;
    return result;
  }

  constructor() {
    this.address = new Address();
  }
}
