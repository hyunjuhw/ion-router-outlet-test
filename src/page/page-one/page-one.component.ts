import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent {
  constructor(public router: Router) {
  }
}
