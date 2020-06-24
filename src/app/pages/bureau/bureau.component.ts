import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TransferItem } from 'ng-zorro-antd/transfer';
import { HttpClient, HttpHeaders } from '@angular/common/http'

interface savedList{
  id: number;
  name: string;
}

@Component({
  selector: 'app-bureau',
  templateUrl: './bureau.component.html',
  styleUrls: ['./bureau.component.css']
})
export class BureauComponent implements OnInit {

  private getsavedbureaulist: string = "/api/bsavelist"

  constructor(public msg: NzMessageService, public htt: HttpClient) { }
  list: TransferItem[] = [];

  ngOnInit(): void {
    this.getsavedlist();
  }

  getsavedlist(): void {
    this.htt.get(this.getsavedbureaulist).subscribe((res1:Array<savedList>)=>{
      this.savedbureauList = res1
    })
  }

  public savedbureauList?: Array<savedList>;

  getData(): void {
    const ret: TransferItem[] = [];
    for (let i = 0; i < 20; i++) {
      ret.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        direction: Math.random() * 2 > 1 ? 'right' : undefined
      });
    }
    this.list = ret;
  }

  reload(direction: string): void {
    this.getData();
    this.msg.success(`your clicked ${direction}!`);
  }

  select(ret: {}): void {
    console.log('nzSelectChange', ret);
  }

  change(ret: {}): void {
    console.log('nzChange', ret);
  }
}
