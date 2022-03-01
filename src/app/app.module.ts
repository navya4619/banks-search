import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BanksComponent } from './banks/banks.component';
import { BankSearchComponent } from './bank-search/bank-search.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { HttpClientModule } from '@angular/common/http';
import { BankService } from './services/bank.service';
import { FilterPipe } from './pipes/FilterPipe';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BanksComponent,
    BankSearchComponent,
    BankDetailsComponent,
    FilterPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [BankService],
  bootstrap: [AppComponent]
})
export class AppModule { }
