import { Component, Input } from '@angular/core';
import { Driver, DriverTypes } from '../../../../../models';
import { Constants } from '../../../../../shared';


@Component({
  selector: 'driver-information',
  templateUrl: './driver-information.component.html',
  styleUrls: ['./driver-information.component.scss']
})
export class DriverInformationComponent {
  @Input() driver: Driver;

  constructor(private constants: Constants) {

  }

  get driverType() {
    return DriverTypes.text(this.driver.type);
  }
}
