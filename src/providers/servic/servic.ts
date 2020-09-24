import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { global_data } from '../../providers/global';
// let apiUrl = 'http://localhost/laundry_10/api/';

@Injectable()
export class ServicProvider {
  credentials_two:any;
  constructor(public http: HttpClient) {
    console.log('Hello ServicProvider Provider');
  }
  servicePost(credentials) {
    return new Promise((resolve, reject) => {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        this.http.post(global_data.url, (credentials), {headers: headers})
          .subscribe(res => {
             resolve(res);
          }, (err) => {
            reject(err);
          }); 
    });
  }
  servicePostAddress(credentials:any) {
    return new Promise((resolve, reject) => {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        console.log("Json resquest", JSON.stringify(credentials));
        this.http.post(global_data.url, JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
             resolve(res);
          }, (err) => {
            console.log(err);
            reject(err);
          });
    });
  }
}
