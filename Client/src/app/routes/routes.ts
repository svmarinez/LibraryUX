import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { SignupComponent } from '../components/signup/signup.component';
import { LoginComponent } from '../components/login/login.component';
import { UserHomeComponent } from '../components/user-home/user-home.component';
import { LibraryAddComponent } from '../components/library-add/library-add.component';
import { LibraryEditComponent } from '../components/library-edit/library-edit.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'user/:id', component: UserHomeComponent},
    { path: 'libAdd/:id', component: LibraryAddComponent},
    { path: 'libEdit/:id', component: LibraryEditComponent}
];

