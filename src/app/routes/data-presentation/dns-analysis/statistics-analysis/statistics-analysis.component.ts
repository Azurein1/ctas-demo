import { Component, OnInit } from '@angular/core';
import {domainEnds, domains} from "@routes/data-presentation/dns-analysis/dns-analysis.component";

@Component({
  selector: 'app-statistics-analysis',
  templateUrl: './statistics-analysis.component.html',
  styleUrls: ['./statistics-analysis.component.css']
})
export class StatisticsAnalysisComponent implements OnInit {

  allOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    yAxis: {
      type: 'value'
    },
    xAxis: {
      type: 'category',
      data: ['北京市', '天津市', '上海市', '重庆市', '河北省', '辽宁省', '山西省','吉林省', '黑龙江省', '江苏省', '浙江省', '安徽省', '福建省', '江西省','山东省', '河南省', '湖北省', '湖南省', '广东省', '四川省', '宁夏']
    },
    series: [
      {
        name: '移动',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [320, 302, 301, 334, 390, 330, 320,320, 302, 301, 334, 390, 330, 320,320, 302, 301, 334, 390, 330, 320]
      },
      {
        name: '电信',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '联通',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210]
      }
    ]
  };
  listOfData = [
    {
      host: 'dns.weixin.qq.com',
      dns: '19359345',
      inc: '19348715',
      outNet: '12945622',
      rate: '34.67%'
    },
    {
      host: 'www.baidu.com',
      dns: '15456333',
      inc: '15436956',
      outNet: '9406812',
      rate: '45.39%'
    },
    {
      host: 'www.taobao.com',
      dns: '14783444',
      inc: '13256345',
      outNet: '6943342',
      rate: '54.57%'
    },
    {
      host: 'www.jd.com',
      dns: '13959516',
      inc: '13425235',
      outNet: '4305911',
      rate: '37.72%'
    },
    {
      host: 'ts.qq.com',
      dns: '12549593',
      inc: '12324349',
      outNet: '5031422',
      rate: '33.47%'
    },
    {
      host: 'www.toutiao.com',
      dns: '11402195',
      inc: '11395942',
      outNet: '5002121',
      rate: '45.63%'
    }
  ];
  type: number = 0;
  keynoteDomainNameList: any[] = [];
  keynoteDomainNameOfColumn = [
    {
      title: '序号',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '域名',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '业务大类',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '业务小类',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: 'DNS查询次数',
      compare: (a: any, b: any) => a.selectCount - b.selectCount,
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
      title: '各域名占比',
      compare: (a: any, b: any) => a.proportion - b.proportion,
      priority: 1,
      flag: true
    },
  ];
  errorDomainNameList: any[] = [];
  errorDomainNameOfColumn = [
    {
      title: '序号',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '域名',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: 'DNS查询次数',
      compare: (a: any, b: any) => a.selectCount - b.selectCount,
      priority: 1,
      flag: true
    },
    {
      title: '错误次数',
      compare: (a: any, b: any) => a.errorCount - b.errorCount,
      priority: 1,
      flag: true
    },
    {
      title: '格式错误次数',
      compare: (a: any, b: any) => a.formatErrorCount - b.formatErrorCount,
      priority: 1,
      flag: true
    },
    {
      title: '服务无响应次数',
      compare: (a: any, b: any) => a.serviceNoResponseCount - b.serviceNoResponseCount,
      priority: 1,
      flag: true
    },
    {
      title: '名字错误次数',
      compare: (a: any, b: any) => a.nameErrorCount - b.nameErrorCount,
      priority: 1,
      flag: true
    },
    {
      title: 'DNS不支持次数',
      compare: (a: any, b: any) => a.dnsNotSupportCount - b.dnsNotSupportCount,
      priority: 1,
      flag: true
    },
    {
      title: '拒绝服务次数',
      compare: (a: any, b: any) => a.denialServiceCount - b.denialServiceCount,
      priority: 1,
      flag: true
    },
    {
      title: '其它错误次数',
      compare: (a: any, b: any) => a.otherErrorCount - b.otherErrorCount,
      priority: 1,
      flag: true
    },
  ];
  errorPieOption: any;
  errorBarOption: any;

  constructor() {
  }

  ngOnInit(): void {
    this.errorDomain();
    this.keynote();
  }

  errorDomain(): void {
    this.errorPieChart();
    this.errorBarChart();
    for (let i = 0; i < 300; i++) {
      this.errorDomainNameList = [
        ...this.errorDomainNameList,
        {
          id: i + 1,
          domainName: domains[Math.floor(Math.random() * 20)] + domainEnds[Math.floor(Math.random() * 7)],
          selectCount: Math.round(Math.random() * 10000) + 30000,
          errorCount: Math.round(Math.random() * 1000) + 1000,
          formatErrorCount: Math.round(Math.random() * 100) + 100,
          serviceNoResponseCount: Math.round(Math.random() * 100) + 100,
          nameErrorCount: Math.round(Math.random() * 100) + 100,
          dnsNotSupportCount: Math.round(Math.random() * 100) + 100,
          denialServiceCount: Math.round(Math.random() * 100) + 100,
          otherErrorCount: Math.round(Math.random() * 100) + 100,
        },
      ]
    }
  }

  errorPieChart(): void {
    this.errorPieOption = {
      title: {
        text: '域名错误类型分析',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          type: 'pie',
          radius: '50%',
          data: [
            {value: 207860, name: '格式错误'},
            {value: 193735, name: '服务无响应'},
            {value: 152484, name: 'DNS不支持'},
            {value: 93015, name: '拒绝服务'},
            {value: 56580, name: '名字错误'},
            {value: 15300, name: '其它'}
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }

  errorBarChart(): void {
    this.errorBarOption = {
      title: {
        text: '错误域名次数Top10'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: ['cgy.tg.org.cn', 'tkfploijx.jo.net	', 'gndkqx.so.com.cn', 'qwpfnjwq.cg.net', 'jcsdhuhvb.na.net', 'hjhbgbs.mw.org.cn', 'yomxn.ms.net', 'gbskszwxr.asia.org.cn', 'ddwqxy.bf.com.cn', 'ieeopvmmt.mv.com.cn']
      },
      series: [
        {
          type: 'bar',
          data: [832, 938, 1310, 1415, 1541, 1707, 1810, 1915, 2241, 2507]
        }
      ]
    };
  }

  keynote():void{
    for (let i = 0; i < 30; i++) {
      let idx = Math.floor(Math.random() * 4);
      const little = [["微信","QQ","腾讯视频"],["淘宝","天猫","支付宝"],["抖音","今日头条","懂车帝"],["百度贴吧","百度搜索","百度网盘"]]
      this.keynoteDomainNameList = [
        ...this.keynoteDomainNameList,
        {
          id: i + 1,
          domainName: domains[Math.floor(Math.random() * 20)] + domainEnds[Math.floor(Math.random() * 7)],
          serviceBig:["腾讯","阿里巴巴","字节跳动","百度"][idx],
          serviceLittle:little[idx][Math.floor(Math.random() * 3)],
          selectCount: Math.random() * 10 + Math.round(Math.random() * 1000) + 1000,
          outNetCount: Math.random() * 10 + Math.round(Math.random() * 500) + 500,
          inNetCount: Math.random() * 10 + Math.round(Math.random() * 500) + 500,
          proportion: Math.random() * 10 + 5,
        },
      ]
    }
  }

  search():void{

  }

  reset():void{

  }
}
