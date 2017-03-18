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
// import { routingHome } from './home/routingHome';
import { CategoryComponent } from './home/category/category.component';
import { LogInComponent } from './log-in/log-in.component';
// import { Ng2SelectModule } from 'ng2-material-select';
import {AuthService } from './services/auth-service.service';
import { AuthGuard } from './services/authGuard';
// import { PopoverModule } from 'ng2-popover';
// import {Ng2DragDropModule} from "ng2-drag-drop";

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
    //  PopoverModule,
    // Ng2DragDropModule
    // routingHome

  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule {}
