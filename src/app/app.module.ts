import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HeaderElemComponent } from './elements/header-elem/header-elem.component';
import { DataBlockElemComponent } from './elements/data-block-elem/data-block-elem.component';
import {RouterModule} from "@angular/router";


const router = [
  {path: '', component: IndexPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'contacts', component: ContactsPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    ContactsPageComponent,
    AboutPageComponent,
    HeaderElemComponent,
    DataBlockElemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
