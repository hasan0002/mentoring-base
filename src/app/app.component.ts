import { NgIf,  NgFor } from '@angular/common';
import { Element } from '@angular/compiler';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { count } from 'rxjs';

function CreateField(MenuItem:string)
{
  return MenuItem;
}
const MenuItemm:string = CreateField('О компании');
class aboutCompany{
  constructor(public name:string){}
}

 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';
  isShowCatalog = true;
  readonly Header1Item1 = 'Главная';
  readonly Header1Item2 = 'О компании';
  readonly Header1Item3 = 'Каталог';
  
  readonly Header12: aboutCompany; //1 task
  constructor(){
    this.Header12=new aboutCompany(MenuItemm);
  }
  
  isShowPhoto = true; // 2 task

  readonly newPages = [5,4,3,2,1]; //3 task
  
  isUpperCase = false; //4 task
  menuItems = ['Каталог','Стройматериалы','Инструменты','Электрика','Интерьер и одежда']
  changeMenuText(){
    this.menuItems = this.menuItems.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase() 
    )
    this.isUpperCase = !this.isUpperCase;
  }

}
