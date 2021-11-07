import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@interfaces/menu-items.interface';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
