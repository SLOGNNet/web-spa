import { LicenseClassTypes } from './enums';

// License Class Text
function createLicenseClassText() {
  let result = {};
  result[LicenseClassTypes.None] = 'None';
  result[LicenseClassTypes.ClassA] = 'Class A';
  result[LicenseClassTypes.ClassB] = 'Class B';
  result[LicenseClassTypes.ClassC] = 'Class C';

  return result;
};

const licenseClassText = createLicenseClassText();

export class License {
  id: string = '';
  number: string = '';
  expiration: Date;
  dateIssued: Date;
  stateIssued: string = '';
  class: LicenseClassTypes;
  endorsments: string = '';
  restrictions: string = '';

  static create(): License {
    const result = new License();
    result.expiration = null;
    result.dateIssued = null;
    result.class = LicenseClassTypes.None;
    return result;
  }

  public static getLicenseClassText(licenseClass: LicenseClassTypes): string {
    return licenseClassText[licenseClass];
  }

  public static getClassesCollection(): any {
    return licenseClassText;
  }
}
