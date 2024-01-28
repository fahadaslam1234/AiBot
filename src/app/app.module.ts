import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contactUs/contactUs.component';
import { PrivacyPolicyComponent } from './privacyPolicy/privacyPolicy.component';
import { UsecaseModule } from './usecase/usecase.module';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [					
    AppComponent,
      HomeComponent,
      ContactUsComponent,
      PrivacyPolicyComponent,
      AboutComponent,
      NavbarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    UsecaseModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
