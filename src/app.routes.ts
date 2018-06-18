import {Routes} from '@angular/router';
import {PageOneComponent} from './page/page-one/page-one.component';
import {PageTwoComponent} from './page/page-two/page-two.component';

export const MobileAppRoutes: Routes = [
  {path: '', component: PageOneComponent},
  {path: 'one', component: PageOneComponent},
  {path: 'two', component: PageTwoComponent}
];

