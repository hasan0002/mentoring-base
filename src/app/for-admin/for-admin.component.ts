import { Component, inject } from "@angular/core";
import { AuthService } from "../userAuth.service";

@Component({
    selector: 'app=admin',
    templateUrl: './for-admin.component.html',
    standalone: true,
})
export class ForAdminComponent{
    readonly User = inject(AuthService);
}