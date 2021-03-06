import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CompanyCardComponent } from './index';
import { hexToRgb, getRGBString } from '../../../shared/helpers';
import { SharedModule } from '../../../shared/shared.module';
import { Load, Company, Contact, CompanyStatuses, LoadStatuses, ContactInfo } from '../../../models';
import { fireMouseEvent } from '../../../shared/test/helpers/domHelper';

function createTestData() {
  let resultCompany = new Company(),
    testContact = new Contact(),
    testLoad = new Load(),
    testContactInfo = new ContactInfo();

  // test contact info
  testContactInfo.value = '213123123';
  testContactInfo.label = 'Primary Phone';

  // test contact
  testContact.firstName = 'Emma';
  testContact.lastName = 'Watson';
  testContact.position = 'Sales manager';
  testContact.contactInfo = [testContactInfo];
  // test load
  testLoad.systemLoadNo = '209282402';
  testLoad.status = LoadStatuses.COMPLETED;
  // test company
  resultCompany.name = 'CH ROBINSON COMPANY INC';
  resultCompany.contacts = [testContact];
  resultCompany.status = CompanyStatuses.ACTIVE;
  resultCompany.mc = '384859';
  resultCompany.loads = [testLoad];
  return resultCompany;
}


describe('CompanyCardComponent', () => {
  let fixture: ComponentFixture<CompanyCardComponent>,
    component: CompanyCardComponent,
    testCompany: Company;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [
        CompanyCardComponent
      ],
      imports: [
        SharedModule
      ]
    });
    fixture = TestBed.createComponent(CompanyCardComponent);
    component = fixture.componentInstance;
    testCompany = createTestData();
    //

  }));

  it('should have a component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should display company name', () => {
    let testCompanyName = 'CH ROBINSON COMPANY INC';
    component.item = testCompany;
    component.item.name = testCompanyName;
    fixture.detectChanges();
    let element = fixture.debugElement.query(By.css('.company-name'));
    expect(element.nativeElement.textContent).toMatch(testCompanyName);
  });

  it('should display company contacts full name', () => {
    let testContactFirstName = 'Emma', testContactLastName = 'Watson';
    component.item = testCompany;
    component.item.contacts[0].firstName = testContactFirstName;
    component.item.contacts[0].lastName = testContactLastName;
    fixture.detectChanges();
    let element = fixture.debugElement.query(By.css('.company-contact-full-name'));
    expect(element.nativeElement.textContent).toBe(testContactFirstName + ' ' + testContactLastName);
  });

  it('should display company mc', () => {
    let testCompanyMc = '384859';
    component.item = testCompany;
    component.item.mc = testCompanyMc;
    fixture.detectChanges();
    let element = fixture.debugElement.query(By.css('.company-mc'));
    expect(element.nativeElement.textContent).toMatch('MC# ' + testCompanyMc);
  });

  it('should display status color', () => {
    component.item = testCompany;
    fixture.detectChanges();
    let element = fixture.debugElement.query(By.css('.status')),
      companyStatusColor = hexToRgb(component.itemStatusColor());
    expect(element.nativeElement.style.backgroundColor).toBe(getRGBString(companyStatusColor));
  });

  it('should display status text color', () => {
    component.item = testCompany;
    component.statusText = true;
    fixture.detectChanges();
    let element = fixture.debugElement.query(By.css('.status-text'));
    let companyStatusText = hexToRgb(component.itemStatusColor());
    expect(element.nativeElement.style.color).toBe(getRGBString(companyStatusText));
  });

  it('should display load color', () => {
    let testLoadStatusColor = LoadStatuses.COMPLETED;
    component.item = testCompany;
    component.item.loads[0].status = testLoadStatusColor;
    fixture.detectChanges();
    let element = fixture.debugElement.query(By.css('.load-circle'));
    let loadStatusColor = hexToRgb(component.loadStatusColor(testLoadStatusColor));
    expect(element.nativeElement.style.backgroundColor).toBe(getRGBString(loadStatusColor));
  });

  it('status text equal null', () => {
    component.item = testCompany;
    fixture.detectChanges();
    let element = fixture.debugElement.query(By.css('.status-text'));
    expect(element === null).toBeTruthy();
  });

  it('should display status text', () => {
    let testCompanyStatus = CompanyStatuses.ACTIVE;
    component.item = testCompany;
    component.statusText = true;
    component.item.status = testCompanyStatus;
    fixture.detectChanges();
    let element = fixture.debugElement.query(By.css('.status-text'));
    expect(element.nativeElement.textContent).toMatch(CompanyStatuses.displayText(testCompanyStatus));
  });

  it('should display address phone', () => {
    let testCompanyAddressPhone = '213123123';
    component.item = testCompany;
    component.item.contacts[0].contactInfo[0].value = testCompanyAddressPhone;
    fixture.detectChanges();
    let element = fixture.debugElement.query(By.css('.company-address-phone'));
    expect(element.nativeElement.textContent).toBe(testCompanyAddressPhone);
  });

  it('should display system load number', () => {
    let testSystemLoadNumber = '209282402';
    component.item = testCompany;
    component.item.loads[0].systemLoadNo = testSystemLoadNumber;
    fixture.detectChanges();
    let element = fixture.debugElement.query(By.css('.load-name'));
    expect(element.nativeElement.textContent).toMatch('LD' + testSystemLoadNumber);
  });

  it('should display company contact position', () => {
    let testCompanyContactPosition = 'Sales manager';
    component.item = testCompany;
    component.item.contacts[0].position = testCompanyContactPosition;
    fixture.detectChanges();
    let element = fixture.debugElement.query(By.css('.position'));
    expect(element.nativeElement.textContent).toMatch(testCompanyContactPosition);
  });

  it('should handle click', () => {
    component.item = testCompany;
    spyOn(component, 'onClick');
    let element = fixture.debugElement.query(By.css('.card-section'));
    element.nativeElement.click();
    expect(fixture.debugElement.componentInstance.onClick).toHaveBeenCalled();
  });

  it('should handle mouse leave', () => {
    component.item = testCompany;
    spyOn(component, 'onLeave').and.callThrough();
    let element = fixture.debugElement.query(By.css('.card-section'));
    fireMouseEvent(element.nativeElement, 'mouseleave');
    fixture.detectChanges();
    let statusTextElement = fixture.debugElement.query(By.css('.status-text'));

    expect(statusTextElement === null).toBeTruthy();
    expect(component.onLeave).toHaveBeenCalled();
  });

  it('should handle mouse enter', () => {
    component.item = testCompany;
    spyOn(component, 'onEnter').and.callThrough();
    let element = fixture.debugElement.query(By.css('.card-section'));
    fireMouseEvent(element.nativeElement, 'mouseenter');
    fixture.detectChanges();
    let statusTextElement = fixture.debugElement.query(By.css('.status-text'));

    expect(statusTextElement === null).toBeFalsy();
    expect(component.onEnter).toHaveBeenCalled();
  });

});
