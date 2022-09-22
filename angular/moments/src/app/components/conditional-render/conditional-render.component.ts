import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional-render',
  templateUrl: './conditional-render.component.html',
  styleUrls: ['./conditional-render.component.css'],
})
export class ConditionalRenderComponent implements OnInit {
  canShow: boolean = true;
  name: string = 'Mike';
  constructor() {}

  ngOnInit(): void {}
}
