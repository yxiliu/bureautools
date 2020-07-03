import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { NzMessageService } from 'ng-zorro-antd/message';
import { TransferItem } from 'ng-zorro-antd/transfer';
import {ActivatedRoute} from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CommonServiceService } from "../../../services/common-service.service"


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
  constructor(public msg: NzMessageService,public htt: HttpClient,private route: ActivatedRoute,private modalService: NzModalService, private com: CommonServiceService) { }
  public allbureauURI:string = "/api/bedit";
  public allbureauData?:Array<TransferItem> = []
  public bureaucreatURI:string = "/api/createnewburealist";
  public bureauchangeURI:string = "/api/changeburealist";
  public bureauInfoGetURI:string = "/api/bsavedetail";
  public currentId :string = '0';
  public currentUser: string = "";
  ngOnInit(): void {
    this.getid()
    this.currentUser = this.com.getUserInfo().name;
    this.getSaveInfo();
    this.getAllbureauData();
  }
  
  getid():void{
    this.route.queryParams.subscribe((res)=>{
      if (res.id){
        this.currentId = res.id as string
      }
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

    private listchanged:boolean = false;

    //  modal related
    public modalIsVisible: boolean = false;
    public showModal(): void {
      this.modalIsVisible = true;
    }
    private originSaveName:string;
    private originCreatePerson:string; 
    private originDescb:string;
    private getSaveInfo():void{
      this.htt.get(this.bureauInfoGetURI+"?id="+this.currentId).subscribe(res=>{
        this.originSaveName = res["savename"]
        this.originDescb = res["descb"]
        this.originCreatePerson = res["createperson"]
      })
      this.newSaveName = this.originSaveName;
      this.newCreatePerson = this.currentUser;
      this.originDescb = this.newDescb;
    }

    public handleCancel():void{
      this.modalIsVisible = false;
    }
    public submitQuery(): void {
      this.modalIsVisible = false;
      if (this.currentId == "0"){
        this.htt.post(this.bureaucreatURI,JSON.stringify({})).subscribe(res=>{
          if (res["ok"] == true){
            return 
          }
        })
      }else{
        this.htt.post(this.bureauchangeURI, JSON.stringify({})).subscribe(res=>{
          return
        })
      }
    }
    
    public newSaveName:string = '';
    public newCreatePerson:string = "";
    public newDescb:string = "";
}
