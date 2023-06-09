import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Injectable()
export class DialogsService {

    constructor(private dialog: MatDialog) { }

    // public confirm(title: string, message: string): Observable<boolean> {

    //     let dialogRef: MatDialogRef<ConfirmDialogComponent>;

    //     dialogRef = this.dialog.open(ConfirmDialogComponent);

    //     dialogRef.componentInstance.title = title;
    //     dialogRef.componentInstance.message = message;

    //     return dialogRef.afterClosed();
    // }

    public openModal():Observable<boolean>{
      let dialogRef: MatDialogRef<ConfirmDialogComponent>;
        dialogRef = this.dialog.open(ConfirmDialogComponent);
        return dialogRef.afterClosed();

    }
}
