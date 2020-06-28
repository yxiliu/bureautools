import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

interface Icounterres {
  item:string;
  times:number

}


@Component({
  selector: 'app-counterdupremoverp',
  templateUrl: './counterdupremoverp.component.html',
  styleUrls: ['./counterdupremoverp.component.css']
}) 
export class CounterdupremoverpComponent implements OnInit {

  constructor(private notification: NzNotificationService) { }
  public seperator:string = '、';
  ngOnInit(): void {
  }
  public countNumber:number = 0;
  public content:string = '';
  public dulcontent?:string[];
  public isCounter?:boolean = null;
  public dulo?:number[];
  public counterresult?:Array<Icounterres>;
  splitConten():string[]{
    if (this.seperator === "换行"){
      return this.content.split(/[\n]/)
    }
    return this.content.split(this.seperator)
  };
  private isBlank(content:string[]):boolean{
    return this.content.trim() == "" || content.length <= 1
  }

  count(): void {
    let content:string[] = this.splitConten();
    if (this.isBlank(content)){
      this.createBasicNotification()
      return 
    }
    let a:any={}
    for (let b of content){
      if (b in a){
        a[b] += 1
      }else{
        a[b] = 1
      }
    }
    this.counterresult = Object.entries(a).map((item,index)=>{
      return {item:item[0],times:item[1] as number}
    }).sort((a,b)=>b.times - a.times)
    this.isCounter = true
    this.countNumber = this.counterresult.length
  };

  dulremover(): void{
    let content:string[] = this.splitConten();
    if (this.isBlank(content)){
      this.createBasicNotification()
      return 
    }
    let p:string[]= [];
    let o:number[] = [];
    for (let i in content){
      if(p.indexOf(content[i]) == -1){
        p.push(content[i].trim())
      }else{
        o.push(parseInt(i))
      }
    }

    this.dulcontent = p
    this.dulo = o
    this.isCounter = false
    this.countNumber = this.dulcontent.length
  }
  createBasicNotification(): void {
    this.notification.create(
      "error",
      '错误',
      '请检查分隔符是否正确，内容是否完整'
    );}
}
