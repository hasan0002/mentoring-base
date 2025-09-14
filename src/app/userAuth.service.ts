import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

export interface AdminOrUser{
    nickname: string,
    password: string,
    isAdmin: boolean | null,
}

@Injectable({
    providedIn: 'root',
})
export class AuthService{
    private readonly userSubject$ = new BehaviorSubject<AdminOrUser | null>(null);
    public readonly user$ = this.userSubject$.asObservable();
    private router = inject(Router);
    
    private currentUser: AdminOrUser = {
        nickname: '',
        password: '',
        isAdmin: null,
    }

    get isAdmin() {
        return this.userSubject$.value?.isAdmin;
    }

    loginAsAdmin(): void{
        this.userSubject$.next({ ...this.currentUser ,isAdmin: true });
        console.log('Logged in as admin', this.userSubject$.value);
    }

    loginAsUser(): void{
        this.userSubject$.next({ ...this.currentUser ,isAdmin: false });
        console.log('Logged in as user', this.userSubject$.value);
    }

    logOut(): void{
        this.userSubject$.next(null);
        this.router.navigate(['/']);
    }

}


    
//     userRole: string = ROLES.ADMIN;
//     
//     isAdmin(role: string): boolean {
//         return this.userRole === role;
//     }
// 
//     loginAsAdmin(){
//         this.userRole = ROLES.ADMIN
//         return true;
//     }
// 
//     loginAsUser(){
//         this.userRole = ROLES.USER
//         return false;
//     }