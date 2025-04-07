import { Component, OnInit } from '@angular/core';
import {Theme} from '../../../service/theme/theme.service';

@Component({
    selector: 'app-menu-bar',
    templateUrl: './menu-bar.component.html',
    styleUrls: ['./menu-bar.component.scss'],
    standalone: false
})
export class MenuBarComponent implements OnInit {

  constructor(private themeService: Theme) { }

  ngOnInit(): void {
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
