import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MenuItem } from "@interfaces/menu-items.interface";

@Component({
  selector: 'app-menu',
  template: `
    <div class="menuWrapper">
      <ng-container *ngFor="let item of menuItems">
        <button mat-raised-button>{{item.text}}</button>
      </ng-container>
    </div>
  `,
  styles: [`
    :host { 
      display: block;

      .menuWrapper {
        display: flex;
        flex-direction: column;
        padding: 0 10px;

        &>button {
          margin-top: 5px;
        }
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  @Input() menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
