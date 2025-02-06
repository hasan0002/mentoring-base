import { Component, inject, input} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgFor } from "@angular/common";
import { isNgTemplate } from "@angular/compiler";

interface Users {
    id:        number;
    name:      string;
    username:  string,
    email:     string,
    address: {
        street:   string,
        suite:    string,
        city:     string,
        zipcode:  number,
        geo: {
            lat: number,
            lng: number
      }
    },
    phone:   number,
    website: string,
    company: {
        name:        string,
        catchPhrase: string,
        bs:          string
    }
}

@Component({
    selector: "app-users-list",
    imports: [NgFor],
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    standalone: true,
})

export class UsersListComponent{
    readonly apiService = inject(HttpClient);
    
    users: Users[] = [];

    constructor(){
        this.apiService.get<Users[]>('https://jsonplaceholder.typicode.com/users').subscribe(
            (response) => {
                this.users = response;
                console.log('USERS: ', this.users);
            }
        )
    }
    deleteUser(id: number){
        this.users = this.users.filter(
            item => (id === item.id) ? false : true
        )
    }
}