import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

export interface UserLogIn {
    nickname: string,
    password: string,
    isAdmin: boolean,
}

@Injectable({
    providedIn: 'root',
})
export class AuthService{
    private readonly userSubject$ = new BehaviorSubject<UserLogIn | null>(null);
    public readonly user$ = this.userSubject$.asObservable();
    private router = inject(Router);
    
    private currentUser: UserLogIn = {
        nickname: '',
        password: '',
        isAdmin: false,
    }

    get isAdmin() {
        return this.userSubject$.value?.isAdmin;
    }

    loginAsAdmin(): void{
        this.userSubject$.next({ ...this.currentUser ,isAdmin: true });
    }

    loginAsUser(): void{
        this.userSubject$.next({ ...this.currentUser ,isAdmin: false });
    }

    logOut(): void{
        this.userSubject$.next(null);
        this.router.navigate(['/']);
    }
}