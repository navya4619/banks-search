import { Component, Input, OnInit } from '@angular/core';
import { BankDetail } from '../models/bankdetail';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {

  @Input() bankdetails:BankDetail[]=[];
  @Input() searchText:string='';
  constructor() { }

  ngOnInit(): void {
    
  }
  
}
