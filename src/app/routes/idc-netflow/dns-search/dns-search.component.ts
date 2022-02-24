import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dns-search',
  templateUrl: './dns-search.component.html',
  styleUrls: ['./dns-search.component.css']
})
export class DnsSearchComponent implements OnInit {

  dnsData = [
    {}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getDnsData(): void {
    this.dnsData = [
      {
        host: 'v6.tOUtiaoVod.CoM.',
        ip: '39.125.42.4',
        cname: 'toutiaovod.com',
        date: '2021-11-23',
        icp: '北京字节跳动科技有限公司',
        times: '194',
        inNetRate: '93.42%',
        inProRate: '100%',
      },
      {
        host: 'V6-Ipv6.toUTiAoVOd.COm.',
        ip: '39.125.41.104',
        cname: 'toutiaovod.com',
        date: '2021-11-23',
        icp: '北京字节跳动科技有限公司',
        times: '1',
        inNetRate: '96.23%',
        inProRate: '100%',
      },
      {
        host: 'a4.static.yximgs.com.',
        ip: '117.41.45.125',
        cname: 'yximgs.com',
        date: '2020/1/13',
        icp: '程一笑',
        times: '104',
        inNetRate: '93.41%',
        inProRate: '100%',
      },
      {
        host: 'www.qufair.com.a.bdydns.com.',
        ip: '113.145.33.14',
        cname: 'bdydns.com',
        date: '2021/8/30',
        icp: '百度云DNS',
        times: '2303',
        inNetRate: '94.01%',
        inProRate: '100%',
      },
      {
        host: 'yn.58lyw.net.a.bdydns.com.',
        ip: '113.145.34.1',
        cname: 'bdydns.com',
        date: '2021/8/30',
        icp: '百度云DNS',
        times: '31',
        inNetRate: '94.62%',
        inProRate: '100%',
      },
      {
        host: 'newsres.iju.cn.a.bdydns.com.',
        ip: '113.145.33.127',
        cname: 'bdydns.com',
        date: '2021/8/30',
        icp: '百度云DNS',
        times: '13',
        inNetRate: '94.14%',
        inProRate: '100%',
      },
      {
        host: 'www.ipxk.com.a.bdydns.com.',
        ip: '113.145.54.2',
        cname: 'bdydns.com',
        date: '2021/8/30',
        icp: '百度云DNS',
        times: '93',
        inNetRate: '90.45%',
        inProRate: '100%',
      }
    ];
  }

  reset(): void {
    this.dnsData = [];
  }
}
