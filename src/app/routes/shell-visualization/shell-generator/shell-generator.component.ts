import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell-generator',
  templateUrl: './shell-generator.component.html',
  styleUrls: ['./shell-generator.component.css']
})
export class ShellGeneratorComponent implements OnInit {
  current = 0;
  hideContentOne = false;
  hideContentTwo = true;
  hideContentThree = true;
  hideContentFour = true;
  command: any;
  operate: any;
  object: any;
  trigger: any;

  constructor() { }

  ngOnInit(): void {
  }

  pre(): void {
    this.current -= 1;
    this.contentDisplay();
  }

  next(): void {
    this.current += 1;
    this.contentDisplay();
  }

  done(): void {
    console.log(this.command + this.operate + this.object + this.trigger);
  }

  onIndexChange(event: number): void {
    this.current = event;
    this.contentDisplay();
  }

  contentDisplay(): void {
    if (this.current === 0) {
      this.hideContentOne = false;
      this.hideContentTwo = true;
      this.hideContentThree = true;
      this.hideContentFour = true;
    }
    if (this.current === 1) {
      this.hideContentOne = true;
      this.hideContentTwo = false;
      this.hideContentThree = true;
      this.hideContentFour = true;
    }
    if (this.current === 2) {
      this.hideContentOne = true;
      this.hideContentTwo = true;
      this.hideContentThree = false;
      this.hideContentFour = true;
    }
    if (this.current === 3) {
      this.hideContentOne = true;
      this.hideContentTwo = true;
      this.hideContentThree = true;
      this.hideContentFour = false;
    }
  }

  commandChange(event: any): void {
    this.command = event;
  }
  operateChange(event: any): void {
    this.operate = event;
  }
  objectChange(event: any): void {
    this.object = event;
  }
  triggerChange(event: any): void {
    this.trigger = event;
  }
}
