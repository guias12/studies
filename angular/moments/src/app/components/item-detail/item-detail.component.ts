import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../../service/list.service';
interface Animal {
  id: number;
  name: string;
  type: string;
}
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit {
  animal?: Animal;
  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnimal();
  }

  ngOnInit(): void {}

  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal));
  }
}
