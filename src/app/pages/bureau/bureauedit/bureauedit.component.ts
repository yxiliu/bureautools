import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { NzMessageService } from 'ng-zorro-antd/message';
import { TransferItem } from 'ng-zorro-antd/transfer';

interface IeachBureau{
  id:number | string;
  bureauName:string;
  checked:boolean;
}

@Component({
  selector: 'app-bureauedit',
  templateUrl: './bureauedit.component.html',
  styleUrls: ['./bureauedit.component.css']
})
export class BureaueditComponent implements OnInit {
  constructor(public msg: NzMessageService,public htt: HttpClient) { }
  public allbureauURI:string = "http://localhost:8888/getallbureau";
  public allbureauData?:Array<TransferItem> = []
  public bureauPostURI:string = "http://localhost:8888/postallbureau";

  ngOnInit(): void {
  }
  
  
  
  list: TransferItem[] = [];

  
  bureauInfoTransform(a: Array<IeachBureau>):Array<TransferItem>{
    return a.map(item=> {
      return {Key: item.id as string, title: item.bureauName, direction: item.checked?"right":"left"}
    })
  } 

  getAllbureauData():void{
    this.htt.get(this.allbureauURI).subscribe((res1:Array<IeachBureau>)=>{
      this.allbureauData = this.bureauInfoTransform(res1)
    })
  }

  reload(direction: string): void {
    this.msg.success(`your clicked ${direction}!`);
  }

  select(ret: {}): void {
    console.log('nzSelectChange', ret);
  }

  change(ret: {}): void {
    console.log('nzChange', ret);
  }

  save():void{
    // this.htt.post()
  }
}
