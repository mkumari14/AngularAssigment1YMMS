import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {ObserversModule} from '@angular/cdk/observers';
import { DialogsModule } from './dialogs/dialogs.module';
import {MatTabsModule} from '@angular/material/tabs';
import { VehiclesService } from './dialogs/vehicles.serive';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    ObserversModule,
    MatTabsModule,
    DialogsModule

  ],
  providers: [VehiclesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
