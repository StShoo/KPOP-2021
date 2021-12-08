import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from './user.model';


@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogContentExampleDialog {

    constructor(@Inject(MAT_DIALOG_DATA) public data: User){

    }

    favorite(){
      
    }
}
