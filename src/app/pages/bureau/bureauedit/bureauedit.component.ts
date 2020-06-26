import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { NzMessageService } from 'ng-zorro-antd/message';
import { TransferItem } from 'ng-zorro-antd/transfer';
import {ActivatedRoute} from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  constructor(public msg: NzMessageService,public htt: HttpClient,private route: ActivatedRoute,private modalService: NzModalService, private fb: FormBuilder) { }
  public allbureauURI:string = "/api/bedit";
  public allbureauData?:Array<TransferItem> = []
  public bureaucreatURI:string = "/api/createnewburealist";
  public bureauchangeURI:string = "/api/changeburealist";
  public currentId :string = '0';
  ngOnInit(): void {
    this.getid()
  }
  
  getid():void{
    this.route.queryParams.subscribe((res)=>{
      this.currentId = res.id as string
    })
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



    //  modal related
    public modalIsVisible: boolean = false;
    public showModal(): void {
      this.modalIsVisible = true;
    }
    public handleCancel():void{
      this.modalIsVisible = false;
    }
    public submitQuery(): void {
      this.modalIsVisible = false;
    }
    
    public newSaveName:string = '';
    public newCreatePerson:string = "";
    public newDescb:string = "";
}
