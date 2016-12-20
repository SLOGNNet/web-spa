import { Input, Output } from '@angular/core';
import { ViewMode } from '../../shared/enums';
import { BaseForm } from '../base-form';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

export abstract class BaseListForm<T> extends BaseForm {
   public static genericInputs: string[] = BaseForm.genericInputs;

   @Input()
   public items: Array<T>;
   @Input()
   public formArray: FormArray;
   private renderFormData: Array<any> = new Array<any>();

   constructor(private formBuilder: FormBuilder) {
     super();
   }

   ngOnChanges(changes: any) {
     if (changes.items) {
       this.initForm();
     }
   }

   initForm() {
     this.resetData();
     for (let item of this.items) {
       this.addData(item);
     }
   }

   addData(item: any): void {
     const group = this.formBuilder.group({});
     this.renderFormData.push({ group, item });
     this.formArray.push(group);
   }
   resetData() {
     this.renderFormData = new Array<any>();
     this.formArray.reset([]);
   }

   addNewItem() {
     this.addData(this.createItem());
   }

   onRemoveAddress(removeData) {
     this.renderFormData = this.renderFormData.filter(data => data !== removeData);
   }

   abstract createItem(): T;
}
