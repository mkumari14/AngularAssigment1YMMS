import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { VehiclesService } from '../vehicles.serive';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
   buttonclicked = false;
   yearTab=true;
   yearsData$:Observable<[]> | any;
   makesData$:Observable<[]>|any;
   modelsData$:Observable<[]>|any;
   stylesData$: Observable<[]> |any;
   selectInstruction:String | any;
   makeTab=false;
   modelTab=false;
   styleTab=false;
   selectedYear='';
   selectedMake= '';
   selectedModel='';
   selectedStyle='';
    public title: string | undefined;
    public message!: string;
    constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>, private vehicleService: VehiclesService) {
    }
    getVehiclesData() {
      this.buttonclicked=true;
      this.yearsData$=this.vehicleService.getData("year");
      console.log("years======>", this.yearsData$)
    }
    ngOnInit() {
      }
    onTabChange(tabName:any, selectedVal:any, reqestingDataVal:any){
      switch(tabName) {
        case 'year':
          this.selectedYear=selectedVal;
          this.makeTab=true;
          this.yearTab=false;
          this.modelTab=false;
          this.styleTab=false
          this.makesData$=this.vehicleService.getData(reqestingDataVal);
          this.selectInstruction=reqestingDataVal
          console.log("makes======>", this.makesData$)
          break;
        case 'make':
          this.selectedMake=selectedVal;
          this.makeTab=false;
          this.yearTab=false;
          this.modelTab=true;
          this.styleTab=false
         this.modelsData$= this.vehicleService.getData(reqestingDataVal)
          console.log("models======>", this.modelsData$);
          this.selectInstruction=reqestingDataVal
          break;
        case 'model':
          this.selectedModel=selectedVal;
          this.makeTab=false;
          this.yearTab=false;
          this.modelTab=false;
          this.styleTab=true;
         this.stylesData$= this.vehicleService.getData(reqestingDataVal);
          console.log("styles======>", this.stylesData$)
          this.selectInstruction=reqestingDataVal
          break;
        case 'style':
          this.selectedStyle=selectedVal;
          this.makeTab=false;
          this.yearTab=false;
          this.modelTab=false;
          this.styleTab=true
          break;
        default:
          return
      }
    }
    startOver (){
      console.log("hello")
      this.buttonclicked = false;
      this.yearTab=true;
      this.makeTab=false;
      this.modelTab=false;
      this.styleTab=false
      this.selectedYear='';
      this.selectedMake= '';
      this.selectedModel='';
      this.selectedStyle='';
    }
}
