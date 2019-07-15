import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
data1;
  constructor(public http : HttpClient) { }
  
  update(data,id):Observable<any>{
return this.http.post(`http://localhost:7000/edit/${id}`,data)
  }
}
