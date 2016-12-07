import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NotificationService, CustomerService, SocketService, LoadService } from './services';
import { EnumHelperService } from './helpers';
import { CommonModule } from '@angular/common';
import { TypeaheadModule } from './components/typeahead/typeahead.module.ts';
import { BdDropdownComponent } from './components/bd-dropdown';
import { BdFormButtonComponent } from './components/bd-form-button';
import { BdTextareaAutosize } from './components/bd-input/autosize.directive';
import { BdInputComponent } from './components/bd-input';
import { BdSpinnerComponent } from './components/bd-spinner';
import { ExpandablePanelComponent } from './components/expandable-panel';
import { DropdownModule } from 'ng2-bootstrap/components/dropdown';
import { BdFormTypeaheadComponent } from './components/bd-form-typeahead';
import { BdFormBuilder, BdFormGroup, BdFormControl } from './forms';
@NgModule({
  providers: [
    NotificationService,
    LoadService,
    SocketService,
    CustomerService,
    EnumHelperService,
    BdFormBuilder
  ],
  declarations: [
    BdFormButtonComponent,
    BdDropdownComponent,
    BdTextareaAutosize,
    BdInputComponent,
    BdSpinnerComponent,
    BdFormTypeaheadComponent,
    ExpandablePanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule,
    DropdownModule,
    ReactiveFormsModule,
    HttpModule
  ],
  exports: [
    BdFormButtonComponent,
    BdTextareaAutosize,
    BdInputComponent,
    BdSpinnerComponent,
    BdDropdownComponent,
    BdFormTypeaheadComponent,
    TypeaheadModule,
    DropdownModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ExpandablePanelComponent
  ]

})
export class SharedModule { }
