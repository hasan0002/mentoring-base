import { Injectable} from "@angular/core";
import { User } from "./users-list/users-list.component"
import { BehaviorSubject, map } from "rxjs";

@Injectable({providedIn: 'root'})
export class usersService {
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
    }

    createUser(addUser: User){
        const userExisting: User | undefined = this.usersSubject$.value.find(
            (currentElement: User) => currentElement.email === addUser.email
        );
        if(userExisting) {
            alert('ТАКОЙ EMAIL УЖЕ ЗАРЕГИСТРИРОВАН');
        } else {
            this.usersSubject$.next([...this.usersSubject$.value, addUser]) 
            alert('НОВЫЙ ПОЛЬЗОВАТЕЛЬ УСПЕШНО ДОБАВЛЕН');
        }
    }

    deleteUser(idUser: number){
         this.usersSubject$.next(this.usersSubject$.value.filter(
                (user: User) => idUser !== user.id
            )
         )
    }
}
