import { Component, inject } from "@angular/core";
import { AsyncPipe, NgFor } from "@angular/common";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { usersService } from "../users.service";
import { User } from "../user-interface.component";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateEditUserDialogComponent } from "./create-edit-user-dialog/create-edit-user-dialog.component";
import { SnackBarService } from '../snackbar.service';

@Component({
    selector: "app-users-list",
    imports: [NgFor, UserCardComponent, AsyncPipe, MatButtonModule],
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    standalone: true,
})

export class UsersListComponent{
    readonly _snackBar = inject(SnackBarService);
    readonly usersApiService = inject(UsersApiService);
    readonly usersService = inject(usersService);
    readonly dialog = inject(MatDialog);

    openDialog(): void {
        const dialogRef = this.dialog.open(CreateEditUserDialogComponent);
        
        dialogRef.afterClosed().subscribe((createResult : User) =>{
                this.usersService.createUser({
                id: new Date().getTime(),
                name: createResult.name,
                email: createResult.email,
                website: createResult.website,
                company:{
                    name: createResult.company.name,
                }
            });
            this._snackBar.openSnackBar(`Пользователь ${createResult.name} успешно создан!`, 'Закрыть');
        });
   }

    constructor(){
        this.usersApiService.getUsers().subscribe(
            (response: any) => {
                this.usersService.setUsers(response);
            }
        )
    }

    public deleteUser(id: number){
        this.usersService.deleteUser(id);
        this._snackBar.openSnackBar(`Пользователь успешно удален!`, 'Закрыть');
    }

     public editUser(user: User){
        this.usersService.editUser({
            ...user,
            company:{
                name: user.company.name
            }
        });
        this._snackBar.openSnackBar(`Пользователь успешно отредактирован!`, 'Закрыть');
    }
}