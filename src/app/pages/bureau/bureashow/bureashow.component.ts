import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TransferItem } from 'ng-zorro-antd/transfer';
import { ActivatedRoute } from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http'


interface DataItem {
  name: string;
  category: string;
  chief: string;
}
@Component({
  selector: 'app-bureashow',
  templateUrl: './bureashow.component.html',
  styleUrls: ['./bureashow.component.css']
})
export class BureashowComponent implements OnInit {

  constructor(public msg: NzMessageService, private route: ActivatedRoute, public htt: HttpClient) { }
  public getInfoURI: string = "/api/bsavedetail?id=";
  public getblistURI: string = "/api/bsavedetaillist?id=";
  public currentId: string = '';
  public visible:boolean = true;
  ngOnInit(): void {
    this.getid()
    this.getData()
  }
  public bsavename:string ='';

  public updatetime = "";
  public createtime = "";
  public createperson = "";
  private listOfData: DataItem[] = [];
  public searchValue = '';
  public listOfDisplayData:DataItem[] = [];
  public descb = "";
  getData():void{
    this.htt.get(this.getblistURI+this.currentId).subscribe(res=>{
      this.listOfData = res["data"]
      this.listOfDisplayData = res['data']
    })
    this.htt.get(this.getInfoURI + this.currentId).subscribe(res=>{
      this.bsavename = res["bname"]
      this.updatetime = res["updatetime"]
      this.createtime = res["createtime"]
      this.createperson = res["createperson"]
      this.descb = res["descb"]
    })
  }


  getid(): void {
    this.route.queryParams.subscribe((res) => {
      this.currentId = res.id as string
    })
  }



  



  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.name.indexOf(this.searchValue) !== -1);
  }
}
