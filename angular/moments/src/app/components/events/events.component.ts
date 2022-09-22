import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  show = true;
  constructor() {}

  ngOnInit(): void {}

  toggleShowMessage(): void {
    this.show = !this.show;
  }
}
