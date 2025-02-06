import { Component, NgModule } from "@angular/core";
import { AppComponent } from "../app.component";
import { NgFor, NgIf } from "@angular/common";
import { RouterLink } from "@angular/router";

function CreateField(MenuItem:string)
{
  return MenuItem;
}
const MenuItemm:string = CreateField('О компании');
class aboutCompany{
  constructor(public name:string){}
}

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [NgFor,NgIf, RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})

export class HeaderComponent{
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