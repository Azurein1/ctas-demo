import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ip-store',
  templateUrl: './ip-store.component.html',
  styleUrls: ['./ip-store.component.css']
})
export class IpStoreComponent implements OnInit {

  addVisible = false;

  ipData = [
    {
      ipStart: '117.187.188.0',
      ipEnd: '117.187.189.255',
      ipType: 'IPV4',
      interType: '家宽',
      serviceType: '',
      belonging: '',
      operator: '移动',
      country: '中国',
      province: '贵州',
      city: ''
    },
    {
      ipStart: '1.2.4.0',
      ipEnd: '1.2.4.255',
      ipType: 'IPV4',
      interType: '对等直连',
      serviceType: '',
      belonging: '',
      operator: '移动',
      country: '中国',
      province: '集团',
      city: ''
    },
    {
      ipStart: '42.83.128.0',
      ipEnd: '42.83.129.255',
      ipType: 'IPV4',
      interType: '对等直连',
      serviceType: '',
      belonging: '',
      operator: '移动',
      country: '中国',
      province: '集团',
      city: ''
    },
    {
      ipStart: '42.83.88.0',
      ipEnd: '42.83.127.255',
      ipType: 'IPV4',
      interType: '',
      serviceType: '',
      belonging: '',
      operator: '电信',
      country: '中国',
      province: '广东',
      city: ''
    },
    {
      ipStart: '211.98.135.0',
      ipEnd: '211.98.135.255',
      ipType: 'IPV4',
      interType: '家宽',
      serviceType: '',
      belonging: '',
      operator: '移动',
      country: '中国',
      province: '江苏',
      city: ''
    },
    {
      ipStart: '211.99.160.0',
      ipEnd: '211.99.175.255',
      ipType: 'IPV4',
      interType: '对等直连',
      serviceType: '',
      belonging: '',
      operator: '移动',
      country: '中国',
      province: '集团',
      city: ''
    },
    {
      ipStart: '60.172.149.0',
      ipEnd: '60.172.149.255',
      ipType: 'IPV4',
      interType: '',
      serviceType: '',
      belonging: '',
      operator: '电信',
      country: '中国',
      province: '安徽',
      city: ''
    },
    {
      ipStart: '116.1.116.0',
      ipEnd: '116.1.129.255',
      ipType: 'IPV4',
      interType: '',
      serviceType: '',
      belonging: '',
      operator: '电信',
      country: '中国',
      province: '广西',
      city: ''
    },
    {
      ipStart: '124.115.190.0',
      ipEnd: '124.115.190.255',
      ipType: 'IPV4',
      interType: '',
      serviceType: '',
      belonging: '',
      operator: '电信',
      country: '中国',
      province: '陕西',
      city: ''
    },
    {
      ipStart: '61.153.203.75',
      ipEnd: '61.153.203.85',
      ipType: 'IPV4',
      interType: '',
      serviceType: '',
      belonging: '',
      operator: '电信',
      country: '中国',
      province: '浙江',
      city: ''
    },
    {
      ipStart: '61.153.203.75',
      ipEnd: '61.153.203.85',
      ipType: 'IPV4',
      interType: '',
      serviceType: '',
      belonging: '',
      operator: '电信',
      country: '中国',
      province: '浙江',
      city: ''
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

  getIpData(): void{
    this.ipData = [];
  }

  reset(): void {
    this.ipData = [];
  }

  showAdd(): void {
    this.addVisible = true;
  }

  addClose(): void {
    this.addVisible = false;
  }
}
