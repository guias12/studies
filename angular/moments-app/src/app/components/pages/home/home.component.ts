import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/service/moment.service';
import { Moment } from 'src/app/models/Moment';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  momentList: Moment[] = [];
  filteredMoments: Moment[] = [];
  baseApiUrl = environment.baseApiUrl;

  faSearch = faSearch;
  searchTerm: string = '';

  constructor(private momentService: MomentService) {}

  ngOnInit(): void {
    this.momentService.fetchMoments().subscribe((list) => {
      console.log(list);
      const data = list.data;
      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString(
          'pt-BR'
        );
      });

      this.momentList = data;
      this.filteredMoments = data;
    });
  }

  search(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.filteredMoments = this.momentList.filter((moment) => {
      return moment.title
        .toLocaleLowerCase()
        .includes(value.toLocaleLowerCase());
    });
  }
}
