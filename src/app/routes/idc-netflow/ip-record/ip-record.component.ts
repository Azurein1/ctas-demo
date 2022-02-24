import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ip-record',
  templateUrl: './ip-record.component.html',
  styleUrls: ['./ip-record.component.css']
})
export class IpRecordComponent implements OnInit {

  listOfData = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 30; i++){
      this.listOfData = [
        ...this.listOfData,
        {
          id: i + 1,
          ip: i % 10 === 1 ? '117,184.41.232' : i % 10 === 2 ? '183.33.143.41' : i % 10 === 3 ? '221.178.11.213' : i % 10 === 4 ? '36.159.25.214' : i % 10 === 5 ? '111.104.54.42' : i % 10 === 6 ? '117.141.63.124' : i % 10 === 7 ? '137.41.143.132' : '128.34.56.114',
          host: i % 10 === 1 ? 'aiwu.pw'
            : i % 10 === 2 ? 'www.sys52.com'
              : i % 10 === 3 ? 'cd72.tgpd.com'
                : i % 10 === 4 ? 'm.cssyq.com'
                  : i % 10 === 5 ? 'poptwinks.com'
                    : i % 10 === 6 ? 'ns1.zomro.com'
                      : i % 10 === 7 ? 'www.szhwxzm.com' : 'plhh.jupdusm.cn',
          cname: i % 10 === 1 ? 'aiwu.pw' : i % 10 === 2 ? 'www.sys52.com' : i % 10 === 3 ? 'cd72.tgpd.com' : i % 10 === 4 ? 'm.cssyq.com' : i % 10 === 5 ? 'poptwinks.com' : i % 10 === 6 ? 'ns1.zomro.com' : i % 10 === 7 ? 'www.szhwxzm.com' : 'new4.9423.cc',
          time: i % 6 === 1 ? '2021-05-25 11:42:31'
            : i % 6 === 2 ? '2021-05-24 09:34:14'
              : i % 6 === 3 ? '2021-05-25 15:17:38'
                : i % 6 === 4 ? '2021-05-24 16:03:57'
                  : i % 6 === 5 ? '2021-05-24 08:12:43' : '2021-05-25 14:13:23',
          cycle: i % 4 === 1 ? '每周'
            : i % 4 === 2 ? '每月'
              : i % 4 === 3 ? '12小时'
                : '每天',
        }
      ];
    }
  }

}
