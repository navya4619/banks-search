import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable()
export class BankService
{
     url:string="https://vast-shore-74260.herokuapp.com/banks";
     private map = new Map();
         constructor(private http: HttpClient){
    }
    getCachedBanks(city:string){
        if(!this.map.get(city)){
        this.map.set(city,this.getBanks(city));
        }
        return this.map.get(city);
    }
    getBanks(city:string):Observable<any>{
        let params = new HttpParams();
    params = params.append('city', city);
        return this.http.get(this.url,{params: params});
    }
}