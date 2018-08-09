import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { SignupComponent } from '../components/signup/signup.component';
import { LoginComponent } from '../components/login/login.component';
import { UserHomeComponent } from '../components/user-home/user-home.component';
import { UserEditComponent } from '../components/user-edit/user-edit.component';
import { LibHomeComponent } from '../components/lib-home/lib-home.component';
import { LibraryAddComponent } from '../components/library-add/library-add.component';
import { LibraryEditComponent } from '../components/library-edit/library-edit.component';
import { UxhomeComponent } from '../components/uxhome/uxhome.component';
import { MapComponent } from '../components/map/map.component';
import { SurveyComponent } from '../components/survey/survey.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'user', component: UserHomeComponent },
    { path: 'user/edit', component: UserEditComponent },
    { path: 'lib/:id', component: LibHomeComponent },
    { path: 'libAdd', component: LibraryAddComponent },
    { path: 'lib/edit', component: LibraryEditComponent },
    { path: 'map', component: MapComponent },
    { path: 'survey/:id', component: SurveyComponent },
    { path: 'uxHome', component: UxhomeComponent }
];

