import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-communication-protocol-data',
  templateUrl: './communication-protocol-data.component.html',
  styleUrls: ['./communication-protocol-data.component.css']
})
export class CommunicationProtocolDataComponent implements OnInit {

  ipBarOption: any;
  ipPieOption: any;
  ipAreaPieOption: any;
  bgpBarOption: any;
  bgpDataList: any[] = [];
  ipDataList: any[] = [];
  ipAnalysisList: any[] = [];
  selectForm!: FormGroup;
  portOption = {
    title: {
      text: 'IP端口维度分析',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
        data: ['5662', '7581', '3365'],
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
        name: '直接访问',
        type: 'bar',
        barWidth: '60%',
        data: [7, 11, 12]
      }
    ]
  };
  customOption = {
    title: {
      text: '客户类型',
      subtext: 'IP地址段归属',
      left: 'center'
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
        name: '客户类型',
        type: 'pie',
        radius: '50%',
        data: [
          {value: 7, name: '家宽'},
          {value: 11, name: '集客'},
          {value: 12, name: '移动'},
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

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.selectForm = this.fb.group({
      dateRange: [],
      granularity: ['oneDay']
    });
    this.bgpBarChart();
    this.ipBarChart();
    this.ipPieChart();
    this.ipAreaPieChart();

    for (let i = 0; i < 300; i++) {
      this.bgpDataList = [
        ...this.bgpDataList,
        {
          id: i + 1,
          time: i < 8 ? '2021-05-01' : i < 16 ? '2021-05-02' : i < 24 ? '2021-05-03' : i < 32 ? '2021-05-04' : '2021-05-05',
          routerId: '35.26.12.'+i,
          asNumber: 230 + i,
          asPath: 'AS200, AS256, AS89',
          bgpNeighbor: i % 3 === 1 ? '173.12.3.52' : i % 3 === 2 ? '165.29.86.45' : '195.68.32.45',
          bgpASBR: '支持',
          bgpCommunity: '不支持',
          flow: Math.random()*10000 + 10000,
          validity: Math.floor(Math.random() * 5) + '年' + Math.floor(Math.random() * 12) + '月' + Math.floor(Math.random() * 365) + '日',
        },
      ]
    }

    for (let i = 0; i < 300; i++) {
      this.ipDataList = [
        ...this.ipDataList,
        {
          id: i + 1,
          time: i < 8 ? '2021-05-01' : i < 16 ? '2021-05-02' : i < 24 ? '2021-05-03' : i < 32 ? '2021-05-04' : '2021-05-05',
          srcIp: i % 3 === 1 ? '173.12.3.52' : i % 3 === 2 ? '165.29.86.45' : '195.68.32.45',
          srcPort: i % 3 === 1 ? 5662 : i % 3 === 2 ? 7581 : 3365,
          destIp: i % 3 === 1 ? '163.22.51.6' : i % 3 === 2 ? '189.63.47.12' : '143.23.25.43',
          destPort: i % 3 === 1 ? 8546 : i % 3 === 2 ? 8599 : 4785,
          transportLayerProtocol: 'TCP',
          area: i % 3 === 1 ? '中国云南普洱市思茅区' : i % 3 === 2 ? '中国云南丽江市古城区' : '中国云南昆明市五华区',
          app: 'https应用',
          flow: Math.random() * 10000 + 10000,
          dscp: Math.random() * 10,
          validity: Math.floor(Math.random() * 5) + '年' + Math.floor(Math.random() * 12) + '月' + Math.floor(Math.random() * 365) + '日',
        },
      ];
    }

    for (let i = 0; i < 30; i++) {
      this.ipAnalysisList = [
        ...this.ipAnalysisList,
        {
          id: i + 1,
          ip: i % 3 === 1 ? '173.12.3.52/24' : i % 3 === 2 ? '165.29.86.45/24' : '195.68.32.45/24',
          port: i % 3 === 1 ? 5662 : i % 3 === 2 ? 7581 : 3365,
          percent: i % 3 === 1 ? '24%' : i % 3 === 2 ? '4%' : '13%',
          type: i % 3 === 1 ? '家宽' : i % 3 === 2 ? '集客' : '移动',
        }
      ];
    }
  }

  exportFile(): void {
    this.downloadFile(this.ipDataList.toString());
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
  search(): void {

  }

  bgpBarChart(): void{
    this.bgpBarOption={
      title:{
        text:'单一或特定路由组'
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
      legend: {
        data: ['路由组1', '路由组2', 'BGP1', 'BGP2']
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {show: false},
          data: ['2021/05/02', '2021/05/03', '2021/05/04', '2021/05/05', '2021/05/06', '2021/05/07', '2021/05/08'],
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '路由组1',
          type: 'bar',
          barGap: 0,
          label: {
            show: true,
            formatter: '{c}GB'
          },
          emphasis: {
            focus: 'series'
          },
          data: [12320, 13332, 12301, 12334, 12390, 13625, 12369]
        },
        {
          name: '路由组2',
          type: 'bar',
          label: {
            show: true,
            formatter: '{c}GB'
          },
          emphasis: {
            focus: 'series'
          },
          data: [11220, 11182, 12191, 12234, 11290, 11568,11259]
        },
        {
          name: 'BGP1',
          type: 'bar',
          label: {
            show: true,
            formatter: '{c}GB'
          },
          emphasis: {
            focus: 'series'
          },
          data: [14150, 13232, 14201, 14154, 14190,13598,14563]
        },
        {
          name: 'BGP2',
          type: 'bar',
          label: {
            show: true,
            formatter: '{c}GB'
          },
          emphasis: {
            focus: 'series'
          },
          data: [9098, 9977, 9101, 9899, 9740,9630, 9658]
        }
      ]
    };
  }

  ipBarChart(): void{
    this.ipBarOption = {
      title: {
        text: 'IPV4 IPV6趋势图'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          dataView: {show: true, readOnly: false},
          magicType: {show: true, type: ['line', 'bar']},
          restore: {show: true},
          saveAsImage: {show: true}
        }
      },
      legend: {
        data: ['IPV4', 'IPV6', '比值']
      },
      xAxis: [
        {
          type: 'category',
          data: ['2021/05/02', '2021/05/03', '2021/05/04', '2021/05/05', '2021/05/06', '2021/05/07', '2021/05/08'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '次数',
          min: 0,
          max: 40000,
          interval: 10000,
          axisLabel: {
            formatter: '{value} 次'
          }
        },
        {
          type: 'value',
          name: '比值',
          min: 0,
          max: 1.6,
          interval: 0.1,
          axisLabel: {
            formatter: '{value}'
          }
        }
      ],
      series: [
        {
          name: 'IPV4',
          type: 'bar',
          data: [28203, 27489, 27034, 27970, 28744, 27230, 28365]
        },
        {
          name: 'IPV6',
          type: 'bar',
          data: [17825, 16938, 16800, 17594, 18641, 16807, 17922]
        },
        {
          name: '比值',
          type: 'line',
          yAxisIndex: 1,
          data: [1.58, 1.62, 1.61, 1.59, 1.54, 1.62, 1.58]
        }
      ]
    };
  }

  ipPieChart(): void{
    this.ipPieOption= {
      title: {
        text: 'IPV4和IPV6',
        left: 'center'
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
          name: 'IP类型',
          type: 'pie',
          radius: '50%',
          label: {
            show: true,
            formatter: '{b}: {d}%'
          },
          data: [
            {value: 72, name: 'IPV4'},
            {value: 28, name: 'IPV6'},
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

  ipAreaPieChart(): void {
    this.ipAreaPieOption = {
      title: {
        text: '地理维度流量占比',
        left: 'center'
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
          name: '流量',
          type: 'pie',
          radius: '50%',
          label: {
            show: true,
            formatter: '{c}GB'
          },
          data: [
            {value: 26480, name: '中国云南昆明市'},
            {value: 17350, name: '中国云南普洱市'},
            {value: 15800, name: '中国云南丽江市'},
            {value: 10484, name: '中国云南昭通市'},
            {value: 13300, name: '中国云南玉溪市'},
            {value: 12484, name: '中国云南保山市'},
            {value: 11300, name: '中国云南临沧市'}
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
}
