import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "../header/header.component";
import { FooterBlockComponent } from "../footer-block/footer-block.component";

@Component({
    selector: 'app-main-page',
    standalone: true,
    imports:[RouterOutlet,NgFor, NgIf, HeaderComponent,FooterBlockComponent],
    templateUrl: 'main-page.component.html',
    styleUrl: 'main-page.component.scss',
})
export class MainPageComponent{
    isShowPhoto = true; // 2 task

    readonly newPages = [5,4,3,2,1]; //3 task
    
}