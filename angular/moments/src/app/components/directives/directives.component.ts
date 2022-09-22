import { Component, OnInit } from '@angular/core';

interface Animal {
  name: string;
  type: string;
}

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  color: string = 'red';
  size: number = 20;
  font: string = 'Arial';

  classes = ['first-class', 'second-class'];

  animals: Animal[] = [
    { name: 'Mike', type: 'Rooster' },
    { name: 'Foo', type: 'Dog' },
    { name: 'Bar', type: 'Cat' },
    { name: 'Baz', type: 'Horse' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
