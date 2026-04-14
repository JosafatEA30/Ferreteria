import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  collapsed = true;
  catalogExpanded = false;

  loggedUserName = 'Usuario demo';

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
    if (this.collapsed) {
      this.catalogExpanded = false;
    }
  }

  toggleCatalog(event: Event): void {
    event.preventDefault();
    if (this.collapsed) {
      this.collapsed = false;
      this.catalogExpanded = true;
      return;
    }
    this.catalogExpanded = !this.catalogExpanded;
  }
}
