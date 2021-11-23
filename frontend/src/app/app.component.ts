import { Component } from '@angular/core';
import { MenuItem } from '@interfaces/menu-items.interface';

@Component({
  selector: 'app-root',
  template: `
  <mat-sidenav-container>
    <mat-sidenav mode="side" [opened]="sideNavOpened">
        <mat-toolbar></mat-toolbar>
        <app-menu [menuItems]="menuItems"></app-menu>
    </mat-sidenav>
    <mat-sidenav-content>
        <mat-toolbar>
            <button mat-icon-button (click)="sideNavOpened = !sideNavOpened">
                <mat-icon>menu</mat-icon>
            </button>
            <span>Home Component</span>
        </mat-toolbar>
        <section>
            <router-outlet></router-outlet>
        </section>
    </mat-sidenav-content>
  </mat-sidenav-container>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  sideNavOpened = false;
  menuItems: MenuItem[] = [
    {
      text: 'Text',
      url: 'url'
    },
    {
      text: 'Text',
      url: 'url'
    },
  ]
}
