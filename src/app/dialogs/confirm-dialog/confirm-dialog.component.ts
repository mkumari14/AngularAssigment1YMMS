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
   year=true;
   yearsData$:Observable<any> | undefined;
   makesData$:Observable<any>|any;
   modelsData$:Observable<any>|any;
   stylesData$: Observable<any> |any;
   make=false;
   model=false;
   style=false;
   managerActive= true;
    public title: string | undefined;
    public message!: string;
    constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>, private vehicleService: VehiclesService) {

    }

    Todo(){
      alert("Helllo")
    }
    getVehiclesData() {
      this.buttonclicked=true;
      this.yearsData$=this.vehicleService.getData("years");
      //this.yearsData$= Object.values(this.vehicleService.getData("years"))[4];
      // this.vehicleService.getData("years").subscribe(res=> this.yearsData=res)
      console.log("years======>", this.yearsData$)
    }

    ngOnInit() {
      // this.vehicleService.getData("years").subscribe(res=> this.yearsData=res.year)
      // console.log("years======>", this.yearsData)
      }
    onTabClick(e:any){
      console.log(e)
      switch(e) {
        case 'year':
          this.make=true;
          this.year=false;
          this.model=false;
          this.style=false
          this.makesData$=this.vehicleService.getData("makes");
          console.log("makes======>", this.makesData$)
          break;
        case 'make':
          this.make=false;
          this.year=false;
          this.model=true;
          this.style=false
         this.modelsData$= this.vehicleService.getData("models")
          console.log("models======>", this.modelsData$);
          break;
        case 'model':
          this.make=false;
          this.year=false;
          this.model=false;
          this.style=true;
         this.stylesData$= this.vehicleService.getData("trim");
          console.log("syles======>", this.stylesData$)
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
