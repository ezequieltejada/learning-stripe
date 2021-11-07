import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const importExport: any[] = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
];


@NgModule({
  declarations: [],
  imports: [
    ...importExport,
    CommonModule
  ],
  exports: [
    ...importExport
  ]
})
export class SharedModule { }
