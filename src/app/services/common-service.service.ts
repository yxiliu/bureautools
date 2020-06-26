import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
interface IpersonInfo {
  ip: string;
  name: string;
}


@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private http: HttpClient) { }

  public getUserInfo(): IpersonInfo {

    let PersonInfo: IpersonInfo = {
      ip: '',
      name: ''
    }
    this.http.get('/api/getuserinfo').subscribe(res => {
      if (res["status"] == "ok") {
        PersonInfo = { ip: res["data"]["ip"], name: res["data"]["name"] }
      }
    })
    return PersonInfo
  }


}
