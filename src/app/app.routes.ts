import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UsersListComponent } from './users-list/users-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FooterBlockComponent } from './footer-block/footer-block.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'',component:MainPageComponent},
    {path: 'users', component: UsersListComponent,}

    
];
