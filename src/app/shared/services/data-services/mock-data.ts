import {
  Load, Document, Customer, Address, CustomerStatuses, CustomerTypes,
  LoadStatuses, DriverRequirements, PowerUnitTypes,
  TrailerTypes, Stop, StopTypes, Commodity, Contact, LoadType,
  FreightType, DataAssigneeRequirements, Facility, Trip,
  StopStatuses, Driver, Equipment, DriverPaymentOptions,
  DriverTypes, DriverStatuses, EquipmentStatuses, EquipmentTypes,
  EquipmentModes, EquipmentVehicleOperatings } from './models';
class MockData {
  public addresses: Array<Address> = [{
    id: 1,
    name: 'Main Office',
    streetAddress: '14701 Charlson Road, United States',
    secondStreetAddress: '',
    city: 'Eden Prairie',
    phone: '(925) 937-8500',
    state: 'MN',
    zip: '55347',
    fax: '',
    phoneExtension: '',
    faxExtension: '',
    location: {
      lat: 40.795675,
      lng: -73.93600099999998
    }
  },
  {
    id: 2,
    name: 'Main Office',
    streetAddress: '5429 Lyndon B Johnson Freeway',
    secondStreetAddress: 'SUITE 550',
    city: 'Dallas',
    phone: '(972) 669-4259',
    state: 'TX',
    zip: '75240',
    fax: '',
    phoneExtension: '',
    faxExtension: '',
    location: {
      lat: 40.795675,
      lng: -73.93600099999998
    }
  },
  {
    id: 3,
    name: 'Main Office',
    streetAddress: '641 East Watkins Street',
    secondStreetAddress: '',
    city: 'Phoenix',
    phone: '(602) 256-9470',
    state: 'AZ',
    zip: '85004',
    fax: '(602)-256-0631',
    phoneExtension: '',
    faxExtension: '',
    location: {
      lat: 40.795675,
      lng: -73.93600099999998
    }
  },
  {
    id: 4,
    name: 'Main Office',
    streetAddress: '3101 Packerland Drive, Green Bay, WI, United States',
    secondStreetAddress: '',
    city: 'Green Bay',
    phone: '(800) 558-6767',
    state: 'WI',
    zip: '54313',
    fax: '',
    phoneExtension: '',
    faxExtension: '',
    location: {
      lat: 40.795675,
      lng: -73.93600099999998
    }
  },
  {
    id: 5,
    name: 'Main Office',
    streetAddress: '1000 WYNDHAM PKWY',
    secondStreetAddress: '',
    city: 'BOLINGBROOK',
    phone: '(312) 326-8000',
    state: 'IL',
    zip: '60490',
    fax: '',
    phoneExtension: '',
    faxExtension: '',
    location: {
      lat: 40.795675,
      lng: -73.93600099999998
    }
  }
  ];

  public billingAddresses: Array<Address> = [{
    id: 3,
    name: 'Billing Address',
    streetAddress: '14701 Charlson Road, United States',
    secondStreetAddress: 'SUITE 550',
    city: 'Dallas',
    phone: '(972) 669-4259',
    state: 'MN',
    zip: '33708',
    fax: '',
    phoneExtension: '',
    faxExtension: '',
    location: {
      lat: 0,
      lng: 0
    }
  },
  {
    id: 4,
    name: 'Billing Address',
    streetAddress: '5429 Lyndon B Johnson Freeway',
    secondStreetAddress: 'SUITE 550',
    city: 'Dallas',
    phone: '(972) 669-4259',
    state: 'TX',
    zip: '75240',
    fax: '',
    phoneExtension: '',
    faxExtension: '',
    location: {
      lat: 0,
      lng: 0
    }
  },
  {
    id: 5,
    name: 'Billing Address',
    streetAddress: 'BROKER_BILLING_ADDRESS',
    secondStreetAddress: 'SUITE 550',
    city: 'Dallas',
    phone: '(972) 669-4259',
    state: 'TX',
    zip: '75240',
    fax: '',
    phoneExtension: '',
    faxExtension: '',
    location: {
      lat: 0,
      lng: 0
    }
  },
  {
    id: 6,
    name: 'Billing Address',
    streetAddress: 'PO BOX 2545',
    secondStreetAddress: '',
    city: 'Green Bay',
    phone: '(920)-592-6867',
    state: 'WI',
    zip: '54313',
    fax: '',
    phoneExtension: '',
    faxExtension: '',
    location: {
      lat: 0,
      lng: 0
    }
  },
  {
    id: 7,
    name: 'Billing Address',
    streetAddress: '1000 WYNDHAM PKWY',
    secondStreetAddress: '',
    city: 'BOLINGBROOK',
    phone: '(312) 326-8000',
    state: 'IL',
    zip: '60490',
    fax: '',
    phoneExtension: '',
    faxExtension: '',
    location: {
      lat: 0,
      lng: 0
    }
  },
  ];

  public contacts: Array<Contact> = [{
   id: 1,
   firstName: 'Jason',
   lastName: 'Chang',
   personalEmail: 'CHANJAS@chrobinson.com',
   position: 'sales',
   addressId: 1
 },
 {
   id: 2,
   firstName: 'Scott',
   lastName: 'Spearow',
   personalEmail: 'sspearow@TQL.com',
   position: 'sales',
   addressId: 2
 },
 {
   id: 3,
   firstName: 'Emma',
   lastName: 'Watson',
   personalEmail: 'Emma@TQL.com',
   position: 'sales',
   addressId: 3
 },
 {
   id: 4,
   firstName: 'Johnny',
   lastName: 'Depp',
   personalEmail: 'Johnny@TQL.com',
   position: 'sales',
   addressId: 4
 }
 ];

  public customers: Array<Customer> = [
    {
      id: 1,
      name: 'CH ROBINSON COMPANY INC',
      addresses: [this.addresses[0], this.billingAddresses[0]],
      contacts: [this.contacts[0]],
      email: 'carrier.services@chrobinson.com',
      status: CustomerStatuses.Active,
      type: CustomerTypes.Broker,
      taxId: '',
      mc: '384859'
    },
    {
      id: 2,
      name: 'M W LOGISTICS LLC',
      addresses: [this.addresses[1], this.billingAddresses[1]],
      contacts: [this.contacts[1]],
      email: 'HAVETO ADD@mwlogistics.com',
      status: CustomerStatuses.Active,
      type: CustomerTypes.Broker,
      taxId: '',
      mc: '392137'
    },
    {
      id: 3,
      name: 'United Freight Service UFS',
      addresses: [this.addresses[2], this.billingAddresses[2]],
      contacts: [this.contacts[2]],
      email: 'albert@ufs.net',
      status: CustomerStatuses.Active,
      type: CustomerTypes.Broker,
      taxId: '',
      mc: ''
    },
    {
      id: 4,
      name: 'SCHNEIDER NATIONAL CARRIERS INC',
      addresses: [this.addresses[3], this.billingAddresses[3]],
      contacts: [this.contacts[3]],
      email: 'stmcarrier@schneider.com',
      status: CustomerStatuses.Active,
      type: CustomerTypes.Broker,
      taxId: '', mc: '133655'
    },
    {
      id: 5,
      name: 'RR DONNELLEY LOGISTICS SERVICES WORLDWIDE INC',
      addresses: [this.addresses[4], this.billingAddresses[4]],
      contacts: this.contacts,
      email: 'havetoadd@rrdonelley.com',
      status: CustomerStatuses.Active,
      type: CustomerTypes.Broker,
      taxId: '',
      mc: '283221'
    }
  ];

  public documents: Array<Document> = [
    {
      id: 1,
      type: 'Rate Sheet',
      issueDate: '20/10/2017',
      url: '',
      file: null
    }
  ];

  public commodities: Array<Commodity> = [{
    id: 1,
    pickupId: 1,
    dropoffId: 13,
    pickupNumber: null,
    dropoffNumber: null,
    po: '8055',
    commodity: 'BaiDrink',
    unitType: 'Pallet(S)',
    unitCount: 0,
    palletCount: 25,
    weight: 0,
  },
  {
    id: 2,
    pickupId: 2,
    dropoffId: 13,
    pickupNumber: 5009,
    dropoffNumber: null,
    po: '',
    commodity: 'Gypsum',
    unitType: 'Truckload',
    unitCount: 0,
    palletCount: 0,
    weight: 0
  },
  {
    id: 3,
    pickupId: 3,
    dropoffId: 13,
    pickupNumber: null,
    dropoffNumber: null,
    po: '',
    commodity: '',
    unitType: '',
    unitCount: 0,
    palletCount: 0,
    weight: 0
  },
  {
    id: 4,
    pickupId: 4,
    dropoffId: 8,
    pickupNumber: null,
    dropoffNumber: null,
    po: '',
    commodity: '',
    unitType: '',
    unitCount: 0,
    palletCount: 42,
    weight: 0
  }
];

  public facilities: Array<Facility> = [{
    id: 1,
    name: 'Larede, TX',
    address: this.addresses[0]
  }, {
    id: 2,
    name: 'San Francisco, CA',
    address: this.addresses[1]
  }, {
    id: 1,
    name: 'Los Angeles, CA',
    address: this.addresses[2]
  }, {
    id: 2,
    name: 'Los Altos, CA',
    address: this.addresses[3]
  }];

  public equipments: Array<Equipment> = [{
    id: 0,
    make: 'Kenworth',
    model: 'T610',
    number: '101',
    vin: '',
    notes: 'Oil Change',
    status: EquipmentStatuses.Active,
    type: EquipmentTypes.PowerUnit,
    subType: PowerUnitTypes.Tractor,
    mode: EquipmentModes.Company,
    vehicleOperating: EquipmentVehicleOperatings.InterState
  }, {
    id: 1,
    make: 'Wabash',
    model: 'CA9000(Referer 53)',
    number: '2349',
    vin: '',
    notes: '',
    status: EquipmentStatuses.Active,
    type: EquipmentTypes.Trailer,
    subType: TrailerTypes.DryVan48,
    mode: EquipmentModes.Company,
    vehicleOperating: EquipmentVehicleOperatings.InterState
  }];

  public drivers: Array<Driver> = [{
    id: 0,
    firstName: 'Goving',
    lastName: 'Bhatti',
    dateOfBirth: null,
    snn: '123144241241242',
    powerUnitAssigned: this.equipments[0],
    trailerAssigned: this.equipments[1],
    paymentOption: DriverPaymentOptions.PerMile,
    rate: 1.2,
    contact: this.contacts[0],
    type: DriverTypes.Company,
    hireDate: null,
    terminationDate: null,
    status: DriverStatuses.Active,
    notes: 'notes'
  }];

  public trips: Array<Trip> = [{
    id: 1,
    number: 345351,
    truckNumber: 1021,
    trailerNumber: 2349,
    driver: this.drivers[0]
  }, {
    id: 2,
    number: 345351,
    truckNumber: 1021,
    trailerNumber: 2349,
    driver: this.drivers[0]
  }, {
    id: 3,
    number: 345351,
    truckNumber: 1021,
    trailerNumber: 2349,
    driver: this.drivers[0]
  }, {
    id: 4,
    number: 345351,
    truckNumber: 1021,
    trailerNumber: 2349,
    driver: this.drivers[0]
  }];

  public startDate = new Date(2017, 0, 9);

  public pickups: Array<Stop> = [{
    id: 1,
    notes: 'notes',
    type: StopTypes.Pickup,
    address: this.addresses[0],
    date: this.startDate,
    commodities: [this.commodities[0]],
    facility: this.facilities[0],
    status: StopStatuses.InProgress
  },
  {
    id: 2,
    notes: 'notes',
    type: StopTypes.Pickup,
    address: this.addresses[1],
    date: this.startDate,
    commodities: [this.commodities[1]],
    facility: this.facilities[1],
    status: StopStatuses.InProgress
  },
  {
    id: 3,
    notes: 'notes',
    type: StopTypes.Pickup,
    address: this.addresses[2],
    date: this.startDate,
    commodities: [this.commodities[2]],
    facility: this.facilities[2],
    status: StopStatuses.InProgress
  },
  {
    id: 4,
    notes: 'notes',
    type: StopTypes.Pickup,
    address: this.addresses[3],
    date: this.startDate,
    commodities: [this.commodities[3]],
    facility: this.facilities[3],
    status: StopStatuses.InProgress
  },
  {
    id: 5,
    notes: 'notes',
    type: StopTypes.Pickup,
    address: this.addresses[2],
    date: this.startDate,
    commodities: [this.commodities[2]],
    facility: this.facilities[2],
    status: StopStatuses.InProgress
  },
  {
    id: 6,
    notes: 'notes',
    type: StopTypes.Pickup,
    address: this.addresses[3],
    date: this.startDate,
    commodities: [this.commodities[3]],
    facility: this.facilities[3],
    status: StopStatuses.InProgress
  }, {
    id: 7,
    notes: 'notes',
    type: StopTypes.Pickup,
    address: this.addresses[0],
    date: this.startDate,
    commodities: [this.commodities[0]],
    facility: this.facilities[0],
    status: StopStatuses.InProgress
  },
  {
    id: 8,
    notes: 'notes',
    type: StopTypes.Pickup,
    address: this.addresses[1],
    date: this.startDate,
    commodities: [this.commodities[1]],
    facility: this.facilities[1],
    status: StopStatuses.InProgress
  },
  {
    id: 9,
    notes: 'notes',
    type: StopTypes.Pickup,
    address: this.addresses[2],
    date: this.startDate,
    commodities: [this.commodities[2]],
    facility: this.facilities[2],
    status: StopStatuses.InProgress
  },
  {
    id: 10,
    notes: 'notes',
    type: StopTypes.Pickup,
    address: this.addresses[3],
    date: this.startDate,
    commodities: [this.commodities[3]],
    facility: this.facilities[3],
    status: StopStatuses.InProgress
  },
  {
    id: 11,
    notes: 'notes',
    type: StopTypes.Pickup,
    address: this.addresses[2],
    date: this.startDate,
    commodities: [this.commodities[2]],
    facility: this.facilities[2],
    status: StopStatuses.InProgress
  },
  {
    id: 12,
    notes: 'notes',
    type: StopTypes.Pickup,
    address: this.addresses[3],
    date: this.startDate,
    commodities: [this.commodities[3]],
    facility: this.facilities[3],
    status: StopStatuses.InProgress
  },
  {
    id: 13,
    notes: 'notes',
    type: StopTypes.Pickup,
    address: this.addresses[3],
    date: this.startDate,
    commodities: [this.commodities[3]],
    facility: this.facilities[3],
    status: StopStatuses.InProgress
  }];

  public endDate = new Date(2017, 0, 22);

  public dropoffs: Array<Stop> = [{
    id: 13,
    notes: 'notes',
    type: StopTypes.Dropoff,
    address: this.addresses[1],
    date: this.endDate,
    commodities: [this.commodities[1], this.commodities[1]],
    facility: this.facilities[0],
    status: StopStatuses.InProgress
  },
  {
    id: 14,
    notes: 'notes',
    type: StopTypes.Dropoff,
    address: this.addresses[0],
    date: this.endDate,
    commodities: [this.commodities[1]],
    facility: this.facilities[1],
    status: StopStatuses.InProgress
  },
  {
    id: 15,
    notes: 'notes',
    type: StopTypes.Dropoff,
    address: this.addresses[0],
    date: this.endDate,
    commodities: [this.commodities[2]],
    facility: this.facilities[2],
    status: StopStatuses.InProgress
  },
  {
    id: 16,
    notes: 'notes',
    type: StopTypes.Dropoff,
    address: this.addresses[1],
    date: this.endDate,
    commodities: [this.commodities[3]],
    facility: this.facilities[3],
    status: StopStatuses.InProgress
  },
  {
    id: 17,
    notes: 'notes',
    type: StopTypes.Dropoff,
    address: this.addresses[2],
    date: this.endDate,
    commodities: [this.commodities[2]],
    facility: this.facilities[2],
    status: StopStatuses.InProgress
  },
  {
    id: 18,
    notes: 'notes',
    type: StopTypes.Dropoff,
    address: this.addresses[2],
    date: this.endDate,
    commodities: [this.commodities[3]],
    facility: this.facilities[3],
    status: StopStatuses.InProgress
  }, {
    id: 19,
    notes: 'notes',
    type: StopTypes.Dropoff,
    address: this.addresses[1],
    date: this.endDate,
    commodities: [this.commodities[0]],
    facility: this.facilities[0],
    status: StopStatuses.InProgress
  },
  {
    id: 20,
    notes: 'notes',
    type: StopTypes.Dropoff,
    address: this.addresses[0],
    date: this.endDate,
    commodities: [this.commodities[1]],
    facility: this.facilities[1],
    status: StopStatuses.InProgress
  },
  {
    id: 21,
    notes: 'notes',
    type: StopTypes.Dropoff,
    address: this.addresses[0],
    date: this.endDate,
    commodities: [this.commodities[2]],
    facility: this.facilities[2],
    status: StopStatuses.InProgress
  },
  {
    id: 22,
    notes: 'notes',
    type: StopTypes.Dropoff,
    address: this.addresses[1],
    date: this.endDate,
    commodities: [this.commodities[3]],
    facility: this.facilities[3],
    status: StopStatuses.InProgress
  },
  {
    id: 23,
    notes: 'notes',
    type: StopTypes.Dropoff,
    address: this.addresses[2],
    date: this.endDate,
    commodities: [this.commodities[2]],
    facility: this.facilities[2],
    status: StopStatuses.InProgress
  }];


  public loads: Array<Load> = [
    {
      id: 1,
      customerId: 1,
      customer: null,
      addressId: 1,
      brokerLoadNumber: 726457361,
      carrierLoadNumber: 209282402,
      loadType: LoadType.FTL,
      freightType: FreightType.Dry,
      dataAssignee: DataAssigneeRequirements.MelMel1,
      contactId: 1,
      billingAddressId: 3,
      status: LoadStatuses.Completed,
      driverRequirment: DriverRequirements.Solo,
      powerUnitType: PowerUnitTypes.Tractor,
      trailerType: TrailerTypes.DryVan53,
      specialRequirment: '#143',
      trips: this.trips,
      currentTrip: this.trips[0],
      stops: [this.pickups[0], this.pickups[1], this.dropoffs[0]],
      documents: [this.documents[0]]
    },
    {
      id: 2,
      customerId: 2,
      customer: null,
      addressId: 2,
      brokerLoadNumber: 234457361,
      carrierLoadNumber: 7367707,
      loadType: LoadType.FTL,
      freightType: FreightType.Dry,
      dataAssignee: DataAssigneeRequirements.MelMel2,
      billingAddressId: 4,
      contactId: 2,
      status: LoadStatuses.InTransit,
      driverRequirment: DriverRequirements.Solo,
      powerUnitType: PowerUnitTypes.Tractor,
      trailerType: TrailerTypes.DryVan53,
      specialRequirment: '#141',
      trips: this.trips,
      currentTrip: this.trips[1],
      stops: [this.pickups[2], this.pickups[3], this.dropoffs[1], this.dropoffs[2]],
      documents: [this.documents[0]]
    },
    {
      id: 3,
      customerId: 3,
      customer: null,
      addressId: 3,
      brokerLoadNumber: 111557361,
      carrierLoadNumber: 104579538,
      loadType: LoadType.FTL,
      freightType: FreightType.Dry,
      dataAssignee: DataAssigneeRequirements.MelMel1,
      billingAddressId: 5,
      contactId: 3,
      status: LoadStatuses.InTransit,
      driverRequirment: DriverRequirements.Solo,
      powerUnitType: PowerUnitTypes.Tractor,
      trailerType: TrailerTypes.DryVan53,
      specialRequirment: '#128',
      trips: this.trips,
      currentTrip: this.trips[2],
      stops: [this.pickups[4], this.dropoffs[3], this.dropoffs[4]],
      documents: [this.documents[0]]
    },
    {
      id: 4,
      customerId: 4,
      customer: null,
      addressId: 4,
      brokerLoadNumber: 827461356,
      carrierLoadNumber: 104605109,
      loadType: LoadType.FTL,
      freightType: FreightType.Dry,
      dataAssignee: DataAssigneeRequirements.MelMel1,
      billingAddressId: 6,
      contactId: 4,
      status: LoadStatuses.Pending,
      driverRequirment: DriverRequirements.Solo,
      powerUnitType: PowerUnitTypes.Tractor,
      trailerType: TrailerTypes.DryVan53,
      specialRequirment: '#128',
      trips: this.trips,
      currentTrip: this.trips[3],
      stops: [this.pickups[5], this.dropoffs[5]],
      documents: [this.documents[0]]
    },
    {
      id: 5,
      customerId: 1,
      customer: null,
      addressId: 1,
      brokerLoadNumber: 827461356,
      carrierLoadNumber: 104605109,
      loadType: LoadType.FTL,
      freightType: FreightType.Dry,
      dataAssignee: DataAssigneeRequirements.MelMel1,
      billingAddressId: 6,
      contactId: 4,
      status: LoadStatuses.InTransit,
      driverRequirment: DriverRequirements.Solo,
      powerUnitType: PowerUnitTypes.Tractor,
      trailerType: TrailerTypes.DryVan53,
      specialRequirment: '#128',
      trips: this.trips,
      currentTrip: this.trips[0],
      stops: [this.pickups[6], this.pickups[7], this.dropoffs[6], this.dropoffs[7]],
      documents: [this.documents[0]]
    },
    {
      id: 6,
      customerId: 2,
      customer: null,
      addressId: 2,
      brokerLoadNumber: 827461356,
      carrierLoadNumber: 104605109,
      loadType: LoadType.FTL,
      freightType: FreightType.Dry,
      dataAssignee: DataAssigneeRequirements.MelMel1,
      billingAddressId: 6,
      contactId: 4,
      status: LoadStatuses.Completed,
      driverRequirment: DriverRequirements.Solo,
      powerUnitType: PowerUnitTypes.Tractor,
      trailerType: TrailerTypes.DryVan53,
      specialRequirment: '#128',
      trips: this.trips,
      currentTrip: this.trips[1],
      stops: [this.pickups[8], this.pickups[9], this.dropoffs[8]],
      documents: [this.documents[0]]
    },
    {
      id: 7,
      customerId: 3,
      customer: null,
      addressId: 3,
      brokerLoadNumber: 827461356,
      carrierLoadNumber: 104605109,
      loadType: LoadType.FTL,
      freightType: FreightType.Dry,
      dataAssignee: DataAssigneeRequirements.MelMel1,
      billingAddressId: 6,
      contactId: 4,
      status: LoadStatuses.Pending,
      driverRequirment: DriverRequirements.Solo,
      powerUnitType: PowerUnitTypes.Tractor,
      trailerType: TrailerTypes.DryVan53,
      specialRequirment: '#128',
      trips: this.trips,
      currentTrip: this.trips[2],
      stops: [this.pickups[10], this.dropoffs[9]],
      documents: [this.documents[0]]
    },
    {
      id: 8,
      customerId: 4,
      customer: null,
      addressId: 4,
      brokerLoadNumber: 827461356,
      carrierLoadNumber: 104605109,
      loadType: LoadType.FTL,
      freightType: FreightType.Dry,
      dataAssignee: DataAssigneeRequirements.MelMel1,
      billingAddressId: 6,
      contactId: 4,
      status: LoadStatuses.Completed,
      driverRequirment: DriverRequirements.Solo,
      powerUnitType: PowerUnitTypes.Tractor,
      trailerType: TrailerTypes.DryVan53,
      specialRequirment: '#128',
      trips: this.trips,
      currentTrip: this.trips[3],
      stops: [this.pickups[11], this.pickups[12], this.dropoffs[10]],
      documents: [this.documents[0]]
    },
  ];
}

export default new MockData();
