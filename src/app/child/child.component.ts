import { Component, EventEmitter, Input, OnInit, Output, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterViewInit {

  @Input() parentMessage: string = '';
  @Output() messageEvent = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit('Hello from Child');
  }

  ngAfterViewInit() {

  }


}
