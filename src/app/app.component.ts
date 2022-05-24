import { Component, ViewEncapsulation } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { mergeAll } from 'rxjs';
import { TableService } from './services/table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TableService]

})
export class AppComponent {

  trElement:HTMLTableRowElement;
  title = 'angular-tour-of-heroes';
  users = this.tableService.users;
  id:number = -1;

  constructor(private tableService: TableService) {

  }

  receiveTrElement(trElement:any): void {

    this.id = parseInt(trElement.getAttribute('id'),10);

  }

  removeParagraph() {
    this.id = -1;
  }

  // ale event emitter jest stosowany kiedy chcemy przesłać jakieś dane z dziecka do rodzica...
  // a tutaj nie potrzebujemy przesyłać danych bo rodzic już ma dostęp do tych danych z serwisu
  // skąd rodzic ma wiedzieć który rząd w tabeli został zaznaczony ?


}
