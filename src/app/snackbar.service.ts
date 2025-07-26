import { Injectable, inject } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})

export class SnackBarService{
    private _snackBar = inject(MatSnackBar);

    openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
        duration: 7000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
    });
  }
}