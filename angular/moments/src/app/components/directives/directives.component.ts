import { Component, OnInit } from '@angular/core';
import { ListService } from '../../service/list.service';

interface Animal {
  name: string;
  type: string;
  id: number;
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

  animals: Animal[] = [];

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter((a) => a.name !== animal.name);
    this.listService.remove(animal.id).subscribe();
  }

  ngOnInit(): void {}

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
