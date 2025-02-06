import { NgIf,  NgFor } from '@angular/common';
import { Element } from '@angular/compiler';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UsersListComponent } from './users-list/users-list.component';
import { count } from 'rxjs';
import { FooterBlockComponent } from './footer-block/footer-block.component';
import { MainPageComponent } from './main-page/main-page.component';


 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterBlockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';
  
}
