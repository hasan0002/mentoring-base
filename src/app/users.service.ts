import { Injectable, inject} from "@angular/core";
import {SnackBarService} from './snackbar.service';
import { User } from "./user-interface.component"
import { BehaviorSubject, map } from "rxjs";

@Injectable({providedIn: 'root'})
export class usersService {
    private _snackBar = inject(SnackBarService);
    private usersSubject$ = new BehaviorSubject<User[]>([]);
    users$ = this.usersSubject$.asObservable();

    setUsers(users: User[]){    
        this.usersSubject$.next(users);
    }

    editUser(editedUser: User){
        this.usersSubject$.next(
            this.usersSubject$.value.map(
                (user: User) => (user.id === editedUser.id) ? editedUser : user
            )
        )
        this._snackBar.openSnackBar(`Пользователь успешно отредактирован!`, 'Закрыть');
    }

    createUser(addUser: User){
        const userExisting: User | undefined = this.usersSubject$.value.find(
            (currentElement: User) => currentElement.email === addUser.email
        );
        if(userExisting) {
            alert('ТАКОЙ EMAIL УЖЕ ЗАРЕГИСТРИРОВАН');
        } else {
            this.usersSubject$.next([...this.usersSubject$.value, addUser]) 
            this._snackBar.openSnackBar(`Пользователь ${addUser.name} успешно создан!`, 'Закрыть');
        }
    }

    deleteUser(idUser: number){
         this.usersSubject$.next(this.usersSubject$.value.filter(
                (user: User) => idUser !== user.id
            )
         )
        this._snackBar.openSnackBar(`Пользователь успешно удален!`, 'Закрыть');
    }
}
