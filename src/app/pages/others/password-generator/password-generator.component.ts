import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log(this.generator(2, 20))
  }

  haveSpe: boolean = true;
  haveNum: boolean = true;
  haveUpper: boolean = true;
  haveLower: boolean = true;
  Upper: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  lower: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  num: Array<string> = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]
  spe: Array<string> = ['_', '-', '$', '%', '&', '@', '+', '!']


  validate(): boolean {
    return this.haveSpe || this.haveNum || this.haveUpper || this.haveLower
  }

  leastCheck(list:Array<number>):Array<number>{
    let checklist = [this.haveUpper, this.haveLower, this.haveNum, this.haveSpe]
  }

  generator(type: number, length: number): string {
    if (this.validate()) {
      let combineList: Array<Array<string>> = [this.Upper, this.lower, this.num, this.spe]
      let transformData = { 0: combineList[0].length, 1: combineList[1].length, 2: combineList[1].length, 3: combineList[1].length }
      let randomGenerator = (n: number) => Math.floor(Math.random() * n)
      let arrayofrandom: Array<string> = []

      for (let a = 0; a < length; a++) {
        let firstRandom = randomGenerator(4)
        arrayofrandom.push(combineList[firstRandom][randomGenerator(transformData[firstRandom])])
      }

      return arrayofrandom.join('')
    } else {
      return
    }

  }
}
