import { Component } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'bull-stocks-frontend';

    isLoggedIn: boolean;

    constructor(
        private accountService: LoginService) {}

    ngAfterContentChecked() {
        this.isLoggedIn = this.accountService.isLoggedIn();
    }
}
