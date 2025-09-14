import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-main-page',
    standalone: true,
    imports:[RouterOutlet,NgFor, NgIf],
    templateUrl: 'main-page.component.html',
    styleUrl: 'main-page.component.scss',
})
export class MainPageComponent{
    isShowPhoto = true; 

    readonly newPages = [5,4,3,2,1]; 
    
}