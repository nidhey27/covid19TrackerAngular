import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashcards',
  templateUrl: './dashcards.component.html',
  styleUrls: ['./dashcards.component.css']
})
export class DashcardsComponent implements OnInit {

  @Input('confirmed')
  confirmed;
  @Input('deaths')
  deaths;
  @Input('recovered')
  recovered;

  constructor() { }

  ngOnInit() {
  }

}
