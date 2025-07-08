import { ChangeDetectionStrategy, Component, inject, input} from "@angular/core";
import { AsyncPipe, NgFor } from "@angular/common";
import { isNgTemplate } from "@angular/compiler";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { usersService } from "../users.service";
import { CreateUserFormComponent } from "../create-user-form/create-user-form.component";

export interface User {
    id:        number;
    name:      string;
    username?:  string,
    email:     string,
    address?: {
        street:   string,
        suite:    string,
        city:     string,
        zipcode:  number,
        geo: {
            lat: number,
            lng: number
      }
    },
    phone?:   number,
    website: string,
    company: {
        name:        string,
        catchPhrase?: string,
        bs?:          string
    }
}

@Component({
    selector: "app-users-list",
    imports: [NgFor,UserCardComponent, AsyncPipe, CreateUserFormComponent],
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    standalone: true,
})

export class UsersListComponent{
    readonly usersApiService = inject(UsersApiService);
    readonly usersService = inject(usersService);

    constructor(){
        this.usersApiService.getUsers().subscribe(
            (response: any) => {
                this.usersService.setUsers(response);
            }
        )

        this.usersService.users$.subscribe()
    }

    public deleteUser(id: number){
        this.usersService.deleteUser(id);
    }

    public createUser(formData: User){
        this.usersService.createUser({
            id: new Date().getTime(),
            name: formData.name,
            email: formData.email,
            website: formData.website,
            company:{
                name: formData.name,
            }
        });
    }
}