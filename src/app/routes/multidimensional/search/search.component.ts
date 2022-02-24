import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  allChecked = true;
  indeterminate = true;
  checkOptionsOne = [
    {label: '应用维度', value: 'app', checked: true},
    {label: 'DNS维度', value: 'dns', checked: true},
    {label: '通信协议维度', value: 'protocol', checked: true},
    {label: 'CDN及IDC商户维度', value: 'idcCdn', checked: true}
  ];
  showMap = new Map([
    ["app", true],
    ["dns", true],
    ["protocol", true],
    ["idcCdn", true]
  ]);


  constructor() {
  }

  ngOnInit(): void {
  }

  updateAllChecked(): void {
    this.indeterminate = false;
    if (this.allChecked) {
      this.checkOptionsOne = this.checkOptionsOne.map(item => {
        return {
          ...item,
          checked: true
        };
      });
      this.checkOptionsOne.forEach(item => {
        this.showMap.set(item.value, true);
      });
    } else {
      this.checkOptionsOne = this.checkOptionsOne.map(item => {
        return {
          ...item,
          checked: false
        };
      });
      this.checkOptionsOne.forEach(item => {
        this.showMap.set(item.value, false);
      });
    }
  }

  updateSingleChecked(): void {
    this.checkOptionsOne.forEach(item => {
      if (!item.checked){
        this.showMap.set(item.value, false);
      }else {
        this.showMap.set(item.value, true);
      }
    });
    console.log(this.showMap);

    if (this.checkOptionsOne.every(item => !item.checked)) {
      this.allChecked = false;
      this.indeterminate = false;
    } else if (this.checkOptionsOne.every(item => item.checked)) {
      this.allChecked = true;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
    }
  }
}
