import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu-title',
    templateUrl: './menu-title.component.html',
    styleUrls: [
        './menu-title.component.scss',
        './menu-title.responsive.component.css'
    ],
    standalone: false
})
export class MenuTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
