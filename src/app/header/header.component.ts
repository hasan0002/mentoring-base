import { Component, inject, NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { YellowCartDirective } from '../directivee/yellow-cart.directive';
import { MatDialog } from '@angular/material/dialog';
import { EntranceDialogComponent } from './entrance-dialog/entrance-dialog.component';
import { AdminOrUser, AuthService } from '../userAuth.service';

function CreateField(MenuItem: string) {
  return MenuItem;
}
const MenuItem: string = CreateField('О компании');

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, DatePipe, YellowCartDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent{
  readonly dialog = inject(MatDialog);
  readonly authService = inject(AuthService);

  openDialog(): void {
    const dialogRef = this.dialog.open(EntranceDialogComponent);
    dialogRef.afterClosed().subscribe((result: AdminOrUser)=> {
      console.log('The dialog was closed', result);
    });
  }

  logOut(): void {
    this.authService.logOut();
    
    console.log('After LogOut: ', this.authService.isAdmin);
  }

  checkStatus() {
    console.log('Current isAdmin in AppComponent:', this.authService.isAdmin);
    alert('Status: ' + (this.authService.isAdmin ? 'Admin' : 'User')); // Видимый тест
  }

  isShowCatalog = true;
  readonly Header1Item1: string = 'Главная';
  readonly Header1Item2: string = 'О компании';
  readonly Header1Item3: string = 'Каталог';

  readonly Header12: string = MenuItem; 

  readonly newPages = [5, 4, 3, 2, 1]; 

  isUpperCase = false; 
  menuItems: string[] = [
    'Каталог',
    'Стройматериалы',
    'Инструменты',
    'Электрика',
    'Интерьер и одежда',
  ];
  changeMenuText() {
    this.menuItems = this.menuItems.map((item) =>
      this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    );
    this.isUpperCase = !this.isUpperCase;
  }

  myDate: Date = new Date();
}
