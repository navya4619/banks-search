import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BankDetail } from '../models/bankdetail';

import { BankService } from '../services/bank.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-bank-search',
  templateUrl: './bank-search.component.html',
  styleUrls: ['./bank-search.component.css']
})
export class BankSearchComponent implements OnInit {
   cities= [
    "Bangalore",
    "Pune",
    "Chennai",
    "Mysore",
    "Mumbai"
  ];
 
  bankdetails:BankDetail[]=[];
  searchText:string='';
  city:string='PUNE';
  length:number=0;
  pageSize:number=10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  constructor(private bankservice: BankService) { }

  ngOnInit(): void {
  }
  getBankdetails(){
    this.bankservice.getCachedBanks(this.city.toUpperCase()).subscribe((data: BankDetail[])=>{
      this.bankdetails =data;
      this.length = this.bankdetails.length;
    });
  }
  update(e:any){
    this.city = e.target.value
    this.getBankdetails();
  }
}
