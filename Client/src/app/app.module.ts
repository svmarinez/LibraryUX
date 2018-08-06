import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './routes/routes';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UxhomeComponent } from './components/uxhome/uxhome.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { LibraryEditComponent } from './components/library-edit/library-edit.component';
import { SessionService } from './services/session.service';
import { HttpModule } from '@angular/http';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { SurveyComponent } from './components/survey/survey.component';
import { LibraryAddComponent } from './components/library-add/library-add.component';
import { LibHomeComponent } from './components/lib-home/lib-home.component';
import { environment } from '../environments/environment';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    LibraryAddComponent,
    LibraryEditComponent,
    UserHomeComponent,
    UserEditComponent,
    UxhomeComponent,
    SurveyComponent,
    LibHomeComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey,
      libraries: ['places']
    })
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
