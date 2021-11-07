import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuComponent } from './components/menu/menu.component';

const importExport: any[] = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule
];


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    ...importExport
  ],
  exports: [
    ...importExport,
    MenuComponent
  ]
})
export class SharedModule { }
