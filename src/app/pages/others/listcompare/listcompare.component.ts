import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listcompare',
  templateUrl: './listcompare.component.html',
  styleUrls: ['./listcompare.component.css']
})
export class ListcompareComponent implements OnInit {

  constructor() { }
  leftcontent:string = '';
  rightconten:string = '';
  ngOnInit(): void {
  }
  sep:string = '、'
  result?: boolean
  icontype:string = "question-circle"
  dulremover(content){
    let p:string[]= [];
    for (let i in content){
      if(p.indexOf(content[i]) == -1){
        p.push(content[i].trim())
      }
    }
    return p
  }
  compare():void{
    let leftlist = this.dulremover(this.splitConten(this.leftcontent.trim()))
    let rightlist = this.dulremover(this.splitConten(this.rightconten.trim()));
    let inLastlist = (list1:Array<string>, list2:Array<string>) =>{
      let point:boolean = true
      for (let l of list1){
        if(list2.indexOf(l) == -1){
          point = false
        }
     }
     return point
    }
    this.result = inLastlist(leftlist,rightlist) && inLastlist(rightlist,leftlist)
    this.icontype = this.result? "check-circle":"close-circle"
  }

  splitConten(content):string[]{
    if (this.sep === "换行"){
      return content.split(/[\n]/)
    }
    return content.split(this.sep)
  };
}
