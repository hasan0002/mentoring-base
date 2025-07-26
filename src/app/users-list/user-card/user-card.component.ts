import { Component, EventEmitter, inject, Input, Output} from "@angular/core";
import { User } from "../../user-interface.component";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from '@angular/material/dialog';
import { CreateEditUserDialogComponent } from "../create-edit-user-dialog/create-edit-user-dialog.component";


@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
    imports: [MatButtonModule],
    standalone: true,
})

export class UserCardComponent{
    @Input()
    user!: User;

    @Output()
    deleteUser = new EventEmitter<number>();

    @Output()
    editUser = new EventEmitter<User>(); 

    readonly dialog = inject(MatDialog);
    isEditMode = true;

    openDialog(): void {
    const dialogRef = this.dialog.open(CreateEditUserDialogComponent, {
      data: { user: this.user, isEditMode: this.isEditMode },
    });
    
    dialogRef.afterClosed().subscribe((editResult : User) =>{
        if(!editResult) return;
        this.editUser.emit(editResult);
    });
  }

   onDeleteUser(userId: number){
        this.deleteUser.emit(userId)
    }


}