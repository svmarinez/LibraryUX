import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { routes } from './routes/routes';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
/* import { FileSelectDirective } from 'ng2-file-upload'; */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UxhomeComponent} from './components/uxhome/uxhome.component';
import { UxpagesComponent } from './components/uxpages/uxpages.component';
import { FormComponent } from './components/form/form.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { LibraryEditComponent } from './components/library-edit/library-edit.component';
import { SessionService } from './services/session.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    /* FileSelectDirective, */
    HomeComponent,
    FormComponent,
    UxhomeComponent,
    UxpagesComponent,
    SignupComponent,
    LoginComponent,
    UserEditComponent,
    LibraryEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
