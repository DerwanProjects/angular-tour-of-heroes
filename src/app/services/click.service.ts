import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickService {

  private counter:number = 0;
  // 1. zmienna która przechowuje flage true/false czy click został wykonany
  isClicked: boolean = false;
  // 2. metoda wyświetla w console.log jaki element został kliknięty
  showClickedElement(element: HTMLButtonElement) {
    if (!this.isClicked) {
      return;
    }
    console.log(element);
  }

  increaseCounter() {
    this.counter++;
    console.log(this.counter);
  }
  getCounter() {
    return this.counter;
  }


  constructor() { }
}

