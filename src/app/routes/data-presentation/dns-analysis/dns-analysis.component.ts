import {Component, OnInit} from '@angular/core';

export const domains: string[] = ["bttlhopxj.tj", "iecyhbuu.ar", "hjhbgbs.mw", "gqsncsvj.am", "ubv.ao", "cgy.tg", "gbskszwxr.asia", "fvgmmz.tz", "yomxn.ms", "ieeopvmmt.mv", "ndfwd.za", "cmw.bg", "qwpfnjwq.cg", "gndkqx.so", "mnqvo.pl", "houi.vu", "jcsdhuhvb.na", "ddwqxy.bf", "lensvbcl.gr", "tkfploijx.jo"];
export const domainEnds: string[] = [".com", ".cn", ".com.cn", ".org", ".gov.cn", ".net", ".org.cn"];
export const companies: string[] = ["浙江淘宝网络有限公司", "北京金山云网络技术有限公司", "华为软件技术有限公司", "广东浩云长盛网络股份有限公司", "阿里云计算有限公司", "贵阳忆联网络有限公司", "京东", "北京爱奇艺科技有限公司", "深圳腾讯计算机系统有限公司", "云上贵州"];
export const websites: string[] = ["腾讯视频", "抖音", "微信", "爱奇艺", "淘宝", "拼多多", "优酷", "京东", "新浪微博", "快手"];

@Component({
  selector: 'app-dns-analysis',
  templateUrl: './dns-analysis.component.html',
  styleUrls: ['./dns-analysis.component.css']
})
export class DnsAnalysisComponent implements OnInit {
  userType: number = 0;
  domainList: any[] = [];
  companyList: any[] = [];
  websiteList: any[] = [];

  companyOfColumn = [
    {
      title: '序号',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '公司名',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: 'DNS查询数',
      compare: (a: any, b: any) => a.selectNumber - b.selectNumber,
      priority: 1,
      flag: true
    },
    {
      title: '出网次数',
      compare: (a: any, b: any) => a.outNetCount - b.outNetCount,
      priority: 1,
      flag: true
    },
    {
      title: '网内次数',
      compare: (a: any, b: any) => a.inNetCount - b.inNetCount,
      priority: 1,
      flag: true
    },
    {
      title: '本网率',
      compare: (a: any, b: any) => a.netSelfRate - b.netSelfRate,
      priority: 1,
      flag: true
    },
    {
      title: '本省率',
      compare: (a: any, b: any) => a.provinceSelfRate - b.provinceSelfRate,
      priority: 1,
      flag: true
    },
    {
      title: '域名数',
      compare: (a: any, b: any) => a.domainNumber - b.domainNumber,
      priority: 1,
      flag: true
    }
  ];

  websiteOfColumn = [
    {
      title: '序号',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '网站名',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: 'DNS查询数',
      compare: (a: any, b: any) => a.selectNumber - b.selectNumber,
      priority: 1,
      flag: true
    },
    {
      title: '出网次数',
      compare: (a: any, b: any) => a.outNetCount - b.outNetCount,
      priority: 1,
      flag: true
    },
    {
      title: '网内次数',
      compare: (a: any, b: any) => a.inNetCount - b.inNetCount,
      priority: 1,
      flag: true
    },
    {
      title: '本网率',
      compare: (a: any, b: any) => a.netSelfRate - b.netSelfRate,
      priority: 1,
      flag: true
    },
    {
      title: '本省率',
      compare: (a: any, b: any) => a.provinceSelfRate - b.provinceSelfRate,
      priority: 1,
      flag: true
    },
    {
      title: '域名数',
      compare: (a: any, b: any) => a.domainNumber - b.domainNumber,
      priority: 1,
      flag: true
    }
  ];

  domainOfColumn = [
    {
      title: '序号',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '域/域名',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: 'DNS查询数',
      compare: (a: any, b: any) => a.selectNumber - b.selectNumber,
      priority: 1,
      flag: true
    },
    {
      title: '出网次数',
      compare: (a: any, b: any) => a.outNetCount - b.outNetCount,
      priority: 1,
      flag: true
    },
    {
      title: '网内次数',
      compare: (a: any, b: any) => a.inNetCount - b.inNetCount,
      priority: 1,
      flag: true
    },
    {
      title: '本网率',
      compare: (a: any, b: any) => a.netSelfRate - b.netSelfRate,
      priority: 1,
      flag: true
    },
    {
      title: '本省率',
      compare: (a: any, b: any) => a.provinceSelfRate - b.provinceSelfRate,
      priority: 1,
      flag: true
    },
    {
      title: '域名数',
      compare: (a: any, b: any) => a.domainNumber - b.domainNumber,
      priority: 1,
      flag: true
    },
    {
      title: '公司名',
      compare: null,
      priority: false,
      flag: false
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.companyInfo();
    this.websiteInfo();
    this.domainInfo();
  }

  domainInfo(): void {
    for (let i = 0; i < 300; i++) {
      this.domainList = [
        ...this.domainList,
        {
          id: i + 1,
          domainName: domains[Math.floor(Math.random() * 20)] + domainEnds[Math.floor(Math.random() * 7)],
          selectNumber: Math.random() * 10 + Math.round(Math.random() * 1000) + 1000,
          outNetCount: Math.random() * 10 + Math.round(Math.random() * 500) + 500,
          inNetCount: Math.random() * 10 + Math.round(Math.random() * 500) + 500,
          netSelfRate: Math.random() * 10 + 85,
          provinceSelfRate: Math.random() * 10 + 85,
          domainNumber: Math.round(Math.random() * 10) + 10,
          companyName: companies[Math.floor(Math.random() * 10)]
        },
      ]
    }
  }

  companyInfo(): void {
    for (let i = 0; i < 300; i++) {
      this.companyList = [
        ...this.companyList,
        {
          id: i + 1,
          companyName: companies[Math.floor(Math.random() * 10)],
          selectNumber: Math.random() * 10 + Math.round(Math.random() * 1000) + 1000,
          outNetCount: Math.random() * 10 + Math.round(Math.random() * 500) + 500,
          inNetCount: Math.random() * 10 + Math.round(Math.random() * 500) + 500,
          netSelfRate: Math.random() * 10 + 85,
          provinceSelfRate: Math.random() * 10 + 85,
          domainNumber: Math.random() * 10 + Math.round(Math.random() * 1000) + 1000
        },
      ]
    }
  }

  websiteInfo(): void {
    for (let i = 0; i < 300; i++) {
      this.websiteList = [
        ...this.websiteList,
        {
          id: i + 1,
          websiteName: websites[Math.floor(Math.random() * 10)],
          selectNumber: Math.random() * 10 + Math.round(Math.random() * 1000) + 1000,
          outNetCount: Math.random() * 10 + Math.round(Math.random() * 500) + 500,
          inNetCount: Math.random() * 10 + Math.round(Math.random() * 500) + 500,
          netSelfRate: Math.random() * 10 + 85,
          provinceSelfRate: Math.random() * 10 + 85,
          domainNumber: Math.random() * 10 + Math.round(Math.random() * 1000) + 1000
        },
      ]
    }
  }

  search(): void {

  }

  reset(): void {

  }
}
