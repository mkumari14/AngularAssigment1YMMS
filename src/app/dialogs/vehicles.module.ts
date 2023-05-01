import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { VehiclesService } from './vehicles.serive';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [ConfirmDialogComponent],
  exports: [ConfirmDialogComponent],
  providers: [VehiclesService],
})
export class FitmentModule {}
