import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder} from 'ng-zorro-antd/table';
interface Custom {
  compName: string;
  total: string;
  inPro: string;
  outPro: string;
  outNet: string;
  high: string;
  low: string;
  inProRent: string;
  inNetRent: string;
}

interface CustomIcp {
  icpName: string;
  total: string;
  inPro: string;
  outPro: string;
  outNet: string;
  inProRent: string;
  inNetRent: string;
}

interface IcpDetail {
  ip: string;
  total: number;
  average: number;
  maxSpeed: number;
}

interface IpDetail {
  host: string;
  webName: string;
  compName: string;
  clickTime: number;
}

interface CnameDetail {
  cname: string;
  webName: string;
  compName: string;
  clickTime: number;
}

interface CustomIp {
  ip: string;
  ipIcp: string;
  total: string;
  inPro: string;
  outPro: string;
  outNet: string;
  inProRent: string;
  inNetRent: string;
  percent: string;
}

interface ColumnItem {
  name: string;
  sortOrder?: NzTableSortOrder | null;
  sortFn?: NzTableSortFn | null;
  listOfFilter?: NzTableFilterList;
  filterFn?: NzTableFilterFn | null;
  filterMultiple?: boolean;
  sortDirections?: NzTableSortOrder[];
}

interface IpAnalyse {
  host: string;
  cname: string;
  webName: string;
  compName: string;
  analyseTimes: string;
}
@Component({
  selector: 'app-dns-analysis',
  templateUrl: './dns-data.component.html',
  styleUrls: ['./dns-data.component.css']
})
export class DnsDataComponent implements OnInit {
  ipVisibel = false;
  customIcpVisible = false;
  ipAnalyseVisible = false;
  ipWidth = 1300;
  width = 1500;
  cnameVisible = false;
  customVisible = false;
  visible = false;
  ipDetailVidsible = false;
  searchValue = '';
  cnameValue = '';
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
      title: '域名',
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
      title: '解析地址',
      compare: null,
      priority: false,
      flag: false
    },
    {
      title: '请求次数',
      compare: (a: any, b: any) => a.requestCount - b.requestCount,
      priority: 0,
      flag: true
    },
    {
      title: '回复次数',
      compare: (a: any, b: any) => a.responseCount - b.responseCount,
      priority: 1,
      flag: true
    },
    {
      title: '流量(GB)',
      compare: (a: any, b: any) => a.inFlow - b.inFlow,
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
  rate = {
    title: {
      text: 'V4/V6数据分析（%）'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
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
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    xAxis: {
      type: 'category',
      data: ['本网率', '本省率', '解析成功率']
    },
    series: [
      {
        name: 'V4',
        type: 'bar',
        data: [43, 14, 89]
      },
      {
        name: 'V6',
        type: 'bar',
        data: [35, 11, 95]
      }
    ]
  };
  dnsInOutLineOption: any;
  dnsQAOption: any;
  dnsDataList: any[] = [];
  listOfData: any[] = [];
  logOfData: any[] = [];
  selectForm!: FormGroup;
  customNetflowOfData: Custom[] = [
    {
      compName: '浙江淘宝网络有限公司',
      total: '24.6/32.98',
      inPro: '14.76/20.988',
      outPro: '10.84/12.992',
      outNet: '4.764/5.7932',
      high: '9.49',
      low: '2.522',
      inProRent: '59.6%',
      inNetRent: '61.8%',
    },
    {
      compName: '北京金山云网络技术有限公司',
      total: '16.5/20.95',
      inPro: '10.9/12.37',
      outPro: '6.6/8.58',
      outNet: '6.11/12.943',
      high: '8.24',
      low: '3.048',
      inProRent: '30.0%',
      inNetRent: '52.5%',
    },
    {
      compName: '华为软件技术有限公司',
      total: '10.4/12.42',
      inPro: '6.04/8.052',
      outPro: '4.36/4.368',
      outNet: '1.356/2.7628',
      high: '5.21',
      low: '1.532',
      inProRent: '35%',
      inNetRent: '54.2%',
    },
    {
      compName: '广东浩云长盛网络股份有限公司',
      total: '14.1/18.33',
      inPro: '8.46/10.398',
      outPro: '5.64/7.932',
      outNet: '2.994/3.8922',
      high: '4.31',
      low: '1.433',
      inProRent: '41.2%',
      inNetRent: '62.1%',
    },
    {
      compName: '阿里云计算有限公司',
      total: '30.4/40.12',
      inPro: '18.44/24.072',
      outPro: '11.96/16.048',
      outNet: '5.416/6.7408',
      high: '10.41',
      low: '3.415',
      inProRent: '30.8%',
      inNetRent: '67.4%',
    },
    {
      compName: '贵阳忆联网络有限公司',
      total: '10.7/12.51',
      inPro: '6.62/8.506',
      outPro: '4.08/4.004',
      outNet: '1.118/2.4534',
      high: '3.56',
      low: '0.938',
      inProRent: '37.4%',
      inNetRent: '54.3%',
    },
    {
      compName: '京东',
      total: '23.8/30.34',
      inPro: '14.08/18.604',
      outPro: '9.72/11.736',
      outNet: '6.212/10.0756',
      high: '8.34',
      low: '3.938',
      inProRent: '35.3%',
      inNetRent: '76.7%',
    },
    {
      compName: '北京爱奇艺科技有限公司',
      total: '24.6/32.98',
      inPro: '14.76/20.988',
      outPro: '10.84/12.992',
      outNet: '8.764/10.7932',
      high: '11.34',
      low: '4.103',
      inProRent: '46.1%',
      inNetRent: '53.6%',
    },
    {
      compName: '深圳腾讯计算机系统有限公司',
      total: '22.2/28.76',
      inPro: '12.12/18.456',
      outPro: '9.08/10.304',
      outNet: '5.968/7.7584',
      high: '8.34',
      low: '3.859',
      inProRent: '36.4%',
      inNetRent: '47.7%',
    },
    {
      compName: '云上贵州',
      total: '9.6/12.68',
      inPro: '5.16/7.208',
      outPro: '4.44/5.472',
      outNet: '1.424/2.7512',
      high: '2.03',
      low: '0.893',
      inProRent: '47%',
      inNetRent: '56%',
    }
  ];
  customNetflowOfColumns: ColumnItem[] = [
    {
      name: 'IDC公司名',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: Custom, b: Custom) => a.compName.length - b.compName.length,
      filterMultiple: false,
      listOfFilter: [
        {text: '网宿科技股份有限公司', value: '网宿科技股份有限公司'},
        {text: '北京金山云网络技术有限公司', value: '北京金山云网络技术有限公司'},
        {text: '华为软件技术有限公司', value: '华为软件技术有限公司'},
        {text: '广东浩云长盛网络股份有限公司', value: '广东浩云长盛网络股份有限公司'},
        {text: '阿里云计算有限公司', value: '阿里云计算有限公司'},
        {text: '贵阳忆联网络有限公司', value: '贵阳忆联网络有限公司'},
        {text: '京东', value: '京东'},
        {text: '北京爱奇艺科技有限公司', value: '北京爱奇艺科技有限公司'},
        {text: '深圳腾讯计算机系统有限公司', value: '深圳腾讯计算机系统有限公司'},
        {text: '云上贵州', value: '云上贵州'},
      ],
      filterFn: (address: string, item: Custom) => item.compName.indexOf(address) !== -1
    },
    {
      name: '总体平均/峰值流速(Gbps)',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.total.length - b.total.length,
      sortDirections: null,
    },
    {
      name: '本省平均/峰值流速(Gbps)',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.inPro.length - b.inPro.length,
      sortDirections: null,
    },
    {
      name: '外省平均/峰值流速(Gbps)',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.outPro.length - b.outPro.length,
      sortDirections: null,
    },
    {
      name: '出网平均/峰值流速(Gbps)',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.outNet.length - b.outNet.length,
      sortDirections: null,
    },
    {
      name: '95峰',
    },
    {
      name: '下行平均流速(Gbps)'
    },
    {
      name: '本省率',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.inProRent.length - b.inProRent.length,
      sortDirections: null,
    },
    {
      name: '本网率',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.inNetRent.length - b.inNetRent.length,
      sortDirections: null,
    },
    // {
    //   name: '引入ICP分析',
    //   sortOrder: null,
    //   sortFn: (a: Custom, b: Custom) => a.inNetRent.length - b.inNetRent.length,
    //   sortDirections: null,
    //   filterMultiple: false,
    // },
    // {
    //   name: '引入IP分析',
    //   sortOrder: null,
    //   sortFn: (a: Custom, b: Custom) => a.inNetRent.length - b.inNetRent.length,
    //   sortDirections: null,
    //   filterMultiple: false,
    // },
  ];
  customNetflowIcpOfData: CustomIcp[] = [
    {
      icpName: '浙江淘宝网络有限公司',
      total: '24.6/32.98',
      inPro: '14.76/20.988',
      outPro: '10.84/12.992',
      outNet: '4.764/5.7932',
      inProRent: '59.6%',
      inNetRent: '61.8%',
    },
    {
      icpName: '北京金山云网络技术有限公司',
      total: '16.5/20.95',
      inPro: '10.9/12.37',
      outPro: '6.6/8.58',
      outNet: '6.11/12.943',
      inProRent: '30.0%',
      inNetRent: '52.5%',
    },
    {
      icpName: '华为软件技术有限公司',
      total: '10.4/12.42',
      inPro: '6.04/8.052',
      outPro: '4.36/4.368',
      outNet: '1.356/2.7628',
      inProRent: '35%',
      inNetRent: '54.2%',
    },
    {
      icpName: '广东浩云长盛网络股份有限公司',
      total: '14.1/18.33',
      inPro: '8.46/10.398',
      outPro: '5.64/7.932',
      outNet: '2.994/3.8922',
      inProRent: '41.2%',
      inNetRent: '62.1%',
    },
    {
      icpName: '阿里云计算有限公司',
      total: '30.4/40.12',
      inPro: '18.44/24.072',
      outPro: '11.96/16.048',
      outNet: '5.416/6.7408',
      inProRent: '30.8%',
      inNetRent: '67.4%',
    },
    {
      icpName: '贵阳忆联网络有限公司',
      total: '10.7/12.51',
      inPro: '6.62/8.506',
      outPro: '4.08/4.004',
      outNet: '1.118/2.4534',
      inProRent: '37.4%',
      inNetRent: '54.3%',
    },
    {
      icpName: '京东',
      total: '23.8/30.34',
      inPro: '14.08/18.604',
      outPro: '9.72/11.736',
      outNet: '6.212/10.0756',
      inProRent: '35.3%',
      inNetRent: '76.7%',
    },
    {
      icpName: '北京爱奇艺科技有限公司',
      total: '24.6/32.98',
      inPro: '14.76/20.988',
      outPro: '10.84/12.992',
      outNet: '8.764/10.7932',
      inProRent: '46.1%',
      inNetRent: '53.6%',
    },
    {
      icpName: '深圳腾讯计算机系统有限公司',
      total: '22.2/28.76',
      inPro: '12.12/18.456',
      outPro: '9.08/10.304',
      outNet: '5.968/7.7584',
      inProRent: '36.4%',
      inNetRent: '47.7%',
    },
    {
      icpName: '云上贵州',
      total: '9.6/12.68',
      inPro: '5.16/7.208',
      outPro: '4.44/5.472',
      outNet: '1.424/2.7512',
      inProRent: '47%',
      inNetRent: '56%',
    },
  ];
  customNetflowIcpOfColumns: ColumnItem[] = [
    {
      name: 'ICP名称',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: Custom, b: Custom) => a.compName.length - b.compName.length,
      filterMultiple: false,
      listOfFilter: [
        {text: '浙江淘宝网络有限公司', value: '浙江淘宝网络有限公司'},
        {text: '网宿科技股份有限公司', value: '网宿科技股份有限公司'},
        {text: '北京金山云网络技术有限公司', value: '北京金山云网络技术有限公司'},
        {text: '华为软件技术有限公司', value: '华为软件技术有限公司'},
        {text: '广东浩云长盛网络股份有限公司', value: '广东浩云长盛网络股份有限公司'},
        {text: '阿里云计算有限公司', value: '阿里云计算有限公司'},
        {text: '贵阳忆联网络有限公司', value: '贵阳忆联网络有限公司'},
        {text: '京东', value: '京东'},
        {text: '北京爱奇艺科技有限公司', value: '北京爱奇艺科技有限公司'},
        {text: '深圳腾讯计算机系统有限公司', value: '深圳腾讯计算机系统有限公司'},
        {text: '云上贵州', value: '云上贵州'},
      ],
      filterFn: (address: string, item: Custom) => item.compName.indexOf(address) !== -1
    },
    {
      name: '总体平均/峰值流速',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.total.length - b.total.length,
      sortDirections: null,
      filterMultiple: true,
      listOfFilter: null,
      filterFn: null
    },
    {
      name: '本省平均/峰值流速',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.inPro.length - b.inPro.length,
      sortDirections: null,
      filterMultiple: true,
      listOfFilter: null,
      filterFn: null
    },
    {
      name: '外省平均/峰值流速',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.outPro.length - b.outPro.length,
      sortDirections: null,
      listOfFilter: null,
      filterFn: null,
      filterMultiple: true
    },
    {
      name: '外网平均/峰值流速',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.outNet.length - b.outNet.length,
      sortDirections: null,
      filterMultiple: false,
      listOfFilter: null,
      filterFn: null
    },
    {
      name: '本省率',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.inProRent.length - b.inProRent.length,
      sortDirections: null,
      filterMultiple: false,
      listOfFilter: null,
      filterFn: null
    },
    {
      name: '本网率',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.inNetRent.length - b.inNetRent.length,
      sortDirections: null,
      filterMultiple: false,
      listOfFilter: null,
      filterFn: null
    },
  ];
  icpDetailOfData: IcpDetail[] = [
    {
      ip: '117.187.149.232',
      total: 112,
      average: 8.9,
      maxSpeed: 25.3,
    },
    {
      ip: '117.187.149.226',
      total: 33,
      average: 5,
      maxSpeed: 0.4,
    },
    {
      ip: '117.187.21.241',
      total: 11,
      average: 1,
      maxSpeed: 1.5,
    },
    {
      ip: '117.187.21.251',
      total: 63,
      average: 8.4,
      maxSpeed: 13.4,
    },
    {
      ip: '117.177.133.243',
      total: 233,
      average: 9.4,
      maxSpeed: 12.9,
    },
    {
      ip: '221.178.11.252',
      total: 258,
      average: 8.2,
      maxSpeed: 12.7,
    },
    {
      ip: '36.159.54.218',
      total: 74,
      average: 7.3,
      maxSpeed: 12.9,
    },
    {
      ip: '111.10.47.241',
      total: 148,
      average: 12.3,
      maxSpeed: 22.8,
    },
    {
      ip: '117.169.15.124',
      total: 267,
      average: 24.3,
      maxSpeed: 31.6,
    },
  ];
  ipDetailOfData: IpDetail[] = [
    {
      host: '1111.taobao.com',
      webName: '1111.taobao.com.danuoyi.tbcache.com.',
      compName: '阿里云计算有限公司',
      clickTime: 4,
    },
    {
      host: 'acg.taobao.com',
      webName: 'acg.taobao.com.danuoyi.tbcache.com.',
      compName: '阿里云计算有限公司',
      clickTime: 3,
    },
    {
      host: 'item.taobao.com',
      webName: 'item.taobao.com.danuoyi.tbcache.com.',
      compName: '阿里云计算有限公司',
      clickTime: 89112,
    },
    {
      host: 'liveca-rtclive.taobao.com',
      webName: 'liveca-rtclive.taobao.com.danuoyi.tbcache.com.',
      compName: '阿里云计算有限公司',
      clickTime: 2984,
    },
    {
      host: 'livecb-rtclive.taobao.com',
      webName: 'livecb-rtclive.taobao.com.danuoyi.tbcache.com.',
      compName: '阿里云计算有限公司',
      clickTime: 5162,
    },
    {
      host: 'tesi.m.taobao.com',
      webName: 'tesi.m.taobao.com.danuoyi.tbcache.com.',
      compName: '阿里云计算有限公司',
      clickTime: 4,
    },
    {
      host: 'growthcdn.taobao.com',
      webName: 'growthcdn.taobao.com.danuoyi.tbcache.com.',
      compName: '阿里云计算有限公司',
      clickTime: 233,
    },
    {
      host: 'fmfb.cdn.taobao.com',
      webName: 'fmfb.cdn.taobao.com.danuoyi.tbcache.com.',
      compName: '阿里云计算有限公司',
      clickTime: 148,
    },
    {
      host: 'dl.django.t.taobao.com',
      webName: 'dl.django.t.taobao.com.danuoyi.tbcache.com.',
      compName: '阿里云计算有限公司',
      clickTime: 26789,
    },
    {
      host: 'qh-material.taobao.com',
      webName: 'qh-material.taobao.com.danuoyi.tbcache.com.',
      compName: '阿里云计算有限公司',
      clickTime: 51681,
    },
    {
      host: 'everyservice.cdn.taobao.com',
      webName: 'everyservice.cdn.taobao.com.danuoyi.tbcache.com.',
      compName: '阿里云计算有限公司',
      clickTime: 5991,
    },

  ];
  ipDetailOfDisplayData = [...this.ipDetailOfData];
  cnameDetailOfData: CnameDetail[] = [
    {
      cname: 'www.taobao.com.danuoyi.tbcache.com.',
      webName: '淘宝',
      compName: '阿里云计算有限公司',
      clickTime: 4,
    },
    {
      cname: 'www.taobao.com.danuoyi.tbcache.com.',
      webName: '淘宝',
      compName: '阿里云计算有限公司',
      clickTime: 3,
    },
    {
      cname: 'www.taobao.com.danuoyi.tbcache.com.',
      webName: '淘宝',
      compName: '阿里云计算有限公司',
      clickTime: 89112,
    },
    {
      cname: 'www.taobao.com.danuoyi.tbcache.com.',
      webName: '淘宝',
      compName: '阿里云计算有限公司',
      clickTime: 2984,
    },
    {
      cname: 'www.taobao.com.danuoyi.tbcache.com.',
      webName: '淘宝',
      compName: '阿里云计算有限公司',
      clickTime: 5162,
    },
    {
      cname: 'www.taobao.com.danuoyi.tbcache.com.',
      webName: '淘宝',
      compName: '阿里云计算有限公司',
      clickTime: 4,
    },
    {
      cname: 'www.taobao.com.danuoyi.tbcache.com.',
      webName: '淘宝',
      compName: '阿里云计算有限公司',
      clickTime: 233,
    },
    {
      cname: 'www.taobao.com.danuoyi.tbcache.com.',
      webName: '淘宝',
      compName: '阿里云计算有限公司',
      clickTime: 148,
    },
    {
      cname: 'www.taobao.com.danuoyi.tbcache.com.',
      webName: '淘宝',
      compName: '阿里云计算有限公司',
      clickTime: 26789,
    },
    {
      cname: 'www.taobao.com.danuoyi.tbcache.com.',
      webName: '淘宝',
      compName: '阿里云计算有限公司',
      clickTime: 51681,
    },
    {
      cname: 'www.taobao.com.danuoyi.tbcache.com.',
      webName: '淘宝',
      compName: '阿里云计算有限公司',
      clickTime: 5991,
    },
  ];
  cnameDetailOfDisplayData = [...this.cnameDetailOfData];
  customNetflowIpOfData: CustomIp[] = [
    {
      ip: '39.137.64.24',
      ipIcp: '网宿科技股份有限公司',
      total: '13.5/18.1',
      inPro: '7.4/11.6',
      outPro: '4.5/4.4',
      outNet: '2.6/3.1',
      inProRent: '59.6%',
      inNetRent: '61.8%',
      percent: '6.36%'
    },
    {
      ip: '116.196.64.25',
      ipIcp: '北京金山云网络技术有限公司',
      total: '18.51/20.95',
      inPro: '10.9/11.37',
      outPro: '3.6/4.58',
      outNet: '4.11/5.943',
      inProRent: '30.0%',
      inNetRent: '62.5%',
      percent: '8.72%'
    },
    {
      ip: '149.184.160.15',
      ipIcp: '华为软件技术有限公司',
      total: '10.4/12.42',
      inPro: '5.04/8.052',
      outPro: '4.36/3.368',
      outNet: '1.356/3.7628',
      inProRent: '35.0%',
      inNetRent: '64.2%',
      percent: '4.90%'
    },
    {
      ip: '103.13.12.95',
      ipIcp: '广东浩云长盛网络股份有限公司',
      total: '14.1/18.33',
      inPro: '8.46/10.398',
      outPro: '3.64/3.932',
      outNet: '3.994/4.8922',
      inProRent: '21.2%',
      inNetRent: '52.1%',
      percent: '6.64%'
    },
    {
      ip: '117.187.153.0',
      ipIcp: '浙江淘宝网络有限公司',
      total: '12.5/18.1',
      inPro: '8.4/12.6',
      outPro: '2.5/3.4',
      outNet: '1.6/2.1',
      inProRent: '59.6%',
      inNetRent: '61.8%',
      percent: '5.89%'
    },
    {
      ip: '217.19.12',
      ipIcp: '阿里云计算有限公司',
      total: '30.4/40.12',
      inPro: '18.44/24.072',
      outPro: '12.96/12.048',
      outNet: '10.416/12.7408',
      inProRent: '30.8%',
      inNetRent: '77.4%',
      percent: '14.32%'
    },
    {
      ip: '117.187.207.0',
      ipIcp: '贵阳忆联网络有限公司',
      total: '10.7/12.51',
      inPro: '6.62/8.506',
      outPro: '4.08/4.004',
      outNet: '3.118/4.4534',
      inProRent: '37.4%',
      inNetRent: '54.3%',
      percent: '5.04%'
    },
    {
      ip: '193.183.155.0',
      ipIcp: '京东',
      total: '46.8/60.34',
      inPro: '28.08/36.604',
      outPro: '18.72/24.736',
      outNet: '14.212/10.0756',
      inProRent: '25.3%',
      inNetRent: '46.7%',
      percent: '22.04%'
    },
    {
      ip: '180.214.160.52',
      ipIcp: '北京爱奇艺科技有限公司',
      total: '24.6/32.98',
      inPro: '14.76/20.988',
      outPro: '10.84/12.992',
      outNet: '8.764/10.7932',
      inProRent: '36.1%',
      inNetRent: '53.6%',
      percent: '11.59%'
    },
    {
      ip: '192.104.172.0',
      ipIcp: '深圳腾讯计算机系统有限公司',
      total: '22.2/28.76',
      inPro: '12.12/16.456',
      outPro: '10.08/12.304',
      outNet: '7.968/10.7584',
      inProRent: '36.4%',
      inNetRent: '57.7%',
      percent: '10.46%'
    },
    {
      ip: '117.172.235.25',
      ipIcp: '云上贵州',
      total: '8.6/12.68',
      inPro: '4.16/6.208',
      outPro: '2.44/4.472',
      outNet: '2.424/2.7512',
      inProRent: '47%',
      inNetRent: '76%',
      percent: '4.05%'
    },
  ];
  customNetflowIpOfColumns: ColumnItem[] = [
    {
      name: 'IP',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: CustomIp, b: CustomIp) => a.ip.length - b.ip.length,
      filterMultiple: false,
      listOfFilter: [
        {text: '117.187.149.232', value: '117.187.149.232'},
      ],
      filterFn: (address: string, item: CustomIp) => item.ip.indexOf(address) !== -1
    },
    {
      name: 'ICP名称',
      sortOrder: null,
      sortFn: (a: CustomIp, b: CustomIp) => a.ipIcp.length - b.ipIcp.length,
      sortDirections: null,
      filterMultiple: true,
      listOfFilter: null,
      filterFn: null
    },
    {
      name: '总体平均/峰值流速',
      sortOrder: null,
      sortFn: (a: CustomIp, b: CustomIp) => a.total.length - b.total.length,
      sortDirections: null,
      filterMultiple: true,
      listOfFilter: null,
      filterFn: null
    },
    {
      name: '本省平均/峰值流速',
      sortOrder: null,
      sortFn: (a: CustomIp, b: CustomIp) => a.inPro.length - b.inPro.length,
      sortDirections: null,
      filterMultiple: true,
      listOfFilter: null,
      filterFn: null
    },
    {
      name: '外省平均/峰值流速',
      sortOrder: null,
      sortFn: (a: CustomIp, b: CustomIp) => a.outPro.length - b.outPro.length,
      sortDirections: null,
      listOfFilter: null,
      filterFn: null,
      filterMultiple: true
    },
    {
      name: '外网平均/峰值流速',
      sortOrder: null,
      sortFn: (a: CustomIp, b: CustomIp) => a.outNet.length - b.outNet.length,
      sortDirections: null,
      filterMultiple: false,
      listOfFilter: null,
      filterFn: null
    },
    {
      name: '本省率',
      sortOrder: null,
      sortFn: (a: CustomIp, b: CustomIp) => a.inProRent.length - b.inProRent.length,
      sortDirections: null,
      filterMultiple: false,
      listOfFilter: null,
      filterFn: null
    },
    {
      name: '本网率',
      sortOrder: null,
      sortFn: (a: CustomIp, b: CustomIp) => a.inNetRent.length - b.inNetRent.length,
      sortDirections: null,
      filterMultiple: false,
      listOfFilter: null,
      filterFn: null
    },
    {
      name: '流速占比',
      sortOrder: null,
      sortFn: (a: CustomIp, b: CustomIp) => a.percent.length - b.percent.length,
      sortDirections: null,
      filterMultiple: false,
      listOfFilter: null,
      filterFn: null
    },
  ];
  ipAnalyseOfData: IpAnalyse[] = [
    {
      host: 'adashx.m.taobao.com',
      cname: 'taobao.com.danuoyi.tbcache.com.',
      webName: '淘宝',
      compName: '浙江淘宝网络有限公司',
      analyseTimes: '18,371,921',
    },
    {
      host: 'audid-api.taobao.com',
      cname: 'taobao.com.danuoyi.tbcache.com.',
      webName: '淘宝',
      compName: '浙江淘宝网络有限公司',
      analyseTimes: '16,461,612',
    },
    {
      host: 'h-adashx.ut.taobao.com',
      cname: 'taobao.com.danuoyi.tbcache.com.',
      webName: '淘宝',
      compName: '浙江淘宝网络有限公司',
      analyseTimes: '15,274,745',
    },
    {
      host: 'guide-acs.m.taobao.com',
      cname: 'taobao.com.danuoyi.tbcache.com.',
      webName: '淘宝',
      compName: '浙江淘宝网络有限公司',
      analyseTimes: '15,124,275',
    },
    {
      host: 'rhdc-acs.m.taobao.com',
      cname: 'taobao.com.danuoyi.tbcache.com.',
      webName: '淘宝',
      compName: '浙江淘宝网络有限公司',
      analyseTimes: '14,938,434',
    },
    {
      host: 'hybrid.miniapp.taobao.com',
      cname: 'taobao.com.danuoyi.tbcache.com.',
      webName: '淘宝',
      compName: '浙江淘宝网络有限公司',
      analyseTimes: '14,364,429',
    },
    {
      host: 'retcode.taobao.com',
      cname: 'taobao.com.danuoyi.tbcache.com.',
      webName: '淘宝',
      compName: '浙江淘宝网络有限公司',
      analyseTimes: '14,263,535',
    },
    {
      host: 'baichuan-sdk.taobao.com',
      cname: 'taobao.com.danuoyi.tbcache.com.',
      webName: '淘宝',
      compName: '浙江淘宝网络有限公司',
      analyseTimes: '12,643,357',
    },
    {
      host: 'mum.m.taobao.com',
      cname: 'taobao.com.danuoyi.tbcache.com.',
      webName: '淘宝',
      compName: '浙江淘宝网络有限公司',
      analyseTimes: '9,083,293',
    },
    {
      host: 'adashxbeta.ut.taobao.com',
      cname: 'taobao.com.danuoyi.tbcache.com.',
      webName: '淘宝',
      compName: '浙江淘宝网络有限公司',
      analyseTimes: '8,421,563',
    },
  ];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.selectForm = this.fb.group({
      dateRange: [],
      granularity: ['oneDay']
    });

    for ( let i = 0; i < 300; i++) {
      this.dnsDataList = [
        ...this.dnsDataList,
        {
          id: i + 1,
          time: i < 8 ? '2021-05-01' : i < 16 ? '2021-05-02' : i < 24 ? '2021-05-03' : i < 32 ? '2021-05-04' : '2021-05-05',
          domainName: i % 3 === 1 ? 'douyin.com' : i % 3 === 2 ? 'wechat.com' : 'taobao.com',
          srcAddress: i % 3 === 1 ? '173.12.3.52' : i % 3 === 2 ? '165.29.86.45' : '195.68.32.45',
          sp: i % 3 === 1 ? '帝联' : i % 3 === 2 ? '蓝汛' : '网宿',
          analysisAddress: i % 3 === 1 ? '185.26.13.152' : i % 3 === 2 ? '175.69.72.33' : '122.16.58.61',
          requestCount: Math.random() * 40 + 50,
          flow: Math.random() * 4000 + 10000,
          validity: Math.floor(Math.random() * 5) + '年' + Math.floor(Math.random() * 12) + '月' + Math.floor(Math.random() * 365) + '日',
        },
      ];
    }
    for ( let i = 0; i < 30; i++) {
      this.listOfData = [
        ...this.listOfData,
        {
          no: i + 1,
          targetIp: i % 3 === 1 ? '185.26.13.152' : i % 3 === 2 ? '175.69.72.33' : '122.16.58.61',
          icp: i % 10 === 1 ? '粤B2-20090059-5' : i % 10 === 2 ?
          '京ICP证030173号-30' : i % 10 === 3 ?
          '浙ICP备09109183号-13' : i % 10 === 4 ?
          '京ICP备16015312号-2' : i % 10 === 5 ?
          '京ICP备11041704号-4' : i % 10 === 6 ?
          '浙ICP备09002987号-35' : i % 10 === 7 ?
          '粤B2-20090059-87' : '浙ICP备09002987号-X' ,
          host: i % 10 === 1 ? 'dns.weixin.qq.com' : i % 10 === 2 ? 'www.baidu.com'
            : i % 10 === 3 ? 'www.taobao.com'
              : i % 10 === 4 ? 'dig.bdurl.net'
                : i % 10 === 5 ? 'www.jd.com'
                  : i % 10 === 6 ? 'aps.amap.com'
                    : i % 10 === 7 ? 'ts.qq.com' : 'www.toutiao.com' ,
          cname: i % 10 === 1 ? 'v6.dns.weixin.qq.com' : i % 10 === 2 ?
            'www.a.shifen.com' : i % 10 === 3 ?
              'www.taobao.com.danuoyi.tbcache.com' : i % 10 === 4 ?
                'dig-ec.bdurl.net' : i % 10 === 5 ?
                  'www.jd.com.gslb.qianxun.com' : i % 10 === 6 ?
                    'aps.amap.com.gds.alibabadns.com' : i % 10 === 7 ?
                      'ins-2ybret5v.ias.tencent-cloud.ne' : 'www.toutiao.com.w.kunluncan.com' ,
          operator: i % 3 === 1 ? '移动' : i % 10 === 2 ? '电信' : '联通' ,
          province: i % 10 === 1 ? '深圳' : i % 10 === 2 ?
            '北京' : i % 10 === 3 ?
              '浙江' : i % 10 === 4 ?
                '北京' : i % 10 === 5 ?
                  '北京' : i % 10 === 6 ?
                    '浙江' : i % 10 === 7 ?
                      '广东' : '浙江' ,
          business: i % 10 === 1 ? '腾讯网' : i % 10 === 2 ?
            '百度' : i % 10 === 3 ?
              'cdn支持环境' : i % 10 === 4 ?
                '吉云连接' : i % 10 === 5 ?
                  '千寻网' : i % 10 === 6 ?
                    '阿里dns' : i % 10 === 7 ?
                      '腾讯云' : '阿里云内部使用' ,
          clicks: i % 10 === 1 ? '2121564' : i % 10 === 2 ?
            '354534' : i % 10 === 3 ?
              '2341243' : i % 10 === 4 ?
                '5213524' : i % 10 === 5 ?
                  '54323' : i % 10 === 6 ?
                    '6562335' : i % 10 === 7 ?
                      '3520786' : '1193857' ,
          report: i % 10 === 1 ? '深圳' : i % 10 === 2 ?
            '北京' : i % 10 === 3 ?
              '浙江' : i % 10 === 4 ?
                '北京' : i % 10 === 5 ?
                  '北京' : i % 10 === 6 ?
                    '浙江' : i % 10 === 7 ?
                      '广东' : '浙江' ,
        }
      ];
    }
    for (let j = 0; j < 9; j++) {
      for ( let i = 0; i < 10; i++) {
        this.customNetflowOfData = [
          ...this.customNetflowOfData,
          this.customNetflowOfData[i]
        ];
      }
    }

    this.dnsQAChart();
    this.dnsInOutLineChart();
  }
  exportFile(): void {
    this.downloadFile(this.dnsListOfColumn.toString());
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

  dnsInOutLineChart(): void {
    let base = +new Date(2021, 5, 3);
    const oneDay = 1000;

    const inData = [[base, Math.random() * 8]];
    const outData = [[base, Math.random() * 5]];

    for (let i = 1; i < 10000; i++) {
      const now = new Date(base += oneDay);
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

    this.dnsInOutLineOption = {
      tooltip: {
        trigger: 'axis',
        position(pt) {
          return [pt[0], '10%'];
        }
      },
      legend: {
        data: ['网内', '网外'],
        top: '8%'
      },
      title: {
        left: 'center',
        text: 'DNS流量一天趋势图（Gbps）',
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
  dnsQAChart(): void{
    this.dnsQAOption = {
      title: {
        text: '请求与回复趋势图'
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
        data: ['请求', '回复', '差值']
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
          name: '差值',
          min: 0,
          max: 600,
          interval: 150,
          axisLabel: {
            formatter: '{value} 次'
          }
        }
      ],
      series: [
        {
          name: '请求',
          type: 'bar',
          data: [28203, 27489, 27034, 27970, 28744, 27230, 28365]
        },
        {
          name: '回复',
          type: 'bar',
          data: [27825, 26938, 26800, 27594, 28641, 26807, 27922]
        },
        {
          name: '差值',
          type: 'line',
          yAxisIndex: 1,
          data: [378, 551, 234, 376, 437, 423, 443]
        }
      ]
    };
  }

  ipOk(): void {
    this.ipVisibel = false;
  }

  ipCancel(): void {
    this.ipVisibel = false;
  }

  showIpTable(): void {
    this.ipVisibel = true;
  }

  ipAnalyseOk(): void {
    this.ipAnalyseVisible = false;
  }

  ipAnalyseCancel(): void {
    this.ipAnalyseVisible = false;
  }

  reset(): void {
    this.cnameValue = '';
    this.searchValue = '';
    this.search();
  }

  ipDetailOk(): void {
    this.ipDetailVidsible = false;
  }

  ipDetailCancel(): void {
    this.ipDetailVidsible = false;
  }

  showIpDetailTable(): void {
    this.ipDetailVidsible = true;
  }
  showCustomIcpTable(): void {
    this.customIcpVisible = true;
  }
  customIcpOk(): void {
    this.customIcpVisible = false;
  }

  customIcpCancel(): void {
    this.customIcpVisible = false;
  }

  customOk(): void {
    this.customVisible = false;
  }

  costomCancel(): void {
    this.customVisible = false;
  }
  showCustomTable(): void {
    this.customVisible = true;
  }

  showIpAnalyseOk(): void {
    this.ipAnalyseVisible = true;
  }
}
