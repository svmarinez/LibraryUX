import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'form', component: FormComponent },
    { path: 'uxhome', component: UxhomeComponent },
    { path: 'uxpages', component: UxpagesComponent }

];
