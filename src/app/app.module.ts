import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule} from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { SubDomainComponent } from './sub-domain/sub-domain.component';
import { HomeComponent } from './home/home.component';
import { routing } from './routing';
import { CategoryComponent } from './home/category/category.component';
import { LogInComponent } from './log-in/log-in.component';
import {AuthService } from './services/auth-service.service';
import { AuthGuard } from './services/authGuard';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SubDomainComponent,
    HomeComponent,
    CategoryComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
ReactiveFormsModule,
routing
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule {}
