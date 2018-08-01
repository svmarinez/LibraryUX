import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* import { FileSelectDirective } from 'ng2-file-upload'; */
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { FormfetchService } from './services/formfetch.service';
import { HomeComponent } from './components/home/home.component';
import { UxhomeComponent } from './components/uxhome/uxhome.component';
import { UxpagesComponent } from './components/uxpages/uxpages.component';

@NgModule({
  declarations: [
    AppComponent,
    /* FileSelectDirective, */
    FormComponent,
    HomeComponent,
    UxhomeComponent,
    UxpagesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [FormfetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
