import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './page/app/app.component';
import {RouterModule} from '@angular/router';
import {MobileAppRoutes} from './app.routes';
import {PageOneComponent} from './page/page-one/page-one.component';
import {PageTwoComponent} from './page/page-two/page-two.component';
import {NavController} from './providers/nav-controller';
import {AngularDelegate} from './providers/angular-delegate';
import {IonRouterDirective} from './directives';
import {IonBackButtoncomponent} from './directives/ion-back-button';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    IonRouterDirective,
    IonBackButtoncomponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MobileAppRoutes)
  ],
  providers: [
    NavController,
    AngularDelegate
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
