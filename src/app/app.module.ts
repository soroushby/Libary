import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';

import { ContactUsComponent } from './contact-us/contact-us.component';


import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthModule } from '@auth0/auth0-angular';

import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './login/user-profile/user-profile.component';




@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    LoginComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    AuthModule.forRoot({
      domain: 'dev-e4qhu3di.auth0.com',
      clientId: 'aQVLyzpa4F8QXtxXaB6Vil7Ql7UnA5eO'
    }),

   MaterialModule,
   FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
