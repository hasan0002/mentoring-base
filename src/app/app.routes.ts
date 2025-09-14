import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { TodosListComponent } from './todos-list/todos-list.component';
import { ForAdminComponent } from './for-admin/for-admin.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path:'', component:MainPageComponent },
    { path: 'users', component: UsersListComponent },
    { path: 'todos', component: TodosListComponent },
    { path: 'admin', component: ForAdminComponent, canActivate: [authGuard]},
    
];
