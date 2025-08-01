import { Component, NgModule } from "@angular/core";
import { AppComponent } from "../app.component";
import { DatePipe, NgFor, NgIf } from "@angular/common";
import { RouterLink } from "@angular/router";

function CreateField(MenuItem:string)
{
  return MenuItem;
}
const MenuItem:string = CreateField('О компании');


@Component({
    selector: 'app-header',
    standalone: true,
    imports: [NgFor,NgIf, RouterLink, DatePipe],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})

export class HeaderComponent{
    isShowCatalog = true;
    readonly Header1Item1: string = 'Главная';
    readonly Header1Item2: string = 'О компании';
    readonly Header1Item3: string = 'Каталог';
    
    readonly Header12: string = MenuItem; //1 task

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
  
  myDate: Date = new Date();
}