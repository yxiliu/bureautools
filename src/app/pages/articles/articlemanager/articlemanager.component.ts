import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

const count = 10;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
interface Iinfodata{
  title: string;
  maintainer: string;
  id: number;
  tag: string;
  date: string;
  code: string;
}

@Component({
  selector: 'app-articlemanager',
  templateUrl: './articlemanager.component.html',
  styleUrls: ['./articlemanager.component.css']
})
export class ArticlemanagerComponent implements OnInit {
  initLoading = true; // bug
  loadingMore = false;
  data: any[] = [];
  list: Array<Iinfodata> = [];

  constructor(private http: HttpClient, private msg: NzMessageService) {}

  ngOnInit(): void {
    this.getData((res: any) => {
    
      this.data = res;
      this.list = res;
      this.initLoading = false;
    });
  }

  getData(callback: (res: any) => void): void {
    // this.http.get(fakeDataUrl).subscribe((res: any) => callback(res));
    let fakeres = [
      {'id':1, 'title':'大气相关的', "tag":"daq", "maintainer":'yxiliu',"date":'2019-01-02', code:'京发102号'},
      {'id':1, 'title':'大气相关的', "tag":"daq", "maintainer":'yxiliu',"date":'2019-01-02',code:'京发102号'},
      {'id':1, 'title':'大气相关的', "tag":"daq", "maintainer":'yxiliu',"date":'2019-01-02',code:'京发102号'},
      {'id':1, 'title':'大气相关的', "tag":"daq", "maintainer":'yxiliu',"date":'2019-01-02',code:'京发102号'},
      {'id':1, 'title':'大气相关的', "tag":"daq", "maintainer":'yxiliu',"date":'2019-01-02',code:'京发102号'},
      {loading:true, 'id':1, 'title':'大气相关的', "tag":"daq", "maintainer":'yxiliu',"date":'2019-01-02',code:'京发102号'},
    ]
    callback(fakeres)
  }

  onLoadMore(): void {
    this.loadingMore = true;
    this.list = this.data.concat([...Array(count)].fill({}).map(() => ({ loading: true, name: {} })));
    this.http.get(fakeDataUrl).subscribe((res: any) => {
      this.data = this.data.concat(res.results);
      this.list = [...this.data];
      this.loadingMore = false;
    });
  }

  edit(item: any): void {
    this.msg.success(item.email);
  }
}
