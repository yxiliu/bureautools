import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  passwordoutput: string = '';
  passwordLength: number = 20;
  haveSpe: boolean = true;
  haveNum: boolean = true;
  haveUpper: boolean = true;
  haveLower: boolean = true;
  Upper: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  lower: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  num: Array<string> = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
  spe: Array<string> = ['_', '-', '$', '%', '&', '@', '+', '!'];


  validate(): boolean {
    return this.haveSpe || this.haveNum || this.haveUpper || this.haveLower
  }

  mapCount(list: Array<number>): Array<Array<number>> {
    let p = [[], [], [], []]
    for (let i in list) {
      p[list[i]].push(i)
    }
    return p
  }

  leastCheck(list: Array<number>, outputlist: Array<string>, combinelist: Array<Array<string>>): Array<string> {
    let truelist = this.falseOrTrueListGenerator(true)
    let map = this.mapCount(list)
    for (let i of truelist) {
      if (list.indexOf(i) == -1) {
        for (let a of map) {
          if (a.length > 1) {
            outputlist[a[0]] = combinelist[i][this.randomGenerator(combinelist[i].length)]
            break
          }
        }
      }
    }
    return outputlist
  }

  randomGenerator(n: number): number {
    return Math.floor(Math.random() * n)
  }

  falseOrTrueListGenerator(TorF: boolean): Array<number> {
    let flist = [this.haveUpper, this.haveLower, this.haveNum, this.haveSpe]
    let p = []
    for (let i in flist) {
      if (TorF) {
        if (flist[i]) {
          p.push(i)
        }
      } else {
        if (!flist[i]) {
          p.push(i)
        }
      }
    }
    return p
  }



  generator(length: number): void {

    if (this.validate()) {
      let combineList: Array<Array<string>> = [this.Upper, this.lower, this.num, this.spe]
      let transformData = { 0: combineList[0].length, 1: combineList[1].length, 2: combineList[2].length, 3: combineList[3].length }
      let falselist = this.falseOrTrueListGenerator(false)
      let arrayofrandom: Array<string> = []
      let checkfalse = (n: number, generatorNumb: number, falselist: Array<number>) => {  
        if (falselist.indexOf(n) == -1) {
          // bug 不知道为什么falselist变成了Array<string>
          return n
        } else {
          return checkfalse(this.randomGenerator(generatorNumb), generatorNumb, falselist)
        }
      }
      let space: Array<number> = [];
      for (let a = 0; a < length; a++) {
        let firstRandom = this.randomGenerator(4)
        space.push(firstRandom)
        firstRandom = checkfalse(firstRandom, 4, falselist)
        arrayofrandom.push(combineList[firstRandom][this.randomGenerator(transformData[firstRandom])])
      }
      let result = this.leastCheck(space, arrayofrandom, combineList);
      this.passwordoutput = result.join('')
    } else {
      alert('错误')
    }

  }
}
