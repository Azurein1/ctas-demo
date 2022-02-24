import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  active = false;
  allChecked = true;
  indeterminate = true;
  checkOptionsOne = [
    {label: '全网总流量', value: 'all', checked: true},
    {label: '应用维度', value: 'app', checked: true},
    {label: 'DNS维度', value: 'dns', checked: true},
    {label: '通信协议维度', value: 'protocol', checked: true},
    {label: 'CDN及IDC商户维度', value: 'idcCdn', checked: true}
  ];
  showMap = new Map([
    ["all", true],
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
      })
    } else {
      this.checkOptionsOne = this.checkOptionsOne.map(item => {
        return {
          ...item,
          checked: false
        };
      });
      this.checkOptionsOne.forEach(item => {
        this.showMap.set(item.value, false);
      })
    }
  }

  updateSingleChecked(): void {
    this.checkOptionsOne.forEach(item =>{
      if (!item.checked){
        this.showMap.set(item.value, false);
      }else {
        this.showMap.set(item.value, true);
      }
    })
    console.log(this.showMap)

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

  activeChange(): void{
    this.active = true;
  }
}

