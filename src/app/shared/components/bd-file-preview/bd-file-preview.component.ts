import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import * as moment from 'moment';

const DEFAULT_ELEMENT_WIDTH = 100, DATE_FORMAT = 'MM/DD/YYYY' ;

@Component({
  selector: 'bd-file-preview',
  styleUrls: ['bd-file-preview.component.scss'],
  templateUrl: './bd-file-preview.component.html'
})
export class BdFilePreviewComponent {

      private documentIssueDate: string;
      private titleText: string;
      private uploadProgress: number = 0;
      @Input() private document: File;
      @Input() private documentType: string;
      @Input() private newDocument: boolean = false;
      @Input() private itemIndex: number;
      @Input() private progress: any;

      @Output() private removeFile: EventEmitter<any> = new EventEmitter();

      constructor(private _cdr: ChangeDetectorRef){
      }

      ngOnInit(){
        this.titleText = this.documentType + ' (' + this.itemIndex + ')';
        this.documentIssueDate = moment(new Date()).format(DATE_FORMAT);
      }

      ngOnChanges(){
        if (this.newDocument) {
          this.uploadProgress = DEFAULT_ELEMENT_WIDTH - this.progress;
          this._cdr.markForCheck();
        }
      }

      onRemoveClick(event){
        this.removeFile.emit({
          action: 'remove',
          document: this.document
        });
      }

}
