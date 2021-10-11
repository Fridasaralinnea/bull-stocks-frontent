import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import { Subject } from "rxjs";
// import { map } from "rxjs/operators";
import { HomeService } from './home.service';
import { first } from "rxjs/operators";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

    stockdata = {
        IBM: 0,
        SAAB: 0,
        BMW: 0,
        TLS: 0,
        SWDB: 0,
        AXF: 0,
        ZEGA: 0,
        AVZA: 0,
        SCA: 0,
        CLO: 0,
    };

    // ROOT_URL = "https://socket-server.fridasaralinnea.me/";
    ROOT_URL = "http://localhost:8333/";

    constructor(
        private http: HttpClient,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private homeService: HomeService) {
            for (const [key, value] of Object.entries(this.stockdata)) {
                this.http.get(this.ROOT_URL + key).toPromise().then(data => {
                    console.log("------------------");
                    console.log(data);
                    this.stockdata[key] = data;
                    console.log(key, ": ", this.stockdata[key]);
                });
            };
        }

    ngOnInit() {
        // this.homeService.messages().subscribe(
        //     msg => {
        //         console.log(msg);
        //         this.messagesArray.push(msg);
        //         console.log(this.messagesArray);
        //     }
        // )
    }

    setUserNick() {
        // console.log(this.nick);
        // this.userNick = this.nick;
        // this.message = this.nick + " just logged in.";
        // this.sendMessage();
    }

    unsetUserNick() {
        // this.userNick = "";
    }

    sendMessage() {
        // var today = new Date();
        // var msg = {
        //     "message": this.message,
        //     "user": this.userNick,
        //     "time": today.getHours() + ":" + today.getMinutes()
        // }
        // console.log(msg);
        // this.homeService.sendMessage(msg);
        // this.message = "";
    }

    ngOnDestroy() {
    }
}
