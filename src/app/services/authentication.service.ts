import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  domain = 'test.securitytroops.in'
  baseUrl: string = 'https://' + this.domain;
  apiUrl: string = this.baseUrl + '/stapi/v1/';
  jsonAPI=false;
  constructor(private http: HttpClient,) { }

  getAPI(url: any,params:any={}): Observable<any> {
    return this.http.get(this.apiUrl + url,{params:params});
  }

  postAPI(url: any, params: any): Observable<any> {
    return this.http.post(this.apiUrl + url, params);
  }

  postJson(url: any, params: any): Observable<any> {
    this.jsonAPI=true
    let formData: any = this.getFormData(params,true);
    return this.http.post(this.apiUrl + url, formData);
  }

  postForm(url: any, params: any): Observable<any> {
    this.jsonAPI=true
    let formData: any = this.getFormData(params);
    return this.http.post(this.apiUrl + url, formData);
  }

  putAPI(url: any, params: any): Observable<any> {
    return this.http.put(this.apiUrl + url, params);
  }

  patchAPI(url: any, params: any): Observable<any> {
    return this.http.patch(this.apiUrl + url, params);
  }

  patchForm(url: any, params: any): Observable<any> {
    this.jsonAPI=true
    let formData: any = this.getFormData(params);
    return this.http.patch(this.apiUrl + url, formData);
  }

  getFormData(params: any,jsonData=false) {
    let formData: any = new FormData();
    for (let i = 0; i < params.length; ++i) {
      let key = Object.keys(params[i])[0];
      let prm = params[i][0];
      formData.append(key, (jsonData ? JSON.stringify(params[i][key]) : params[i][key]));
    }
    return formData;
  }

  deleteAPI(url: any): Observable<any> {
    return this.http.delete(this.apiUrl + url);
  }
}
