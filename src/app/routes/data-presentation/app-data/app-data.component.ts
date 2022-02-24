import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-app-data',
  templateUrl: './app-data.component.html',
  styleUrls: ['./app-data.component.css']
})
export class AppDataComponent implements OnInit {

  appListOfColumn = [
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
      title: '应用类型',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '最小流速(Gbps)',
      compare: (a: any, b: any) => a.minBandwidth - b.minBandwidth,
      priority: 2,
      flag: true
    },
    {
      title: '最大流速(Gbps)',
      compare: (a: any, b: any) => a.maxBandwidth - b.maxBandwidth,
      priority: 1,
      flag: true
    },
    {
      title: '总流量(GB)',
      compare: (a: any, b: any) => a.allFlow - b.allFlow,
      priority: 2,
      flag: true
    },
    {
      title: '网内流量(GB)',
      compare: (a: any, b: any) => a.inFlow - b.inFlow,
      priority: 1,
      flag: true
    },
    {
      title: '网外流量(GB)',
      compare: (a: any, b: any) => a.outFlow - b.outFlow,
      priority: 0,
      flag: true
    },
    {
      title: '存储有效期',
      compare: null,
      priority: false,
      flag: false
    }
  ];

  websiteListOfColumn = [
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
      title: '网站',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '应用类型',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '总流量(GB)',
      compare: (a: any, b: any) => a.allFlow - b.allFlow,
      priority: 2,
      flag: true
    },
    {
      title: '网内流量(GB)',
      compare: (a: any, b: any) => a.inFlow - b.inFlow,
      priority: 1,
      flag: true
    },
    {
      title: '网外流量(GB)',
      compare: (a: any, b: any) => a.outFlow - b.outFlow,
      priority: 0,
      flag: true
    },
    {
      title: '存储有效期',
      compare: null,
      priority: false,
      flag: false
    }
  ];

  hotListOfColumn = [
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
      title: '网站',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '源地址',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '服务提供商',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '总流量(GB)',
      compare: (a: any, b: any) => a.allFlow - b.allFlow,
      priority: 2,
      flag: true
    },
    {
      title: '上行流量(GB)',
      compare: (a: any, b: any) => a.upFlow - b.upFlow,
      priority: 1,
      flag: true
    },
    {
      title: '下行流量(GB)',
      compare: (a: any, b: any) => a.downFlow - b.downFlow,
      priority: 0,
      flag: true
    },
    {
      title: '存储有效期',
      compare: null,
      priority: false,
      flag: false
    }
  ];

  domainListOfColumn = [
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
      title: '域名',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '总流量(GB)',
      compare: (a: any, b: any) => a.allFlow - b.allFlow,
      priority: 2,
      flag: true
    },
    {
      title: '上行流量(GB)',
      compare: (a: any, b: any) => a.upFlow - b.upFlow,
      priority: 1,
      flag: true
    },
    {
      title: '下行流量(GB)',
      compare: (a: any, b: any) => a.downFlow - b.downFlow,
      priority: 0,
      flag: true
    },
    {
      title: '存储有效期',
      compare: null,
      priority: false,
      flag: false
    }
  ];

  appPieOption: any;
  appInOutLineOption: any;
  appAllTypeLineOption: any;
  appBarOption: any;
  websiteTop10BarOption: any;
  websitePieOption: any;
  hotBarOption: any;
  hotPieOption: any;
  domainBarOption: any;

  appDataList: any[] = [];
  websiteDataList: any[] = [];
  hotDataList: any[] = [];
  domainDataList: any[] = [];

  selectForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.selectForm = this.fb.group({
      dateRange: [],
      granularity: ['oneDay']
    });
    for (let i = 0; i < 300; i++) {
      this.appDataList = [
        ...this.appDataList,
        {
          id: i + 1,
          time: i < 8 ? '2021-05-01' : i < 16 ? '2021-05-02' : i < 24 ? '2021-05-03' : i < 32 ? '2021-05-04' : '2021-05-05',
          appType: i % 3 === 1 ? 'web视频' : i % 3 === 2 ? '移动应用' : 'https应用',
          minBandwidth: i % 3 === 1 ? Math.random() + 10 : i % 3 === 2 ? Math.random() + 6 : Math.random() + 2,
          maxBandwidth: i % 3 === 1 ? Math.random() * 10 + 80 : i % 3 === 2 ? Math.random() * 10 + 20 : Math.random() * 10 + 5,
          allFlow: i % 3 === 1 ? Math.random() * 40000 + 30000 : i % 3 === 2 ? Math.random() * 40000 + 20000 : Math.random() * 10000 + 5000,
          inFlow: i % 3 === 1 ? Math.random() * 40000 + 15000 : i % 3 === 2 ? Math.random() * 40000 + 8000 : Math.random() * 10000 + 3000,
          outFlow: i % 3 === 1 ? Math.random() * 400 + 1000 : i % 3 === 2 ? Math.random() * 400 + 500 : Math.random() * 200 + 1000,
          validity: Math.floor(Math.random() * 5) + '年' + Math.floor(Math.random() * 12) + '月' + Math.floor(Math.random() * 365) + '日',
        },
      ]
    }
    for (let i = 0; i < 300; i++) {
      this.websiteDataList = [
        ...this.websiteDataList,
        {
          id: i + 1,
          time: i < 8 ? '2021-05-01' : i < 16 ? '2021-05-02' : i < 24 ? '2021-05-03' : i < 32 ? '2021-05-04' : '2021-05-05',
          website: i % 3 === 0 ? '腾讯视频' : i % 3 === 1 ? '抖音' : i % 3 === 2 ? '微信' : '爱奇艺',
          appType: i % 3 === 1 ? 'web视频' : i % 3 === 2 ? '移动应用' : 'https应用',
          allFlow: Math.random() * 4000 + 20000,
          inFlow: Math.random() * 4000 + 10000,
          outFlow: Math.random() * 400 + 200,
          validity: Math.floor(Math.random() * 5) + '年' + Math.floor(Math.random() * 12) + '月' + Math.floor(Math.random() * 365) + '日',
        },
      ]
    }
    for (let i = 0; i < 300; i++) {
      this.hotDataList = [
        ...this.hotDataList,
        {
          id: i + 1,
          time: i < 8 ? '2021-05-01' : i < 16 ? '2021-05-02' : i < 24 ? '2021-05-03' : i < 32 ? '2021-05-04' : '2021-05-05',
          website: i % 3 === 1 ? '腾讯视频' : i % 3 === 2 ? '抖音' : '微信',
          srcAddress: i % 3 === 1 ? '173.12.3.52' : i % 3 === 2 ? '165.29.86.45' : '195.68.32.45',
          sp: i % 3 === 1 ? '帝联' : i % 3 === 2 ? '蓝汛' : '网宿',
          allFlow: Math.random() * 4000 + 20000,
          upFlow: Math.random() * 4000 + 10000,
          downFlow: Math.random() * 400 + 200,
          validity: Math.floor(Math.random() * 5) + '年' + Math.floor(Math.random() * 12) + '月' + Math.floor(Math.random() * 365) + '日',
        },
      ]
    }
    for (let i = 0; i < 300; i++) {
      this.domainDataList = [
        ...this.domainDataList,
        {
          id: i + 1,
          time: i < 8 ? '2021-05-01' : i < 16 ? '2021-05-02' : i < 24 ? '2021-05-03' : i < 32 ? '2021-05-04' : '2021-05-05',
          domain: i % 3 === 1 ? 'v.qq.com' : i % 3 === 2 ? 'douyin.com' : 'taobao.com',
          allFlow: Math.random() * 4000 + 20000,
          upFlow: Math.random() * 4000 + 10000,
          downFlow: Math.random() * 400 + 200,
          validity: Math.floor(Math.random() * 5) + '年' + Math.floor(Math.random() * 12) + '月' + Math.floor(Math.random() * 365) + '日',
        },
      ]
    }
    this.search();
  }

  exportFile(): void {
    this.downloadFile(this.appListOfColumn.toString());
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

  search(){
    this.appPieChart();
    this.appInOutLineChart();
    this.appAllTypeLineChart();
    this.appBarChart();
    this.websiteTop10BarChart();
    this.websitePieChart();
    this.hotBarChart();
    this.hotPieChart();
    this.domainBarChart();
  }

  appPieChart(): void {
    this.appPieOption = {
      title: {
        text: '各应用流量占比(GB)',
        left: 'center',

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
          name: '应用',
          type: 'pie',
          radius: '60%',
          top: '10%',
          left: '10%',
          data: [
            {value: 1235, name: 'web视频'},
            {value: 1100, name: 'P2P下载'},
            {value: 1023, name: 'http下载'},
            {value: 965, name: 'P2P视频'},
            {value: 865, name: '即时通讯'},
            {value: 750, name: '移动应用'},
            {value: 665, name: 'P2P视频'},
            {value: 596, name: 'https应用'},
            {value: 546, name: '网络游戏'},
            {value: 451, name: '常规协议'},
            {value: 265, name: '其它'}
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

  appInOutLineChart(): void {
    let base = +new Date(2021, 5, 3);
    let oneDay = 1000;

    let inData = [[base, Math.random() * 8]];
    let outData = [[base, Math.random() * 5]];

    for (let i = 1; i < 10000; i++) {
      let now = new Date(base += oneDay);
      inData.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),

        Math.abs(Math.round((Math.random() - 0.5) * 8 + inData[i - 1][1]))
      ]);
      outData.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        Math.abs(Math.round((Math.random() - 0.5) * 5 + outData[i - 1][1]))
      ]);
    }

    this.appInOutLineOption = {
      tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
        }
      },
      legend: {
        data: ['网内', '网外'],
        top: '8%'
      },
      title: {
        left: 'center',
        text: '全流量一天趋势图（Gbps）',
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
      xAxis: {
        type: 'time',
        boundaryGap: false
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
      },
      dataZoom: [{
        type: 'inside',
        start: 0,
        end: 20
      }, {
        start: 0,
        end: 20
      }],
      series: [
        {
          name: '网内',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: inData
        },
        {
          name: '网外',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: outData
        }
      ]
    };
  }

  appAllTypeLineChart(): void {
    let base = +new Date(2021, 5, 3);
    let oneDay = 1000;

    let data1 = [[base, Math.random() * 10]];
    let data2 = [[base, Math.random() * 10]];
    let data3 = [[base, Math.random() * 10]];
    let data4 = [[base, Math.random() * 10]];
    let data5 = [[base, Math.random() * 10]];
    let data6 = [[base, Math.random() * 10]];
    let data7 = [[base, Math.random() * 10]];
    let data8 = [[base, Math.random() * 10]];
    let data9 = [[base, Math.random() * 10]];
    let data10 = [[base, Math.random() * 10]];
    let data11 = [[base, 0]];

    for (let i = 0; i < 4000; i++) {
      let now = new Date(base += oneDay);
      data11.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        Math.abs(Math.round((Math.random() - 0.5) * 5 + data11[i][1]))
      ]);
      data10.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        data11[i][1] + 10
      ]);
      data9.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        data10[i][1] + 10
      ]);
      data8.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        data9[i][1] + 10
      ]);
      data7.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        data8[i][1] + 10
      ]);
      data6.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        data7[i][1] + 10
      ]);
      data5.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        data6[i][1] + 10
      ]);
      data4.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        data5[i][1] + 10
      ]);
      data3.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        data4[i][1] + 10
      ]);
      data2.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        data3[i][1] + 10
      ]);
      data1.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        data2[i][1] + 10
      ]);
    }

    this.appAllTypeLineOption = {
      tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
        }
      },

      legend: {
        data: ['web视频', 'P2P下载', 'http下载', 'P2P视频', '即时通讯', '移动应用', 'P2P视频', 'https应用', '网络游戏', '常规协议', '其它'],
        top: '8%'
      },
      title: {
        left: 'center',
        text: '各应用分组流速叠加图（Gbps)',
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
      xAxis: {
        type: 'time',
        boundaryGap: false
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
      },
      series: [
        {
          name: 'web视频',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: data1
        },
        {
          name: 'P2P下载',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: data2
        },
        {
          name: 'http下载',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: data3
        },
        {
          name: 'P2P视频',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: data4
        },
        {
          name: '即时通讯',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: data5
        },
        {
          name: '移动应用',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: data6
        },
        {
          name: 'P2P视频',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: data7
        },
        {
          name: 'https应用',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: data8
        },
        {
          name: '网络游戏',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: data9
        },
        {
          name: '常规协议',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: data10
        },
        {
          name: '其它',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: data11
        }
      ]
    };
  }

  appBarChart(): void {
    this.appBarOption = {
      title: {
        text: '各应用网内网外流量对比(GB)',
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // Use axis to trigger tooltip
          type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
        }
      },
      legend: {
        data: ['网内', '网外'],
        top: '8%'
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
        type: 'category',
        data: ['web视频', 'P2P下载', 'http下载', 'P2P视频', '即时通讯', '移动应用', 'P2P视频', 'https应用', '网络游戏', '常规协议', '其它'],
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '网内',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [1320, 1202, 1032, 965, 872, 720, 639, 302, 210, 96, 72]
        },
        {
          name: '网外',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [220, 132, 100, 89, 63, 21, 53, 42, 12, 6, 5]
        },
      ]
    };
  }

  websiteTop10BarChart(): void {
    this.websiteTop10BarOption = {
      title: {
        text: '网站流量TOP10',
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
        data: ['新浪微博', '拼多多', '淘宝', '微信', 'QQ', '优酷', '爱奇艺', '腾讯视频', '快手', '抖音']
      },
      series: [
        {
          name: '2011年',
          type: 'bar',
          data: [230, 360, 780, 920, 1350, 1986, 2530, 2845, 3530, 4620,]
        }
      ]
    };
  }

  websitePieChart(): void {
    this.websitePieOption = {
      title: {
        text: '各网站流量占比(GB)',
        left: 'center',

      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
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
      series: [
        {
          name: '网站',
          type: 'pie',
          radius: '60%',
          top: '10%',
          left: '10%',
          data: [
            {value: 1235, name: '抖音'},
            {value: 1100, name: '快手'},
            {value: 1023, name: '腾讯视频'},
            {value: 965, name: '爱奇艺'},
            {value: 865, name: '优酷'},
            {value: 750, name: 'QQ'},
            {value: 665, name: '微信'},
            {value: 596, name: '淘宝'},
            {value: 546, name: '拼多多'},
            {value: 451, name: '新浪微博'},
            {value: 265, name: '其它'}
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

  hotBarChart(): void {
    this.hotBarOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      title: {
        text: '热点应用网内源地址TOP15',
        left: 'center',
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
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
      xAxis: [
        {
          type: 'category',
          data: ['173.12.3.52', '165.29.86.45', '195.68.32.45', '172.12.36.56', '171.65.12.3', '165.12.36.55', '189.69.8.61', '201.56.2.35', '178.65.93.54', '145.36.25.78', '210.23.56.3', '135.63.21.54', '154.25.66.3', '147.58.23.2', '168.0.23.5'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '网内源地址',
          type: 'bar',
          barWidth: '60%',
          data: [9830, 9152, 8500, 7334, 6390, 5330, 4220, 3960, 3102, 2365, 1650, 920, 850, 720, 630]
        }
      ]
    };
  }

  hotPieChart(): void {
    this.hotPieOption = {
      angleAxis: {
        type: 'category',
        data: ['帝联', '蓝汛', '网宿', '快网']
      },
      radiusAxis: {},
      title: {
        text: '热点应用网内源地址和服务提供商分布',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
      polar: {},
      series: [{
        type: 'bar',
        data: [3730, 4643, 3724, 4811],
        coordinateSystem: 'polar',
        name: '173.12.3.52',
        stack: 'a',
        emphasis: {
          focus: 'series'
        }
      }, {
        type: 'bar',
        data: [3542, 2564, 5586, 3491],
        coordinateSystem: 'polar',
        name: '165.29.86.45',
        stack: 'a',
        emphasis: {
          focus: 'series'
        }
      }, {
        type: 'bar',
        data: [1411, 1322, 3313, 2323],
        coordinateSystem: 'polar',
        name: '195.68.32.45',
        stack: 'a',
        emphasis: {
          focus: 'series'
        }
      }, {
        type: 'bar',
        data: [931, 942, 1943, 1964],
        coordinateSystem: 'polar',
        name: '172.12.36.56',
        stack: 'a',
        emphasis: {
          focus: 'series'
        }
      }, {
        type: 'bar',
        data: [1431, 822, 893, 1564],
        coordinateSystem: 'polar',
        name: '171.65.12.3',
        stack: 'a',
        emphasis: {
          focus: 'series'
        }
      }, {
        type: 'bar',
        data: [951, 722, 783, 1074],
        coordinateSystem: 'polar',
        name: '165.12.36.55',
        stack: 'a',
        emphasis: {
          focus: 'series'
        }
      }, {
        type: 'bar',
        data: [561, 432, 301, 269],
        coordinateSystem: 'polar',
        name: '189.69.8.61',
        stack: 'a',
        emphasis: {
          focus: 'series'
        }
      }, {
        type: 'bar',
        data: [362, 254, 196, 352],
        coordinateSystem: 'polar',
        name: '201.56.2.35',
        stack: 'a',
        emphasis: {
          focus: 'series'
        }
      }, {
        type: 'bar',
        data: [298, 109, 105, 288],
        coordinateSystem: 'polar',
        name: '178.65.93.54',
        stack: 'a',
        emphasis: {
          focus: 'series'
        }
      }],
      legend: {
        show: true,
        top: '5%',
        orient: 'vertical',
        left: 'left',
        data: ['173.12.3.52', '165.29.86.45', '195.68.32.45', '172.12.36.56', '171.65.12.3', '165.12.36.55', '189.69.8.61', '201.56.2.35', '178.65.93.54']
      }
    };
  }

  domainBarChart(): void{
    this.domainBarOption = {
      title: {
        text: '域名流量TOP10',
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
        data: ['weibo.com', 'pdd.com', 'taobao.com', 'wechat.com', 'qq.com', 'youku.com', 'aiqiyi.com', 'v.qq.com', 'ks.com', 'douyin.com']
      },
      series: [
        {
          name: '2011年',
          type: 'bar',
          data: [230, 360, 780, 920, 1350, 1986, 2530, 2845, 3530, 4620,]
        }
      ]
    };
  }
}
