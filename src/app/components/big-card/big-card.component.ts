import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-big-card',
    templateUrl: './big-card.component.html',
    styleUrls: ['./big-card.component.scss'],
    standalone: false
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string =""
  @Input()
  cardTitle:string= ""
  @Input()
  cardDescription:string =""
  @Input()
  Id:number=0

  constructor() { }

  ngOnInit(): void {
  }

}
