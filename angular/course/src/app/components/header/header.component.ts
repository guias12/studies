import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() pageSelected = new EventEmitter<string>();
  constructor(private dataStorageSer: DataStorageService) {}

  ngOnInit(): void {}

  onSelect(page: string) {
    this.pageSelected.emit(page);
  }

  onSaveData() {
    this.dataStorageSer.storeRecipes();
  }

  onFetchData() {
    this.dataStorageSer.fetchRecipes().subscribe();
  }
}
