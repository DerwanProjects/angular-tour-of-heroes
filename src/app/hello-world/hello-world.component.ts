import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements
OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  title: string = 'Hello World';
  //@ts-ignore
  intervalSub: NodeJS.Timeout;
  user = {
    name: 'Lena',
    age: 2
  };

  constructor() {
    console.log('1 Hook');
  }
  getMin(a:number,b: number): number {
    if (a < b) {
      return a;
    }
    return b;
  }
  ngOnDestroy(): void { // To muszę znać kompletnie
    console.log('9 Hook');
    this.intervalSub ?? clearInterval(this.intervalSub);
  }
  ngAfterViewChecked(): void {
    console.log('8 Hook');
  }
  ngAfterViewInit(): void {
    console.log('7 Hook');
  }
  ngAfterContentChecked(): void {
    console.log('6 Hook');
  }
  ngAfterContentInit(): void {
    console.log('5 Hook');
  }
  ngDoCheck(): void {
    console.log('4 Hook');
  }
  ngOnInit(): void { // To muszę znać kompletnie
    console.log('3 Hook');
    this.intervalSub = setInterval(() => {
      console.log('Hello from ngOnInit Interval')
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges): void { // To muszę znać kompletnie
    console.log('2 Hook');
  }




}
