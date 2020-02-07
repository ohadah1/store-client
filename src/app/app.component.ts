import {Component} from "@angular/core";

@Component({
  selector: "app-root",
  template: `
      <div class="top-bar">
        <div class="top-bar-left">
          <ul class="dropdown menu" data-dropdown-menu>
            <li class="menu-text">
              <a class="button large expanded"
                 routerLink="/manager">Manager</a>
            </li>
            <li class="menu-text">
              <a class="button large expanded"
                 routerLink="/">Shopping</a>
            </li>
            <li class="menu-text">
              <a class="button large expanded"
                 routerLink="/">Orders</a>
            </li>
          </ul>
        </div>
      </div>
      <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
