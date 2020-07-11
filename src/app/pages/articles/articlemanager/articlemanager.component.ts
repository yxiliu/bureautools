import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzThSelectionComponent } from 'ng-zorro-antd/table';

const lastyear = 2015;
const count = 10;
const DataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
interface Iinfodata{
  title: string;
  maintainer?: string;
  id?: number;
  tag?: string;
  date?: string;
  code?: string;
  loading:boolean;
  uri?:string; 
}

interface Itag{
  id: number;
  name: string;
  image:string;
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
  currentNumber:number = count;
  selectedTag? : string;
  selectedYear?: number;
  listOfYear:Array<number> = this.getYearlist();
  listOfTag?:Array<Itag>;
  constructor(private http: HttpClient, private msg: NzMessageService) {}

  ngOnInit(): void {
    this.getData(this.currentNumber,count, (res: any) => {
      this.data = res;
      this.list = res;
      this.initLoading = false;
    });
    this.getTags();
  }
  getTags():void{
    this.listOfTag = [{name:'大气',id:1,image:'fsf'},{name:'大气',id:1,image:'fsf'},{name:'大气',id:1,image:'fsf'},]
  }

  getYearlist():Array<number> {
    let currentYear = new Date().getFullYear();
    let result = [currentYear,]
    while (currentYear>lastyear){
      currentYear -= 1
      result.push(currentYear)
    }
    return result
  }
  

  getData(from: number,length:number,callback: (res: any) => void): void {
    // this.http.get(fakeDataUrl).subscribe((res: any) => callback(res));
    let fakeres = [
      {uri:'sdafsfd',loading:false,'id':1, 'title':'大气相关的', "tag":"daq", "maintainer":'yxiliu',"date":'2019-01-02', code:'京发102号'},
      {uri:'sdafsfd',loading:false,'id':1, 'title':'大气相关的', "tag":"daq", "maintainer":'yxiliu',"date":'2019-01-02',code:'京发102号'},
      {uri:'sdafsfd',loading:false,'id':1, 'title':'大气相关的', "tag":"daq", "maintainer":'yxiliu',"date":'2019-01-02',code:'京发102号'},
      {uri:'sdafsfd',loading:false,'id':1, 'title':'大气相关的', "tag":"daq", "maintainer":'yxiliu',"date":'2019-01-02',code:'京发102号'},
      {uri:'sdafsfd',loading:false, 'id':1, 'title':'大气相关的', "tag":"daq", "maintainer":'yxiliu',"date":'2019-01-02',code:'京发102号'},
      {uri:'sdafsfd',loading:false, 'id':1, 'title':'大气相关的', "tag":"daq", "maintainer":'yxiliu',"date":'2019-01-02',code:'京发102号'},
      {uri:'sdafsfd',loading:false, 'id':1, 'title':'大气相关的', "tag":"daq", "maintainer":'yxiliu',"date":'2019-01-02',code:'京发102号'},
      {uri:'sdafsfd',loading:false, 'id':1, 'title':'大气相关的', "tag":"daq", "maintainer":'yxiliu',"date":'2019-01-02',code:'京发102号'},
      {uri:'sdafsfd',loading:false, 'id':1, 'title':'大气相关的', "tag":"daq", "maintainer":'yxiliu',"date":'2019-01-02',code:'京发102号'},
      {uri:'sdafsfd',loading:false, 'id':1, 'title':'大气相关的', "tag":"daq", "maintainer":'yxiliu',"date":'2019-01-02',code:'京发102号'},
    ]
    callback(fakeres)
  }

  onLoadMore(): void {
    this.loadingMore = true;
    this.currentNumber += count;
    let reallist:Array<Iinfodata> = this.data;
    this.list = this.data.concat([...Array(count)].fill({}).map(() => ({ loading: true })));
    this.getData(this.currentNumber, count, res=>{
      this.data = reallist.concat(res);
      this.list = [...this.data];
      this.loadingMore = false;
    })
  }

  edit(item: any): void {
    this.msg.success(item.email);
  }



    // modal
    isVisible:boolean = false;
    modalName:string = '';
    modalMaintainer:string = '';
    modalCode:string = "";
    file:string = "";
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
