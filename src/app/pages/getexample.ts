import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public http:HttpClient) { }
  public domain: string = 'http://127.0.0.1:8080'


  
  get(api?:string){
    console.log(this.domain+ api)
    return new Promise((resolve, rejects)=>{
      this.http.get(this.domain+ api).subscribe((res1:any)=>{
        resolve(res1)
      })
    })
  }

  post(api?:string, body?:string){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }
    let uri:string = `${this.domain}${api}`
    console.log(uri)
    return new Promise((resolve, rejects)=>{
      this.http.post(uri,body,httpOptions).subscribe((res1:any)=>{
        resolve(res1)
      })
    })
  }


  delete(api?:string, body?:string): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }
    return new Promise((resolve, rejects)=>{
      let uri:string = `${this.domain}${api}?${body}`
      this.http.delete(uri,httpOptions).subscribe((res1:any)=>{
        resolve(res1)
      })
    })
  }

  put(api?:string,body?:string): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }
    return new Promise((resolve, rejects)=>{
      let uri:string = `${this.domain}${api}`
      console.log(uri)
      this.http.put(uri,body, httpOptions).subscribe((res1:any)=>{
        resolve(res1)
      })
    })
  }
}
