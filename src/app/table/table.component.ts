import { Component, OnInit, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { TableService } from '../services/table.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [TableService]
})

export class TableComponent implements OnInit {

  paragraph:HTMLParagraphElement;
  trElement:HTMLTableRowElement;
  @Output('emitTrElement') sendDataEmitter = new EventEmitter<string>();
  message: string;
  users = this.tableService.users;

  constructor(private tableService: TableService, private el: ElementRef) { }

  ngOnInit(): void {
  }


    emitTrElement(trElement:any) {
    this.sendDataEmitter.emit(trElement);
  }

  // sendId(myId:any): void {
  //   console.log(myId.getAttribute('id'));
  //   this.sendDataEmitter.emit(myId.getAttribute('id'));
  // }



}
