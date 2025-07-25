import { Component, EventEmitter, inject, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { User } from "../../user-interface.component";



@Component({
    selector: 'app-create-edit-user-dialog',
    templateUrl: 'create-edit-user-dialog.component.html',
    styleUrl: 'create-edit-user-dialog.component.scss',
    standalone: true,
    imports: [ReactiveFormsModule, MatButtonModule, MatInputModule, MatIconModule, MatDialogClose],
})

export class CreateEditUserDialogComponent{
    readonly data = inject<{user : User, isEditMode: boolean}>(MAT_DIALOG_DATA);
    readonly dialogRef = inject(MatDialogRef<CreateEditUserDialogComponent>);

    isEditMode = this.data?.isEditMode;


    public form = new FormGroup({
        name: new FormControl(this.data?.user.name,[Validators.required, Validators.minLength(3)]),
        email: new FormControl(this.data?.user.email,[Validators.required, Validators.email]),
        website: new FormControl(this.data?.user.website,[Validators.required, Validators.minLength(3)]),
        companyName: new FormControl(this.data?.user.company.name,[Validators.required, Validators.minLength(2)]),
    });

    get userWithUpdatedFields(): {
        name?:string | null, 
        email?:string | null, 
        website?:string | null,  
        id: number | null,
        company?: {
            name?: string | null 
        } 
        
    }{
        return {
            ...this.form?.value,
            id: this.data?.user.id,
            company: {
                 name: this.form?.value.companyName
            }
        }
    }

    onSubmit(): void {
        if (this.form.valid) {
            this.dialogRef.close(this.form.value); // Возвращаем данные формы
        } 
    }

    onCancel(): void {
        this.dialogRef.close(); // Закрываем без сохранения
    }
}