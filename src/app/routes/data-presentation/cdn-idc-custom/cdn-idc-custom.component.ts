import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-cdn-idc-custom',
  templateUrl: './cdn-idc-custom.component.html',
  styleUrls: ['./cdn-idc-custom.component.css']
})
export class CdnIdcCustomComponent implements OnInit {

  dnsListOfColumn = [
    {
      title: '序号',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '时间',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: 'CDN客户',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '域',
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
      title: 'IP',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '业务类型',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '流量(GB)',
      compare: (a: any, b: any) => a.inFlow - b.inFlow,
      priority: 2,
      flag: true
    },
    {
      title: '排名',
      compare: (a: any, b: any) => a.rank - b.rank,
      priority: 2,
      flag: true
    },
    {
      title: '存储有效期',
      compare: null,
      priority: false,
      flag: false
    }
  ];

  cdnSummaryTableTitle = [
    {
      title: '序号',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '业务名称',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '解析总次数',
      compare: (a: any, b: any) => a.hosts - b.hosts,
      priority: 0,
      flag: true
    },
    {
      title: '分发域名次数',
      compare: (a: any, b: any) => a.clicks - b.clicks,
      priority: 1,
      flag: true
    },
    {
      title: '分发出网域名数量',
      compare: (a: any, b: any) => a.resouces - b.resouces,
      priority: 2,
      flag: true
    },
    {
      title: '本网率',
      compare: (a: any, b: any) => a.accuracy - b.accuracy,
      priority: 2,
      flag: true
    },
    {
      title: '本省率',
      compare: null,
      priority: 2,
      flag: true
    },
    {
      title: '省内域名占比',
    },
    {
      title: '它省域名占比',
    },
    {
      title: 'BGP域名占比',
    },
    {
      title: '网外域名占比',
    },
    {
      title: '不稳定域名占比',
    },
    {
      title: '解析至省内域名占比',
    },
    {
      title: '解析至它省域名数',
    },
    {
      title: '解析至BGP域名数',
    },
    {
      title: '解析至网外域名数',
    },
    {
      title: '不稳定域名数',
    }
  ];
  idcSummaryTableTitle = [
    {
      title: '序号',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '业务名称',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '日均域名个数',
      compare: (a: any, b: any) => a.hosts - b.hosts,
      priority: 0,
      flag: true
    },
    {
      title: '日均点击次数',
      compare: (a: any, b: any) => a.clicks - b.clicks,
      priority: 1,
      flag: true
    },
    {
      title: 'IDC资源贡献占比',
      compare: (a: any, b: any) => a.resouces - b.resouces,
      priority: 2,
      flag: true
    },
    {
      title: 'IDC资源调度准确率',
      compare: (a: any, b: any) => a.accuracy - b.accuracy,
      priority: 2,
      flag: true
    },
    {
      title: '存储有效期',
      compare: null,
      priority: 2,
      flag: true
    }
  ];
  connectionTableTitle = [
    {
      title: '序号',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '应用名称',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: 'CDN厂商',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '支持占比',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: 'CDN厂商',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '支持占比',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: 'CDN厂商',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '支持占比',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: 'CDN厂商',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '支持占比',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '存储有效期',
      compare: null,
      priority: false,
      flag: false
    }
  ];

  cdnTimesBarOption: any;
  cdnResourceBarOption: any;
  cdnAccuracyBarOption: any;
  idcTimesBarOption: any;
  idcResourceBarOption: any;
  idcAccuracyBarOption: any;
  a: number;
  b: number;
  c: number;
  d: number;

  cdnSummaryTable: any[] = [];
  connectionTable: any[] = [];
  dnsDataList: any[] = [];

  selectForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.selectForm = this.fb.group({
      dateRange: [],
      granularity: ['oneDay']
    });
    const business = ['网宿科技股份有限公司', '北京金山云网络技术有限公司', '华为软件技术有限公司',
    '广东浩云长盛网络股份有限公司', '阿里云计算有限公司', '贵阳忆联网络有限公司', '京东',
    '北京爱奇艺科技有限公司', '深圳腾讯计算机系统有限公司', '云上贵州'];
    const hosts = ['17328', '1501', '68823', '2', '62964', '2158', '965', '1657', '7261', '2549'];
    const outHosts = ['12958', '975', '43952', '2', '40436', '1296', '305', '749', '3940', '1607'];
    const clicks = ['1808392334', '3770094508', '369289932', '2', '7497321379', '473497195', '596347917', '232151107', '2214202929', '1589590257'];
    const inNetRate = ['35.2%', '42.5%', '30.9%', '100%', '33.6%', '36.3%', '31.7%', '46.3%', '48.4%', '34.6%'];
    const inProRate = ['13.5%', '21.8%', '10.5%', '100%', '18.3%', '16.7%', '14.2%', '18.6%', '18.7%', '16.1%'];
    const inHostRate = ['12.5%', '17.8%', '7.5%', '100%', '14.3%', '12.7%', '11.2%', '13.6%', '14.7%', '12.1%'];
    const outHostRate = ['74.5%', '64.8%', '83.5%', '0%', '74.3%', '74.7%', '79.2%', '76.6%', '71.7%', '80.1%'];
    const bgp = ['8.2%', '12.5%', '7.3%', '0%', '7.5', '5.7%', '12.4%', '9.9%', '11.3%', '5.6%'];
    const outHost = ['74.5%', '64.8%', '83.5%', '0%', '74.3%', '74.7%', '79.2%', '76.6%', '71.7%', '80.1%'];
    const unStable = ['2.2%', '4.5%', '2.3%', '0%', '1.5', '2.7%', '3.4%', '1.9%', '2.3%', '1.6%'];
    const resouces = ['974', '203', '199', '0', '404', '255', '321', '125', '119', '856'];
    const un = ['142', '43', '51', '0', '105', '120', '152', '54', '14', '432'];
    const accuracy = ['58.222%', '87.36%', '78.836%', '100%', '71.084%', '32.015%', '84.769%', '19.52%', '47.356%', '37.97%'];
    const app = ['新浪微博', '拼多多', '淘宝', '微信', 'QQ', '优酷', '爱奇艺', '腾讯视频', '快手', '抖音'];
    for (let i = 0; i < 10; i++){
      this.cdnSummaryTable = [
        ...this.cdnSummaryTable,
        {
          id: i + 1,
          business: business[i],
          clicks: clicks[i],
          hosts: hosts[i],
          outHosts: outHosts[i],
          inNetRate: inNetRate[i],
          inProRate: inProRate[i],
          inHostRate: inHostRate[i],
          outHostRate: outHostRate[i],
          bgp: bgp[i],
          outHost: outHost[i],
          unStable: unStable[i],
          toPro: inNetRate[i],
          toOut: outHostRate[i],
          tobgp: resouces[i],
          out: outHosts[i],
          un: un[i]
        }
      ];
    }
    for (let i = 0; i < 10; i++){
      this.a = Math.floor(Math.random() * 100);
      this.b = Math.floor(Math.random() * (100 - this.a));
      this.c = Math.floor(Math.random() * (100 - this.a - this.b));
      this.d = 100 - this.a - this.b - this.c;
      this.connectionTable = [
        ...this.connectionTable,
        {
          id: i + 1,
          business: app[i],
          cdn1: business[Math.floor(Math.random() * 10)],
          percent1: this.a + '%',
          cdn2: business[Math.floor(Math.random() * 10)],
          percent2: this.b + '%',
          cdn3: business[Math.floor(Math.random() * 10)],
          percent3: this.c + '%',
          cdn4: business[Math.floor(Math.random() * 10)],
          percent4: this.d + '%',
          validity: Math.floor(Math.random() * 5) + '年' + Math.floor(Math.random() * 12) + '月' + Math.floor(Math.random() * 365) + '日',

        }
      ];
    }

    for (let i = 0; i < 300; i++) {
      this.dnsDataList = [
        ...this.dnsDataList,
        {
          id: i + 1,
          time: i < 8 ? '2021-05-01' : i < 16 ? '2021-05-02' : i < 24 ? '2021-05-03' : i < 32 ? '2021-05-04' : '2021-05-05',
          cdn: i % 3 === 1 ? '淘宝（中国）软件有限公司' : i % 3 === 2 ? '深圳市腾讯计算机系统有限公司' : '北京爱奇艺科技有限公司',
          website: i % 3 === 1 ? 'www.tbcache.com' : i % 3 === 2 ? 'www.qq.com' : 'www.iqiyi.com',
          domainName: i % 3 === 1 ? 'taobao.com' : i % 3 === 2 ? 'qq.com' : 'iqiyi.com',
          srcAddress: i % 3 === 1 ? '173.12.3.52' : i % 3 === 2 ? '165.29.86.45' : '195.68.32.45',
          sp: i % 3 === 1 ? '电商' : i % 3 === 2 ? '游戏' : '视频',
          requestCount: Math.random() * 40 + 50,
          flow: Math.random() * 4000 + 1000 + Math.abs(i-300)*20000,
          rank: i+1,
          validity: Math.floor(Math.random() * 5) + '年' + Math.floor(Math.random() * 12) + '月' + Math.floor(Math.random() * 365) + '日',
        },
      ]
    }
    this.search();
  }

  exportFile(): void {
    this.downloadFile(this.cdnSummaryTable.toString());
  }

  downloadFile(data): void {
    // 下载类型 xls
    const contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    // 下载类型：csv
    const contentType2 = 'text/csv';
    const blob = new Blob([data], { type: contentType2 });
    const url = window.URL.createObjectURL(blob);
    // 打开新窗口方式进行下载
    // window.open(url);
    // 以动态创建a标签进行下载
    const a = document.createElement('a');
    const fileName = '20210526174243';
    a.href = url;
    // a.download = fileName;
    a.download = fileName + '.csv';
    a.click();
    window.URL.revokeObjectURL(url);
}

  cdnTimesBarCharts(): void {
    this.cdnTimesBarOption = {
      title: {
        text: 'CDN日均引入次数',
        left: 'center'
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
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
      xAxis: [
        {
          type: 'category',
          data: ['1-10次', '11-100次', '101-1000次', '1001-10000次', '10001次以上'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: {
        type: 'value'
      },
      series: [{
        name: '日均域名个数',
        type: 'bar',
        barWidth: '60%',
        data: [104810, 36934, 19005, 7383, 3715]
      }]
    };
  }
  cdnResouceBarCharts(): void {
    this.cdnResourceBarOption = {
      title: {
        text: 'CDN资源贡献占比',
        subtext: '百分比',
        left: 'center'
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '50%',
          data: [
            {value: 9.748, name: '网宿科技股份有限公司'},
            {value: 20.323, name: '北京金山云网络技术有限公司'},
            {value: 1.991, name: '华为软件技术有限公司'},
            {value: 0, name: '广东浩云长盛网络股份有限公司'},
            {value: 40.415, name: '阿里云计算有限公司'},
            {value: 2.552, name: '贵阳忆联网络有限公司'},
            {value: 3.215, name: '京东'},
            {value: 1.251, name: '北京爱奇艺科技有限公司'},
            {value: 11.936, name: '深圳腾讯计算机系统有限公司'},
            {value: 8.569, name: '云上贵州'},
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
  cdnAccuraryBarCharts(): void {
    this.cdnAccuracyBarOption = {
      title: {
        text: 'CDN资源调度准确率',
        subtext: '百分比'
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
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
        data: ['网宿科技股份有限公司', '北京金山云网络技术有限公司', '华为软件技术有限公司',
          '广东浩云长盛网络股份有限公司', '阿里云计算有限公司', '贵阳忆联网络有限公司', '京东',
          '北京爱奇艺科技有限公司', '深圳腾讯计算机系统有限公司', '云上贵州']
      },
      series: [
        {
          name: '准确率',
          type: 'bar',
          data: [58.222, 87.36, 78.836, 100, 71.084, 32.015, 84.769, 19.52, 47.356, 37.97]
        },
      ]
    };
  }
  idcTimesBarCharts(): void {
    this.idcTimesBarOption = {
      title: {
        text: 'IDC日均引入次数',
        left: 'center'
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
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
      xAxis: [
        {
          type: 'category',
          data: ['1-10次', '11-100次', '101-1000次', '1001-10000次', '10001次以上'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: {
        type: 'value'
      },
      series: [{
        name: '日均域名个数',
        type: 'bar',
        barWidth: '60%',
        data: [104810, 36934, 19005, 7383, 3715]
      }]
    };
  }
  idcResouceBarCharts(): void {
    this.idcResourceBarOption = {
      title: {
        text: 'IDC资源贡献占比',
        subtext: '百分比',
        left: 'center'
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '50%',
          data: [
            {value: 9.748, name: '网宿科技股份有限公司'},
            {value: 20.323, name: '北京金山云网络技术有限公司'},
            {value: 1.991, name: '华为软件技术有限公司'},
            {value: 0, name: '广东浩云长盛网络股份有限公司'},
            {value: 40.415, name: '阿里云计算有限公司'},
            {value: 2.552, name: '贵阳忆联网络有限公司'},
            {value: 3.215, name: '京东'},
            {value: 1.251, name: '北京爱奇艺科技有限公司'},
            {value: 11.936, name: '深圳腾讯计算机系统有限公司'},
            {value: 8.569, name: '云上贵州'},
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
  idcAccuraryBarCharts(): void {
    this.idcAccuracyBarOption = {
      title: {
        text: 'IDC资源调度准确率',
        subtext: '百分比'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
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
        data: ['网宿科技股份有限公司', '北京金山云网络技术有限公司', '华为软件技术有限公司',
          '广东浩云长盛网络股份有限公司', '阿里云计算有限公司', '贵阳忆联网络有限公司', '京东',
          '北京爱奇艺科技有限公司', '深圳腾讯计算机系统有限公司', '云上贵州']
      },
      series: [
        {
          name: '准确率',
          type: 'bar',
          data: [58.222, 87.36, 78.836, 100, 71.084, 32.015, 84.769, 19.52, 47.356, 37.97]
        },
      ]
    };
  }

  search(): void{
    this.cdnTimesBarCharts();
    this.cdnResouceBarCharts();
    this.cdnAccuraryBarCharts();
    this.idcTimesBarCharts();
    this.idcResouceBarCharts();
    this.idcAccuraryBarCharts();
  }
}

