import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contactUs/contactUs.component';
import { PrivacyPolicyComponent } from './privacyPolicy/privacyPolicy.component';
import { GrammerCheckerComponent } from './usecase/grammerChecker/grammerChecker.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'ContactUs',
    component: ContactUsComponent
  },
  {
    path:'LegacyPrivacy',
    component: PrivacyPolicyComponent
  },
  {
    path:'Usecase',
    component: GrammerCheckerComponent
  },
  {
    path:'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
