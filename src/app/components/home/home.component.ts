import { Component, Inject, OnInit } from '@angular/core';
import { CountrylistService } from '../../services/countrylist.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countryData: any = [];
  searchData: any = [];
  isSearch: boolean = false;
  constructor(private countryList: CountrylistService) { }

  ngOnInit(): void {
    this.LoadCountry();
  }
  LoadCountry(): void {
    this.countryList.loadCountryList().subscribe(data => {
      if (data) {
        this.countryData = data;
      }
    })
  }
  Search(searchText: any): void {
    this.searchData = [];
    this.isSearch = true;
    this.countryData.map((ele: any) => {
      if (ele.name !== '' && ele.name.toLowerCase() === searchText.toLowerCase()
        || ele.name.toLowerCase().includes(searchText.toLowerCase())) {
        this.searchData.push(ele);
      } else if (ele.capital !== '' && ele.capital.toLowerCase() === searchText.toLowerCase()
        || ele.capital.toLowerCase().includes(searchText.toLowerCase())) {
        this.searchData.push(ele);
      } else if (ele.region !== '' && ele.region.toLowerCase() === searchText.toLowerCase()
        || ele.region.toLowerCase().includes(searchText.toLowerCase())) {
        this.searchData.push(ele);
      } else if (ele.currencies[0].name !== '' && ele.currencies[0].name.toLowerCase() === searchText.toLowerCase()
        || ele.currencies[0].name.toLowerCase().includes(searchText.toLowerCase())) {
        this.searchData.push(ele);
      }
    });
    if (this.searchData.length <= 0) {
      this.isSearch = false;
    } else {
      this.isSearch = true;
    }
  }
  Clear(): void {
    this.searchData = [];
    this.isSearch = false;
  }
}
