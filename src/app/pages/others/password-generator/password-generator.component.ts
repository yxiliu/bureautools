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

  Upper: Array<string> = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  lower: Array<string> = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  num: Array<string> = ['0','1','2','3','4','5','6','7','8','9',]
  spe: Array<string> = ['_','-','$','%','&','@','+','!']
  
  generator(type:number):string{
    let randomGenerator = (n:number)=>Math.floor(Math.random()*n)
    randomGenerator(4)
    return "dasf"
  }
}
