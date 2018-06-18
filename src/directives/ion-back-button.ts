import {Component, Directive, ElementRef, HostListener, Input, Optional} from '@angular/core';
import { Router } from '@angular/router';
import { NavController, NavIntent } from '../providers/nav-controller';
import { IonRouterDirective } from '../directives/ion-router-outlet';

@Component({
  selector: 'ion-back-button',
  template: `
  <div>Back</div>
  `
})
export class IonBackButtoncomponent {

  @Input()
  set defaultHref(value: string) {
    this.elementRef.nativeElement.defaultHref = value;
  }
  get defaultHref() {
    return this.elementRef.nativeElement.defaultHref;
  }

  constructor(
    @Optional() private router: Router,
    @Optional() private routerOutlet: IonRouterDirective,
    private navCtrl: NavController,
    private elementRef: ElementRef,
  ) {}

  @HostListener('click', ['$event'])
  onClick(ev: Event) {
    if (this.routerOutlet && this.routerOutlet.canGoBack()) {
      this.routerOutlet.pop();
      ev.preventDefault();
    } else if (this.router && this.defaultHref != null) {
      this.navCtrl.setIntent(NavIntent.Back);
      this.router.navigateByUrl(this.defaultHref);
      ev.preventDefault();
    }
  }
}
