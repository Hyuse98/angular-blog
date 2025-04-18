import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-small-card',
    templateUrl: './small-card.component.html',
    styleUrls: ['./small-card.component.scss'],
    standalone: false
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover:string = ""

  @Input()
  cardTitle:string = ""

  @Input()
  Id:number=0

  constructor() { }

  ngOnInit(): void {
  }

}
