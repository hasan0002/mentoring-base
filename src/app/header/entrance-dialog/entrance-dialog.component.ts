import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "../../userAuth.service";

@Component({
    selector: "app-entrance-dialog",
    templateUrl: "./entrance-dialog.component.html",
    styleUrl: "./entrance-dialog.component.scss",
    imports:[ReactiveFormsModule, MatButtonModule, MatInputModule],
    standalone: true
})
export class EntranceDialogComponent{
    readonly data = inject(MAT_DIALOG_DATA);
    readonly dialogRef = inject(MatDialogRef<EntranceDialogComponent>);
    readonly authService = inject(AuthService);
    readonly router = inject(Router);

    public form = new FormGroup({
        nickname: new FormControl(this.data?.nickname, [Validators.required, Validators.minLength(3)]),
        password: new FormControl(this.data?.password, [Validators.required, Validators.minLength(6)]),
    })

    loginAsAdmin() {
        this.authService.loginAsAdmin();
        this.dialogRef.close(this.form.value);
        this.router.navigate(['/admin']); 
    }
    
    loginAsUser() {
        this.authService.loginAsUser();
        this.dialogRef.close(this.form.value); 
    }
    
    onClose(): void {
        this.dialogRef.close(); 
    }
}