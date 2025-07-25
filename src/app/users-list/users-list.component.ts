import { Component, inject } from "@angular/core";
import { AsyncPipe, NgFor } from "@angular/common";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { usersService } from "../users.service";
import { User } from "../user-interface.component";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateEditUserDialogComponent } from "./create-edit-user-dialog/create-edit-user-dialog.component";

@Component({
    selector: "app-users-list",
    imports: [NgFor, UserCardComponent, AsyncPipe, MatButtonModule],
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    standalone: true,
})

export class UsersListComponent{
    readonly usersApiService = inject(UsersApiService);
    readonly usersService = inject(usersService);
    readonly dialog = inject(MatDialog);

    openDialog(): void {
        const dialogRef = this.dialog.open(CreateEditUserDialogComponent);
        
        dialogRef.afterClosed().subscribe((Createresult : User) =>{
            console.log('The dialog was closed', Createresult);
            this.usersService.createUser(Createresult);
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
    }

     public editUser(user: User){
        this.usersService.editUser({
            ...user,
            company:{
                name: user.company.name
            }
        });
        // console.log(user.company.name)
    }

    public createUser(formData: User){
        this.usersService.createUser({
            id: new Date().getTime(),
            name: formData.name,
            email: formData.email,
            website: formData.website,
            company:{
                name: formData.company.name,
            }
        });
    }
}