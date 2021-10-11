import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Custom services
import { RegisterService } from './register/register.service';
import { LoginService } from './login/login.service';


// Custom components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    // { path: 'reports', component: ReportComponent, pathMatch: 'prefix' },
    // { path: 'reports/week', component: ReportComponent, pathMatch: 'full' },
    // { path: 'reports/week/1', component: ReportComponent, pathMatch: 'full' },
    // { path: 'reports/week/2', component: ReportComponent, pathMatch: 'full' },
    // { path: 'reports/week/3', component: ReportComponent, pathMatch: 'full' },
    // { path: 'reports/week/4', component: ReportComponent, pathMatch: 'full' },
    // { path: 'reports/week/5', component: ReportComponent, pathMatch: 'full' },
    // { path: 'reports/week/6', component: ReportComponent, pathMatch: 'full' },
    // { path: 'reports/week/10', component: ReportComponent, pathMatch: 'full' },
    // { path: 'reports/edit/:kmom', component: EditComponent, pathMatch: 'full' },
    { path: 'register', component: RegisterComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'logout', component: LogoutComponent, pathMatch: 'full' }
    // { path: 'chat', component: ChatComponent, pathMatch: 'full' },

    // { path: '**', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent
  ],
  imports: [
      RouterModule,
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      ),
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule
  ],
  providers: [
      RegisterService,
      LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
