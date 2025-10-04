import { Component, inject } from "@angular/core";
import { AsyncPipe, NgFor } from "@angular/common";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { User } from "../user-interface.component";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from '@angular/material/dialog';
import { CreateEditUserDialogComponent } from "./create-edit-user-dialog/create-edit-user-dialog.component";
import { SnackBarService } from '../snackbar.service';
import { Store } from "@ngrx/store";
import { UserActions } from "./store/user.actions";
import { selectUsers } from "./store/user.selectors";

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
    readonly dialog = inject(MatDialog);
    private readonly store = inject(Store);
    public readonly users$ = this.store.select(selectUsers);

    openDialog(): void {
        const dialogRef = this.dialog.open(CreateEditUserDialogComponent);
        
        dialogRef.afterClosed().subscribe((createUser : User) =>{
            this.store.dispatch(
                UserActions.create({
                    user: {
                        id: new Date().getTime(),
                        name: createUser.name,
                        email: createUser.email,
                        website: createUser.website,
                        company: {
                            name: createUser.company.name,
                        },
                        phone: createUser.phone
                    },
                })
            );
            this._snackBar.openSnackBar(`Пользователь ${ createUser.name } успешно создан!`, 'Закрыть');
        });
   }

    constructor(){
        this.usersApiService.getUsers().subscribe(
            (response: any) => {
                this.store.dispatch(UserActions.set({ users: response }));
            }
        )
    }

    public deleteUser(id: number){
        this.store.dispatch(UserActions.delete({ id }));
        this._snackBar.openSnackBar(`Пользователь успешно удален!`, 'Закрыть');
    }

     public editUser(user: User){
        this.store.dispatch(UserActions.edit({ user }));
        this._snackBar.openSnackBar(`Пользователь успешно отредактирован!`, 'Закрыть');
    }
}