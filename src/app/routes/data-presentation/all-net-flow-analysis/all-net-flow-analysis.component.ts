import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-all-net-flow-analysis',
  templateUrl: './all-net-flow-analysis.component.html',
  styleUrls: ['./all-net-flow-analysis.component.css']
})
export class AllNetFlowAnalysisComponent implements OnInit {

  listOfColumn = [
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
      title: '存储有效期',
      compare: null,
      priority: false,
      flag: false
    }
  ];

  allFlowLineOption: any;
  allFlowPieOption: any;
  dataList: any[] = [];
  selectForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.selectForm = this.fb.group({
      dateRange: [],
      granularity: ['oneDay']
    });
    for (let i = 0; i < 300; i++) {
      this.dataList = [
        ...this.dataList,
        {
          id: i + 1,
          time: i < 8 ? '2021-05-01' : i < 16 ? '2021-05-02' : i < 24 ? '2021-05-03' : i < 32 ? '2021-05-04' : '2021-05-05',
          minBandwidth: i % 3 === 1 ? Math.random() + 10 : i % 3 === 2 ? Math.random() + 6 : Math.random() + 2,
          maxBandwidth: i % 3 === 1 ? Math.random() * 10 + 80 : i % 3 === 2 ? Math.random() * 10 + 20 : Math.random() * 10 + 5,
          allFlow: i % 3 === 1 ? Math.random() * 40000 + 30000 : i % 3 === 2 ? Math.random() * 40000 + 20000 : Math.random() * 10000 + 5000,
          upFlow: i % 3 === 1 ? Math.random() * 40000 + 15000 : i % 3 === 2 ? Math.random() * 40000 + 8000 : Math.random() * 10000 + 3000,
          downFlow: i % 3 === 1 ? Math.random() * 400 + 1000 : i % 3 === 2 ? Math.random() * 400 + 500 : Math.random() * 200 + 1000,
          validity: Math.floor(Math.random() * 5) + '年' + Math.floor(Math.random() * 12) + '月' + Math.floor(Math.random() * 365) + '日',
        },
      ]
    }
    this.allFlowLineChart();
    this.allFlowPieChart();
  }

  search(): void {

  }

  allFlowLineChart(): void {
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

    this.allFlowLineOption = {
      tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
        }
      },
      legend: {
        data: ['上行', '下行'],
        top: '8%'
      },
      title: {
        left: 'center',
        text: '全网总流量一天趋势图（Gbps）',
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
          name: '上行',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: inData
        },
        {
          name: '下行',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: outData
        }
      ]
    };
  }

  allFlowPieChart(): void {
    this.allFlowPieOption = {
      title: {
        text: '客户流量占比',
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
          name: '流量占比',
          type: 'pie',
          radius: '50%',
          label: {
            show: true,
            formatter: '{b}: {d}%'
          },
          data: [
            {value: 32, name: '集团客户'},
            {value: 29, name: '家庭宽带'},
            {value: 39, name: '移动用户'},
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
