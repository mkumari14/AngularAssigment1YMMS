import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
   buttonclicked = false;
   year=true;
   make=false;
   model=false;
   style=false;
   managerActive= true;
    public title: string | undefined;
    public message!: string;
    constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {

    }

    Todo(){
      alert("Helllo")
    }
    getPromoStyles() {
      this.buttonclicked=true;
      // if (this.buttonclicked=true) {
      //   return 'display:none';
      // }
      // else{
      //   return
      // }
    }

    onTabClick(e:any){
      console.log(e)
      switch(e) {
        case 'year':
          this.make=true;
          this.year=false;
          this.model=false;
          this.style=false
          break;
        case 'make':
          this.make=false;
          this.year=false;
          this.model=true;
          this.style=false
          break;
        case 'model':
          this.make=false;
          this.year=false;
          this.model=false;
          this.style=true;
          break;
        case 'style':
          this.make=false;
          this.year=false;
          this.model=false;
          this.style=true
          break;
        default:
          return
      }
    }
}
