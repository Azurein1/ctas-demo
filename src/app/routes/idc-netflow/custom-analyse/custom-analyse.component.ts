import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import {NzModalService} from 'ng-zorro-antd/modal';


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
interface IpAnalyse {
  host: string;
  cname: string;
  webName: string;
  compName: string;
  analyseTimes: string;
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
interface DataItem {
  userType: string;
  upstream: number;
  maxSpeed: number;
  minSpeed: number;
  trend: string;
}
export interface SpeedItem {
  userType: string;
  total: string;
  inProvince: string;
  outProvince: string;
  international: string;
}
interface TopItem {
  id: number;
  province: string;
  userType: string;
  netflow: number;
  speed: number;
  v4: number;
  v6: number;
}
export interface ProvinceItem {
   id: number;
   userType: string;
   province: string;
   operator: string;
   average: string;
   maxSpeed: string;
}
export interface CompItem {
  compName: string;
  average: number;
  maxSpeed: number;
}
interface AllCompItem {
  icpName: string;
  province: string;
  total: string;
  inPro: string;
  outPro: string;
  outNet: string;
  inProRent: string;
  inNetRent: string;
}
interface CompNetflowItem {
  total: string;
  inPro: string;
  outPro: string;
  outNet: string;
}
interface NetflowIpItem {
  ip: string;
  ipBelong: string;
  operator: string;
  netflow: number;
  average: number;
  maxSpeed: number;
}
interface IpItem {
  host: string;
  cname: string;
}

@Component({
  selector: 'app-custom-analyse',
  templateUrl: './custom-analyse.component.html',
  styleUrls: ['./custom-analyse.component.css']
})
export class CustomAnalyseComponent implements OnInit {

  i = 1;
  searchValue = '';
  cnameValue = '';
  width = 1350;
  compWidth = 1500;
  cdnVisible = false;
  cdnIpVisible = false;
  cdnCnameVisible = false;
  detailVisible = false;
  isVisible = false;
  visible = false;
  cnameVisible = false;
  customIcpVisible = false;
  hostVisible = false;
  netflowSummaryVisible = false;
  customVisible = false;
  ipDetailVidsible = false;
  webVisible = false;
  ipAnalyseVisible = false;
  ipVisibel = false;
  allProvince = false;
  thisProvince = false;
  clickComp = false;
  clickNetflow = false;
  clickIp = false;
  selectForm!: FormGroup;
  customTypeBarOption: any;
  netflowLineOption: any;
  netflowStackedLineOption: any;
  netflowSpeedInBarOption: any;
  netflowSpeedOutBarOption: any;
  netflowSpeedNationalBarOption: any;
  alignTopBarOption: any;
  outNetAlignTopBarOption: any;
  outProvinceAlignTopBarOption: any;
  alignTopBondsOption: any;
  outNetAlignTopBondsOption: any;
  outProvinceAlignTopBondsOption: any;
  compNetflowLineOption: any;
  compNetflowLineSevenOption: any;
  netflowTendOfDayOption: any;
  netflowTendOfTypeOption: any;
  netflowTendOption: any;
  allFlowLineOption: any;
  allFlowPieOption: any;
  v4v6PieOption: any;
  allPieOption: any;

  webData = [
    {
      web: '?????????',
      host: 'www.qq.com',
      icp: '???????????????????????????????????????',
      other: '??????',
      total: '55.124',
      inPro: '14.427',
      outPro: '15.621',
      outNet: '4.513',
      proRate: '56.2%',
      netRate: '92.6%',
    },
    {
      web: '??????',
      host: 'www.wechat.com',
      icp: '???????????????????????????????????????',
      other: '??????',
      total: '25.345',
      inPro: '12.234',
      outPro: '6.437',
      outNet: '0.513',
      proRate: '62.1%',
      netRate: '89.6%',
    },
    {
      web: '????????????',
      host: 'www.v.qq.com',
      icp: '???????????????????????????????????????',
      other: '??????',
      total: '14.344',
      inPro: '11.652',
      outPro: '3.415',
      outNet: '0.513',
      proRate: '51.7%',
      netRate: '79.6%',
    },
    {
      web: '??????',
      host: 'www.tencent.com',
      icp: '???????????????????????????????????????',
      other: '??????',
      total: '4.141',
      inPro: '1.257',
      outPro: '1.415',
      outNet: '0.021',
      proRate: '72.7%',
      netRate: '92.6%',
    }
  ];
  ipDetailOfData = [
    {
      host: '1111.taobao.com',
      webName: '1111.taobao.com.danuoyi.tbcache.com.',
      compName: '???????????????????????????',
      clickTime: 4,
    },
    {
      host: 'acg.taobao.com',
      webName: 'acg.taobao.com.danuoyi.tbcache.com.',
      compName: '???????????????????????????',
      clickTime: 3,
    },
    {
      host: 'item.taobao.com',
      webName: 'item.taobao.com.danuoyi.tbcache.com.',
      compName: '???????????????????????????',
      clickTime: 89112,
    },
    {
      host: 'liveca-rtclive.taobao.com',
      webName: 'liveca-rtclive.taobao.com.danuoyi.tbcache.com.',
      compName: '???????????????????????????',
      clickTime: 2984,
    },
    {
      host: 'livecb-rtclive.taobao.com',
      webName: 'livecb-rtclive.taobao.com.danuoyi.tbcache.com.',
      compName: '???????????????????????????',
      clickTime: 5162,
    },
    {
      host: 'tesi.m.taobao.com',
      webName: 'tesi.m.taobao.com.danuoyi.tbcache.com.',
      compName: '???????????????????????????',
      clickTime: 4,
    },
    {
      host: 'growthcdn.taobao.com',
      webName: 'growthcdn.taobao.com.danuoyi.tbcache.com.',
      compName: '???????????????????????????',
      clickTime: 233,
    },
    {
      host: 'fmfb.cdn.taobao.com',
      webName: 'fmfb.cdn.taobao.com.danuoyi.tbcache.com.',
      compName: '???????????????????????????',
      clickTime: 148,
    },
    {
      host: 'dl.django.t.taobao.com',
      webName: 'dl.django.t.taobao.com.danuoyi.tbcache.com.',
      compName: '???????????????????????????',
      clickTime: 26789,
    },
    {
      host: 'qh-material.taobao.com',
      webName: 'qh-material.taobao.com.danuoyi.tbcache.com.',
      compName: '???????????????????????????',
      clickTime: 51681,
    },
    {
      host: 'everyservice.cdn.taobao.com',
      webName: 'everyservice.cdn.taobao.com.danuoyi.tbcache.com.',
      compName: '???????????????????????????',
      clickTime: 5991,
    },

  ];
  ipDetailOfDisplayData = [...this.ipDetailOfData];
  cnameDetailOfData = [
    {
      cname: 'www.taobao.com.danuoyi.tbcache.com.',
      webName: '??????',
      compName: '???????????????????????????',
      clickTime: 4,
    },
    {
      cname: 'www.taobao.com.danuoyi.tbcache.com.',
      webName: '??????',
      compName: '???????????????????????????',
      clickTime: 3,
    },
    {
      cname: 'www.taobao.com.danuoyi.tbcache.com.',
      webName: '??????',
      compName: '???????????????????????????',
      clickTime: 89112,
    },
    {
      cname: 'www.taobao.com.danuoyi.tbcache.com.',
      webName: '??????',
      compName: '???????????????????????????',
      clickTime: 2984,
    },
    {
      cname: 'www.taobao.com.danuoyi.tbcache.com.',
      webName: '??????',
      compName: '???????????????????????????',
      clickTime: 5162,
    },
    {
      cname: 'www.taobao.com.danuoyi.tbcache.com.',
      webName: '??????',
      compName: '???????????????????????????',
      clickTime: 4,
    },
    {
      cname: 'www.taobao.com.danuoyi.tbcache.com.',
      webName: '??????',
      compName: '???????????????????????????',
      clickTime: 233,
    },
    {
      cname: 'www.taobao.com.danuoyi.tbcache.com.',
      webName: '??????',
      compName: '???????????????????????????',
      clickTime: 148,
    },
    {
      cname: 'www.taobao.com.danuoyi.tbcache.com.',
      webName: '??????',
      compName: '???????????????????????????',
      clickTime: 26789,
    },
    {
      cname: 'www.taobao.com.danuoyi.tbcache.com.',
      webName: '??????',
      compName: '???????????????????????????',
      clickTime: 51681,
    },
    {
      cname: 'www.taobao.com.danuoyi.tbcache.com.',
      webName: '??????',
      compName: '???????????????????????????',
      clickTime: 5991,
    },
  ];
  cnameDetailOfDisplayData = [...this.cnameDetailOfData];

  listOfColumns = [
    {
      name: '????????????',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: DataItem, b: DataItem) => a.userType.length - b.userType.length,
      filterMultiple: true,
      listOfFilter: [
        { text: '??????', value: '??????' },
        { text: '??????', value: '??????' },
        { text: 'WLAN', value: 'WLAN' },
        { text: '??????', value: '??????' },
      ],
      filterFn: (address: string, item: DataItem) => item.userType.indexOf(address) !== -1
    },
    {
      name: '????????????/????????????(Gbps)',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.maxSpeed - b.maxSpeed,
      sortDirections: ['descend', null],
    },
    {
      name: '????????????/????????????(Gbps)',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: DataItem, b: DataItem) => a.minSpeed - b.minSpeed,
    },
    {
      name: '????????????/????????????(Gbps)',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: DataItem, b: DataItem) => a.minSpeed - b.minSpeed,
    },
    {
      name: '?????????',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: DataItem, b: DataItem) => a.minSpeed - b.minSpeed,
    },
    {
      name: '?????????',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: DataItem, b: DataItem) => a.minSpeed - b.minSpeed,
    },
    {
      name: 'IPV4/IPV6??????(Gbps)',
      sortOrder: null,
      sortFn: (a: TopItem, b: TopItem) => a.v4 - b.v4,
      sortDirections: null,
    },
    {
      name: '????????????',
      // sortOrder: null,
      // sortDirections: null,
      // sortFn: null,
      // filterMultiple: false,
      // listOfFilter: null,
      // filterFn: null
    }
  ];
  listOfData = [
    {
      userType: '??????',
      maxSpeed: '1534.224/5065.703',
      minSpeed: '504.648,2034.144',
      outNet: '730.412/2034.412',
      net: '60.2%',
      pro: '94.5%',
      v4: '2039.343/1714.528',
      trend: '????????????'
    },
    {
      userType: '??????',
      maxSpeed: '124.947/9247.418',
      minSpeed: '115.376/434.052',
      outNet: '730.602/1434.231',
      net: '57.4%',
      pro: '91.3%',
      v4: '5052.260/4016.154',
      trend: '????????????'
    },
    {
      userType: 'WLAN',
      maxSpeed: '0.925/254.961',
      minSpeed: '0.376/224.416',
      outNet: '0.526/425.150',
      net: '50.2%',
      pro: '89.2%',
      v4: '36.314/9.524',
      trend: '????????????'
    },
    {
      userType: '??????',
      maxSpeed: '256.342/5082.738',
      minSpeed: '127.848/2502.254',
      outNet: '590.206/1065.525',
      net: '67.7%',
      pro: '83.5%',
      v4: '294.328/254.449',
      trend: '????????????'
    }
  ];
  netflowSpeedOfColumns = [
    {
      name: '????????????',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: SpeedItem, b: SpeedItem) => a.userType.length - b.userType.length,
      filterMultiple: true,
      listOfFilter: [
        { text: '??????', value: '??????' },
        { text: '??????', value: '??????' },
        { text: 'WLAN', value: 'WLAN' },
        { text: '??????', value: '??????' },
      ],
      filterFn: (address: string, item: SpeedItem) => item.userType.indexOf(address) !== -1
    },
    {
      name: '????????????/????????????(Gbps)',
      sortOrder: null,
      sortFn: (a: SpeedItem, b: SpeedItem) => a.total.length - b.total.length,
      sortDirections: null,
      // filterMultiple: true,
      // listOfFilter: null,
      // filterFn: null
    },
    {
      name: '????????????(Gbps)',
      sortOrder: null,
      sortFn: (a: SpeedItem, b: SpeedItem) => a.inProvince.length - b.inProvince.length,
      sortDirections: null,
      // filterMultiple: true,
      // listOfFilter: null,
      // filterFn: null
    },
    {
      name: '????????????(Gbps)',
      sortOrder: null,
      sortFn: (a: SpeedItem, b: SpeedItem) => a.outProvince.length - b.outProvince.length,
      sortDirections: null,
      // listOfFilter: null,
      // filterFn: null,
      // filterMultiple: true
    },
    {
      name: '????????????(Gbps)',
      sortOrder: null,
      sortFn: (a: SpeedItem, b: SpeedItem) => a.international.length - b.international.length,
      sortDirections: null,
      // filterMultiple: false,
      // listOfFilter: null,
      // filterFn: null
    },
    {
      name: 'IPV4??????(Gbps)',
      sortOrder: null,
      sortFn: (a: TopItem, b: TopItem) => a.v4 - b.v4,
      sortDirections: null,
    },
    {
      name: 'IPV6??????(Gbps)',
      sortOrder: null,
      sortFn: (a: TopItem, b: TopItem) => a.v6 - b.v6,
      sortDirections: null,
    },
    {
      name: '??????'
    }
  ];
  netflowSpeedListOfData = [
    {
      userType: '??????',
      total: '6012.513/24530.054',
      inProvince: '1052.106/5244.612',
      outProvince: '2542.762/12312.302',
      international: '2804.105/15610.396',
      v4: 2451.013,
      v6: 2041.419
    },
    {
      userType: '??????',
      total: '1523.218/6530.314',
      inProvince: '254.08/1618.604',
      outProvince: '656.72/3312.736',
      international: '704.212/3510.0756',
      v4: 624.323,
      v6: 514.515
    },
    {
      userType: '??????',
      total: '155.104/8120.132',
      inProvince: '13.44/1322.072',
      outProvince: '86.496/7245.048',
      international: '15.416/1986.7408',
      v4: 37.358,
      v6: 29.455
    },
    {
      userType: 'WLAN',
      total: '1.546/251.598',
      inProvince: '0.176/15.988',
      outProvince: '0.184/120.992',
      international: '1.764/254.932',
      v4: 0.563,
      v6: 0.455
    },
    {
      userType: '??????',
      total: '251.402/2354.746',
      inProvince: '66.152/368.456',
      outProvince: '164.068/1350.304',
      international: '23.968/315.7584',
      v4: 14.352,
      v6: 8.524
    }
  ];

  topflowOfColumns: ColumnItem[] = [
    {
      name: '??????',
    },
    {
      name: '??????',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: TopItem, b: TopItem) => a.province.length - b.province.length,
      filterMultiple: true,
      listOfFilter: [
        {text: '??????', value: '??????'},
        {text: '??????', value: '??????'},
        {text: '??????', value: '??????'},
        {text: '??????', value: '??????'},
        {text: '??????', value: '??????'},
        {text: '??????', value: '??????'},
        {text: '??????', value: '??????'},
      ],
      filterFn: (address: string, item: TopItem) => item.province.indexOf(address) !== -1
    },
    {
      name: '????????????/????????????(Gbps)',
      sortOrder: null,
    },
    {
      name: '????????????/????????????(Gbps)',
      sortOrder: null,
    },
    {
      name: '????????????/????????????(Gbps)',
      sortOrder: null,
    },
    {
      name: '????????????/????????????(Gbps)',
      sortOrder: null,
    },
    {
      name: '????????????/????????????(Gbps)',
      sortOrder: null,
    },
    {
      name: 'IPV4??????(Gbps)',
      sortOrder: null,
    },
    {
      name: 'IPV6??????(Gbps)',
      sortOrder: null,
    },
    {
      name: '??????'
    }
  ];
  topflowOfData = [
    {
      id: 1,
      province: '??????',
      userType: '??????',
      netflow: 2249.544,
      speed: 1032.532,
      v4: 1034.343,
      v6: 923.534
    },
    {
      id: 2,
      province: '??????',
      userType: '??????',
      netflow: 2045.621,
      speed: 1021.634,
      v4: 1026.222,
      v6: 921.414
    },
    {
      id: 3,
      province: '??????',
      userType: 'WLAN',
      netflow: 2034.427,
      speed: 1012.127,
      v4: 1016.261,
      v6: 939.441
    },
    {
      id: 4,
      province: '??????',
      userType: '??????',
      netflow: 2039.452,
      speed: 1122.414,
      v4: 1128.795,
      v6: 1015.564
    },
    {
      id: 5,
      province: '??????',
      userType: '??????',
      netflow: 2131.105,
      speed: 1018.378,
      v4: 1025.382,
      v6: 912.435
    },
    {
      id: 6,
      province: '??????',
      userType: '??????',
      netflow: 2051.747,
      speed: 1026.261,
      v4: 1028.132,
      v6: 914.715
    },
    {
      id: 7,
      province: '??????',
      userType: '??????',
      netflow: 2045.102,
      speed: 1021.204,
      v4: 1212.012,
      v6: 1114.109
    },
    {
      id: 8,
      province: '??????',
      userType: '??????',
      netflow: 2135.157,
      speed: 1021.101,
      v4: 1024.378,
      v6: 914.446
    },
    {
      id: 9,
      province: '??????',
      userType: 'WLAN',
      netflow: 2026.152,
      speed: 1015.102,
      v4: 1017.714,
      v6: 937.513
    },
    {
      id: 10,
      province: '??????',
      userType: '??????',
      netflow: 2146.615,
      speed: 1223.605,
      v4: 1028.171,
      v6: 914.943
    }
  ];
  outNetFlowOfData = [
    {
      id: '-',
      province: '??????',
      userType: '??????',
      netflow: '1445.423/4362.683',
      dx: '692.396/1242.525',
      lt: '582.306/1104.522',
      gj: '42.104/163.351',
      qt: '355.415/749.351',
      v4: '1345.143',
      v6: '984.412'
    },
    {
      id: 1,
      province: '??????',
      userType: '??????',
      netflow: '432.432/1549.154',
      dx: '132.428/592.341',
      lt: '129.594/531.595',
      gj: '29.452/103.527',
      qt: '107.426/301.512',
      v4: '434.334',
      v6: '323.423'
    },
    {
      id: 2,
      province: '??????',
      userType: '??????',
      netflow: '421.442/1545.154',
      dx: '104.534/562.623',
      lt: '97.541/453.632',
      gj: '12.432/129.042',
      qt: '207.202/501.125',
      v4: '436.231',
      v6: '331.436'
    },
    {
      id: 3,
      province: '??????',
      userType: 'WLAN',
      netflow: '512.115/1534.167',
      dx: '230.524/762.623',
      lt: '104.252/452.310',
      gj: '3.432/14.512',
      qt: '107.223/401.245',
      v4: '516.243',
      v6: '439.412'
    },
    {
      id: 4,
      province: '??????',
      userType: '??????',
      netflow: '422.463/1639.416',
      dx: '130.154/662.203',
      lt: '104.252/652.286',
      gj: '14.221/40.194',
      qt: '160.204/401.125',
      v4: '428.946',
      v6: '315.428'
    },
    {
      id: 5,
      province: '??????',
      userType: '??????',
      netflow: '518.825/1631.531',
      dx: '201.459/562.292',
      lt: '164.302/552.104',
      gj: '2.921/30.821',
      qt: '160.948/401.238',
      v4: '525.251',
      v6: '312.412'
    },
    {
      id: 6,
      province: '??????',
      userType: '??????',
      netflow: '626.215/1551.762',
      dx: '132.428/592.341',
      lt: '129.594/531.595',
      gj: '29.452/103.527',
      qt: '107.426/301.512',
      v4: '628.328',
      v6: '514.625'
    },
    {
      id: 7,
      province: '??????',
      userType: '??????',
      netflow: '521.445/1545.254',
      dx: '104.534/562.623',
      lt: '97.541/453.632',
      gj: '12.432/129.042',
      qt: '207.202/501.125',
      v4: '414.952',
      v6: '522.144'
    },
    {
      id: 8,
      province: '??????',
      userType: '??????',
      netflow: '421.121/1435.743',
      dx: '230.524/762.623',
      lt: '104.252/452.310',
      gj: '3.432/14.512',
      qt: '107.223/401.245',
      v4: '304.604',
      v6: '424.842'
    },
    {
      id: 9,
      province: '??????',
      userType: 'WLAN',
      netflow: '515.274/1626.297',
      dx: '130.154/662.203',
      lt: '104.252/652.286',
      gj: '14.221/40.194',
      qt: '160.204/401.125',
      v4: '517.174',
      v6: '497.551'
    },
    {
      id: 10,
      province: '??????',
      userType: '??????',
      netflow: '323.326/1646.464',
      dx: '201.459/562.292',
      lt: '164.302/552.104',
      gj: '2.921/30.821',
      qt: '160.948/401.238',
      v4: '328.123',
      v6: '314.912'
    },
    {
      id: 11,
      province: '??????',
      userType: '??????',
      netflow: '532.325/1549.454',
      dx: '201.459/562.292',
      lt: '164.302/552.104',
      gj: '2.921/30.821',
      qt: '160.948/401.238',
      v4: '423.423',
      v6: '534.353'
    },
    {
      id: 12,
      province: '??????',
      userType: '??????',
      netflow: '521.415/1545.211',
      dx: '201.459/562.292',
      lt: '164.302/552.104',
      gj: '2.921/30.821',
      qt: '160.948/401.238',
      v4: '421.442',
      v6: '526.252'
    },
    {
      id: 13,
      province: '??????',
      userType: 'WLAN',
      netflow: '512.151/1534.745',
      dx: '201.459/562.292',
      lt: '164.302/552.104',
      gj: '2.921/30.821',
      qt: '160.948/401.238',
      v4: '516.532',
      v6: '459.474'
    },
    {
      id: 14,
      province: '??????',
      userType: '??????',
      netflow: '622.422/1609.428',
      dx: '201.459/562.292',
      lt: '164.302/552.104',
      gj: '2.921/30.821',
      qt: '160.948/401.238',
      v4: '628.169',
      v6: '515.424'
    },
    {
      id: 15,
      province: '??????',
      userType: '??????',
      netflow: '518.698/1501.845',
      dx: '201.459/562.292',
      lt: '164.302/552.104',
      gj: '2.921/30.821',
      qt: '160.948/401.238',
      v4: '412.984',
      v6: '525.452'
    },
    {
      id: 16,
      province: '??????',
      userType: '??????',
      netflow: '526.172/1501.517',
      dx: '201.459/562.292',
      lt: '164.302/552.104',
      gj: '2.921/30.821',
      qt: '160.948/401.238',
      v4: '528.723',
      v6: '414.235'
    },
    {
      id: 17,
      province: '??????',
      userType: '??????',
      netflow: '521.492/1505.522',
      dx: '201.459/562.292',
      lt: '164.302/552.104',
      gj: '2.921/30.821',
      qt: '160.948/401.238',
      v4: '414.924',
      v6: '522.224'
    },
    {
      id: 18,
      province: '??????',
      userType: '??????',
      netflow: '521.261/1505.617',
      dx: '201.459/562.292',
      lt: '164.302/552.104',
      gj: '2.921/30.821',
      qt: '160.948/401.238',
      v4: '414.826',
      v6: '524.821'
    },
    {
      id: 19,
      province: '??????',
      userType: 'WLAN',
      netflow: '515.152/1506.224',
      dx: '201.459/562.292',
      lt: '164.302/552.104',
      gj: '2.921/30.821',
      qt: '160.948/401.238',
      v4: '517.524',
      v6: '47.506'
    },
    {
      id: 20,
      province: '??????',
      userType: '??????',
      netflow: '523.614/1506.504',
      dx: '201.459/562.292',
      lt: '164.302/552.104',
      gj: '2.921/30.821',
      qt: '160.948/401.238',
      v4: '528.521',
      v6: '414.961'
    }
  ];
  allProvinceOfColumns: ColumnItem[] = [
    {
      name: '??????',
      sortOrder: null,
      sortFn: (a: ProvinceItem, b: ProvinceItem) => a.id - b.id,
      sortDirections: null,
      // filterMultiple: true,
      // listOfFilter: null,
      // filterFn: null
    },
    {
      name: '????????????',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: ProvinceItem, b: ProvinceItem) => a.userType.length - b.userType.length,
      filterMultiple: true,
      listOfFilter: [
        { text: '??????', value: '??????' },
        { text: '??????', value: '??????' },
        { text: 'WLAN', value: 'WLAN' },
        { text: '??????', value: '??????' },
      ],
      filterFn: (address: string, item: ProvinceItem) => item.userType.indexOf(address) !== -1
    },
    {
      name: '??????',
      sortOrder: null,
      sortFn: (a: ProvinceItem, b: ProvinceItem) => a.province.length - b.province.length,
      sortDirections: null,
      // filterMultiple: true,
      // listOfFilter: null,
      // filterFn: null
    },
    {
      name: '?????????',
      sortOrder: null,
      sortFn: (a: ProvinceItem, b: ProvinceItem) => a.operator.length - b.operator.length,
      sortDirections: null,
      // filterMultiple: true,
      // listOfFilter: null,
      // filterFn: null
    },
    {
      name: '????????????(Gbps)',
      sortOrder: null,
      sortFn: (a: ProvinceItem, b: ProvinceItem) => a.average.length - b.average.length,
      sortDirections: null,
      // filterMultiple: true,
      // listOfFilter: null,
      // filterFn: null
    },
    {
      name: '????????????(Gbps)',
      sortOrder: null,
      sortFn: (a: ProvinceItem, b: ProvinceItem) => a.maxSpeed.length - b.maxSpeed.length,
      sortDirections: null,
      // listOfFilter: null,
      // filterFn: null,
      // filterMultiple: true
    },
  ];
  allProvinceOfData: ProvinceItem[] = [
    {
      id: 1,
      userType: '??????',
      province: '??????',
      operator: '??????',
      average: '723.144',
      maxSpeed: '1532.605',
    },
    {
      id: 2,
      userType: '??????',
      province: '??????',
      operator: '??????',
      average: '642.651',
      maxSpeed: '1621.204',
    },
    {
      id: 3,
      userType: 'WLAN',
      province: '??????',
      operator: '??????',
      average: '631.337',
      maxSpeed: '1522.154',
    },
    {
      id: 4,
      userType: '??????',
      province: '??????',
      operator: '??????',
      average: '612.645',
      maxSpeed: '1558.304',
    },
    {
      id: 5,
      userType: '??????',
      province: '??????',
      operator: '??????',
      average: '594.310',
      maxSpeed: '1515.308',
    },
    {
      id: 6,
      userType: '??????',
      province: '??????',
      operator: '??????',
      average: '570.534',
      maxSpeed: '1526.202',
    },
    {
      id: 7,
      userType: '??????',
      province: '??????',
      operator: '??????',
      average: '423.452',
      maxSpeed: '1521.431',
    },
    {
      id: 8,
      userType: '??????',
      province: '??????',
      operator: '??????',
      average: '242.364',
      maxSpeed: '1521.131',
    },
    {
      id: 9,
      userType: 'WLAN',
      province: '??????',
      operator: '??????',
      average: '231.762',
      maxSpeed: '1525.215',
    },
    {
      id: 10,
      userType: '??????',
      province: '??????',
      operator: '??????',
      average: '213.204',
      maxSpeed: '1523.216',
    },
    {
      id: 11,
      userType: '??????',
      province: '??????',
      operator: '??????',
      average: '203.1',
      maxSpeed: '17.4',
    },
    {
      id: 12,
      userType: '??????',
      province: '??????',
      operator: '??????',
      average: '196.5',
      maxSpeed: '16.4',
    },
    {
      id: 13,
      userType: '??????',
      province: '??????',
      operator: '??????',
      average: '193.2',
      maxSpeed: '16.2',
    },
    {
      id: 14,
      userType: '??????',
      province: '??????',
      operator: '??????',
      average: '186.8',
      maxSpeed: '15.9',
    },
    {
      id: 15,
      userType: '??????',
      province: '??????',
      operator: '??????',
      average: '179.3',
      maxSpeed: '16.1',
    },
    {
      id: 16,
      userType: '??????',
      province: '??????',
      operator: '??????',
      average: '152.4',
      maxSpeed: '15.7',
    },
    {
      id: 17,
      userType: '??????',
      province: '??????',
      operator: '??????',
      average: '143.8',
      maxSpeed: '14.2',
    },
    {
      id: 18,
      userType: '??????',
      province: '??????',
      operator: '??????',
      average: '137.3',
      maxSpeed: '12.5',
    },
    {
      id: 19,
      userType: '??????',
      province: '??????',
      operator: '??????',
      average: '133.8',
      maxSpeed: '14.5',
    },
    {
      id: 21,
      userType: '??????',
      province: '??????',
      operator: '??????',
      average: '127.4',
      maxSpeed: '14.9',
    },
    {
      id: 22,
      userType: '??????',
      province: '??????',
      operator: '??????',
      average: '118.5',
      maxSpeed: '17.4',
    },
    {
      id: 23,
      userType: '??????',
      province: '??????',
      operator: '??????',
      average: '207.4',
      maxSpeed: '1412.6',
    },
  ];
  thisProvinceOfData: CompItem[] = [
    {
      compName: '??????????????????????????????',
      average: 164.4,
      maxSpeed: 25.9,
    },
    {
      compName: '???????????????????????????????????????',
      average: 418.5,
      maxSpeed: 22.7,
    },
    {
      compName: '??????????????????????????????',
      average: 752.1,
      maxSpeed: 18.3,
    },
    {
      compName: '?????????????????????????????????',
      average: 274.8,
      maxSpeed: 21.7,
    }
  ];
  allCompanyOfColumns = [
    {
      name: '?????????',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: AllCompItem, b: AllCompItem) => a.icpName.length - b.icpName.length,
      filterMultiple: true,
      listOfFilter: [
        { text: '??????', value: '??????' },
        { text: '??????', value: '??????' },
        { text: 'WLAN', value: 'WLAN' },
        { text: '??????', value: '??????' },
      ],
      filterFn: (address: string, item: AllCompItem) => item.icpName.indexOf(address) !== -1
    },
    // {
    //   name: '??????',
    //   sortOrder: null,
    //   sortDirections: ['ascend', 'descend', null],
    //   sortFn: (a: AllCompItem, b: AllCompItem) => a.province.length - b.province.length,
    //   filterMultiple: false,
    //   listOfFilter: [
    //     { text: '??????', value: '??????' },
    //     { text: '??????', value: '??????' },
    //     { text: 'WLAN', value: 'WLAN' },
    //     { text: '??????', value: '??????' },
    //   ],
    //   filterFn: (address: string, item: AllCompItem) => item.province.indexOf(address) !== -1
    // },
    {
      name: '????????????/????????????(Gbps)',
      sortOrder: null,
      sortFn: (a: AllCompItem, b: AllCompItem) => a.total.length - b.total.length,
      sortDirections: null,
      // filterMultiple: true,
      // listOfFilter: null,
      // filterFn: null
    },
    {
      name: '????????????/????????????(Gbps)',
      sortOrder: null,
      sortFn: (a: AllCompItem, b: AllCompItem) => a.inPro.length - b.inPro.length,
      sortDirections: null,
      // filterMultiple: true,
      // listOfFilter: null,
      // filterFn: null
    },
    {
      name: '????????????/????????????(Gbps)',
      sortOrder: null,
      sortFn: (a: AllCompItem, b: AllCompItem) => a.outPro.length - b.outPro.length,
      sortDirections: null,
      // listOfFilter: null,
      // filterFn: null,
      // filterMultiple: true
    },
    {
      name: '????????????/????????????(Gbps)',
      sortOrder: null,
      sortFn: (a: AllCompItem, b: AllCompItem) => a.outNet.length - b.outNet.length,
      sortDirections: null,
      // listOfFilter: null,
      // filterFn: null,
      // filterMultiple: true
    },
    {
      name: 'IPV4??????(Gbps)/??????',
      sortOrder: null,
      sortFn: (a: TopItem, b: TopItem) => a.v4 - b.v4,
      sortDirections: null,
    },
    {
      name: 'IPV6??????(Gbps)/??????',
      sortOrder: null,
      sortFn: (a: TopItem, b: TopItem) => a.v6 - b.v6,
      sortDirections: null,
    },
    {
      name: '?????????',
      sortOrder: null,
      sortFn: (a: AllCompItem, b: AllCompItem) => a.inProRent.length - b.inProRent.length,
      sortDirections: null,
      // listOfFilter: null,
      // filterFn: null,
      // filterMultiple: true
    },
    {
      name: '?????????',
      sortOrder: null,
      sortFn: (a: AllCompItem, b: AllCompItem) => a.inNetRent.length - b.inNetRent.length,
      sortDirections: null,
      // listOfFilter: null,
      // filterFn: null,
      // filterMultiple: true
    },
  ];
  allCompanyOfData = [
    {
      icpName: '??????????????????????????????',
      province: '??????',
      total: '24.6/32.98',
      inPro: '14.76/20.988',
      outPro: '10.84/12.992',
      outNet: '4.764/5.7932',
      high: '9.49/68.3%',
      low: '2.522/31.7%',
      inProRent: '59.6%',
      inNetRent: '61.8%',
    },
    {
      icpName: '???????????????????????????????????????',
      province: '??????',
      total: '16.5/20.95',
      inPro: '10.9/12.37',
      outPro: '6.6/8.58',
      outNet: '6.11/12.943',
      high: '8.24/56.6%',
      low: '3.048/43.4%',
      inProRent: '30.0%',
      inNetRent: '52.5%',
    },
    {
      icpName: '??????????????????????????????',
      province: '??????',
      total: '10.4/12.42',
      inPro: '6.04/8.052',
      outPro: '4.36/4.368',
      outNet: '1.356/2.7628',
      high: '5.21/62.8%',
      low: '1.532/37.2%',
      inProRent: '35%',
      inNetRent: '54.2%',
    },
    {
      icpName: '??????????????????????????????????????????',
      province: '??????',
      total: '14.1/18.33',
      inPro: '8.46/10.398',
      outPro: '5.64/7.932',
      outNet: '2.994/3.8922',
      high: '4.31/62.7%',
      low: '1.433/37.3%',
      inProRent: '41.2%',
      inNetRent: '62.1%',
    },
    {
      icpName: '???????????????????????????',
      province: '??????',
      total: '30.4/40.12',
      inPro: '18.44/24.072',
      outPro: '11.96/16.048',
      outNet: '5.416/6.7408',
      high: '10.41/56.5%',
      low: '3.415/43.5%',
      inProRent: '30.8%',
      inNetRent: '67.4%',
    },
    {
      icpName: '??????????????????????????????',
      province: '??????',
      total: '10.7/12.51',
      inPro: '6.62/8.506',
      outPro: '4.08/4.004',
      outNet: '1.118/2.4534',
      high: '3.56/63.2%',
      low: '0.938/36.8%',
      inProRent: '37.4%',
      inNetRent: '54.3%',
    },
    {
      icpName: '??????',
      province: '??????',
      total: '23.8/30.34',
      inPro: '14.08/18.604',
      outPro: '9.72/11.736',
      outNet: '6.212/10.0756',
      high: '8.34/59.4%',
      low: '3.938/40.6%',
      inProRent: '35.3%',
      inNetRent: '76.7%',
    },
    {
      icpName: '?????????????????????????????????',
      province: '??????',
      total: '24.6/32.98',
      inPro: '14.76/20.988',
      outPro: '10.84/12.992',
      outNet: '8.764/10.7932',
      high: '2.03/61.2%',
      low: '0.893/38.8%',
      inProRent: '46.1%',
      inNetRent: '53.6%',
    },
    {
      icpName: '???????????????????????????????????????',
      province: '??????',
      total: '22.2/28.76',
      inPro: '12.12/18.456',
      outPro: '9.08/10.304',
      outNet: '5.968/7.7584',
      high: '11.34/63.4%',
      low: '4.103/36.6%',
      inProRent: '36.4%',
      inNetRent: '47.7%',
    },
    {
      icpName: '????????????',
      province: '??????',
      total: '9.6/12.68',
      inPro: '5.16/7.208',
      outPro: '4.44/5.472',
      outNet: '1.424/2.7512',
      high: '8.34/59.4%',
      low: '3.859/40.6%',
      inProRent: '47%',
      inNetRent: '56%',
    },
  ];
  compNetflowOfData: CompNetflowItem[] = [
    {
      total: '28.6/32.98',
      inPro: '16.76/20.988',
      outPro: '11.84/11.992',
      outNet: '4.764/6.7932',
    },
  ];
  netflowIpOfColumns: ColumnItem[] = [
    {
      name: 'IP',
      sortOrder: null,
      sortFn: (a: NetflowIpItem, b: NetflowIpItem) => a.ip.length - b.ip.length,
      sortDirections: null,
      // filterMultiple: true,
      // listOfFilter: null,
      // filterFn: null
    },
    {
      name: 'IP??????',
      sortOrder: null,
      sortFn: (a: NetflowIpItem, b: NetflowIpItem) => a.ipBelong.length - b.ipBelong.length,
      sortDirections: null,
      // filterMultiple: true,
      // listOfFilter: null,
      // filterFn: null
    },
    {
      name: '?????????',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: NetflowIpItem, b: NetflowIpItem) => a.operator.length - b.operator.length,
      filterMultiple: true,
      listOfFilter: [
        { text: '??????', value: '??????' },
        { text: '??????', value: '??????' },
        { text: '??????', value: '??????' },
      ],
      filterFn: (address: string, item: NetflowIpItem) => item.operator.indexOf(address) !== -1
    },
    {
      name: '????????????',
      sortOrder: null,
      sortFn: (a: NetflowIpItem, b: NetflowIpItem) => a.netflow - b.netflow,
      sortDirections: null,
      // listOfFilter: null,
      // filterFn: null,
      // filterMultiple: true
    },
    {
      name: '????????????',
      sortOrder: null,
      sortFn: (a: NetflowIpItem, b: NetflowIpItem) => a.average - b.average,
      sortDirections: null,
      // filterMultiple: false,
      // listOfFilter: null,
      // filterFn: null
    },
    {
      name: '????????????',
      sortOrder: null,
      sortFn: (a: NetflowIpItem, b: NetflowIpItem) => a.maxSpeed - b.maxSpeed,
      sortDirections: null,
      // filterMultiple: false,
      // listOfFilter: null,
      // filterFn: null
    },
  ];
  netflowIpOfData: NetflowIpItem[] = [
    {
      ip: '117.187.149.232',
      ipBelong: '??????',
      operator: '??????',
      netflow: 112,
      average: 8.9,
      maxSpeed: 25.3,
    },
    {
      ip: '117.187.149.226',
      ipBelong: '??????',
      operator: '??????',
      netflow: 33,
      average: 5,
      maxSpeed: 0.4,
    },
    {
      ip: '117.187.21.241',
      ipBelong: '??????',
      operator: '??????',
      netflow: 11,
      average: 1,
      maxSpeed: 1.5,
    },
    {
      ip: '117.187.21.251',
      ipBelong: '??????',
      operator: '??????',
      netflow: 63,
      average: 8.4,
      maxSpeed: 13.4,
    },
    {
      ip: '117.177.133.243',
      ipBelong: '??????',
      operator: '??????',
      netflow: 233,
      average: 9.4,
      maxSpeed: 12.9,
    },
    {
      ip: '221.178.11.252',
      ipBelong: '??????',
      operator: '??????',
      netflow: 258,
      average: 8.2,
      maxSpeed: 12.7,
    },
    {
      ip: '36.159.54.218',
      ipBelong: '??????',
      operator: '??????',
      netflow: 74,
      average: 7.3,
      maxSpeed: 12.9,
    },
    {
      ip: '111.10.47.241',
      ipBelong: '??????',
      operator: '??????',
      netflow: 148,
      average: 12.3,
      maxSpeed: 22.8,
    },
    {
      ip: '117.169.15.124',
      ipBelong: '??????',
      operator: '??????',
      netflow: 267,
      average: 24.3,
      maxSpeed: 31.6,
    },
  ];
  ipOfData: IpItem[] = [
    {
      host: 'www.taobao.com.danuoyi.tbcache.com.',
      cname: 'taobao.com',
    },
  ];
  provinceOfData = [
    {
      province: '??????',
      average: '12.53Gbps',
      peak: '42.36Gbps'
    }
  ];
  outProvinceOfData = [
    {
      province: '??????',
      average: '51.62Gbps',
      peak: '110.51Gbps'
    },
    {
      province: '??????',
      average: '51.62Gbps',
      peak: '110.51Gbps'
    },
    {
      province: '??????',
      average: '22.56Gbps',
      peak: '31.57Gbps'
    },
    {
      province: '?????????',
      average: '16.22Gbps',
      peak: '34.89Gbps'
    },
    {
      province: '??????',
      average: '6.82Gbps',
      peak: '12.33Gbps'
    },
    {
      province: '?????????',
      average: '5.02Gbps',
      peak: '12.09Gbps'
    },
    {
      province: '??????',
      average: '5.52Gbps',
      peak: '32.07Gbps'
    },
    {
      province: '??????',
      average: '4.99Gbps',
      peak: '25.43Gbps'
    },
    {
      province: '??????',
      average: '4.52Gbps',
      peak: '30.52Gbps'
    }
  ];
  icpDetailOfData = [
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
  hostDetailOfData = [
    {
      host: 'adashx.m.taobao.com',
      average: 8.9,
      maxSpeed: 25.3,
      click: '18,371,921'
    },
    {
      host: 'audid-api.taobao.com',
      average: 6.2,
      maxSpeed: 21.3,
      click: '16,461,612'
    },
    {
      host: 'h-adashx.ut.taobao.com',
      average: 4.9,
      maxSpeed: 15.3,
      click: '15,274,745'
    },
    {
      host: 'guide-acs.m.taobao.com',
      average: 4.9,
      maxSpeed: 15.3,
      click: '15,124,275'
    },
    {
      host: 'rhdc-acs.m.taobao.com',
      average: 4.9,
      maxSpeed: 15.3,
      click: '14,938,434'
    },
    {
      host: 'hybrid.miniapp.taobao.com',
      average: 4.9,
      maxSpeed: 15.3,
      click: '14,364,429'
    },
    {
      host: 'hybrid.miniapp.taobao.com',
      average: 4.9,
      maxSpeed: 15.3,
      click: '14,364,429'
    },
    {
      host: 'hybrid.miniapp.taobao.com',
      average: 4.9,
      maxSpeed: 15.3,
      click: '14,364,429'
    },
    {
      host: 'hybrid.miniapp.taobao.com',
      average: 4.9,
      maxSpeed: 15.3,
      click: '14,364,429'
    }
  ];


  customNetflowOfData = [
    {
      compName: '??????',
      other: '-',
      total: '16524.104/23542.042',
      inPro: '305.143/729.521',
      outPro: '1405.341/2514.204',
      outNet: '45.144/120.401',
      high: '99.4/68.3%',
      low: '42.22/31.7%',
      inProRent: '41.1%',
      inNetRent: '56.3%',
    },
    {
      compName: '???????????????',
      other: '-',
      total: '402.317/810.049',
      inPro: '91.93/221.047',
      outPro: '306.95/692.447',
      outNet: '3.437/33.278',
      high: '9.49/68.3%',
      low: '2.522/31.7%',
      inProRent: '59.6%',
      inNetRent: '61.8%',
    },
    {
      compName: '???????????????',
      other: '-',
      total: '208.206/473.051',
      inPro: '23.322/118.566',
      outPro: '183.542/431.255',
      outNet: '1.342/62.542',
      high: '8.24/56.6%',
      low: '3.048/43.4%',
      inProRent: '30.0%',
      inNetRent: '52.5%',
    },
    {
      compName: '??????????????????IPTV??????',
      other: '??????IPTV',
      total: '185.977/423.009',
      inPro: '19.186/118.257',
      outPro: '165.678/393.88',
      outNet: '1.114/82.117',
      high: '5.21/62.8%',
      low: '1.532/37.2%',
      inProRent: '35%',
      inNetRent: '54.2%',
    },
    {
      compName: '??????????????????IPTV??????',
      other: '??????IPTV',
      total: '180.09/354.892',
      inPro: '40.373/175.682',
      outPro: '137.505/308.5',
      outNet: '2.211/35.673',
      high: '4.31/62.7%',
      low: '1.433/37.3%',
      inProRent: '41.2%',
      inNetRent: '62.1%',
    },
    {
      compName: '???????????????????????????',
      other: '??????',
      total: '144.063/346.04',
      inPro: '88.691/296.209',
      outPro: '53.834/156.558',
      outNet: '1.538/58.844',
      high: '10.41/56.5%',
      low: '3.415/43.5%',
      inProRent: '30.8%',
      inNetRent: '67.4%',
    },
    {
      compName: '???????????????????????????????????????',
      other: '??????',
      total: '145.617/351.321',
      inPro: '28.716/159.507',
      outPro: '116.058/319.832',
      outNet: '0.844/98.432',
      high: '3.56/63.2%',
      low: '0.938/36.8%',
      inProRent: '37.4%',
      inNetRent: '54.3%',
    },
    {
      compName: '??????????????????????????????',
      other: '??????',
      total: '31.069/97.586',
      inPro: '0.122/32.438',
      outPro: '26.987/91.849',
      outNet: '3.96/44.443',
      high: '8.34/59.4%',
      low: '3.938/40.6%',
      inProRent: '35.3%',
      inNetRent: '76.7%',
    },
    {
      compName: '????????????????????????????????????',
      other: '??????',
      total: '24.6/32.98',
      inPro: '14.76/20.988',
      outPro: '10.84/12.992',
      outNet: '8.764/10.7932',
      high: '11.34/63.4%',
      low: '4.103/36.6%',
      inProRent: '46.1%',
      inNetRent: '53.6%',
    },
    {
      compName: '????????????????????????????????????',
      other: '????????????',
      total: '67.146/320.208',
      inPro: '8.558/66.149',
      outPro: '58.416/253.965',
      outNet: '0.172/5.884',
      high: '8.34/59.4%',
      low: '3.859/40.6%',
      inProRent: '36.4%',
      inNetRent: '47.7%',
    },
    {
      compName: '????????????????????????????????????',
      other: '????????????',
      total: '49.656/227.985',
      inPro: '11.43/53.408',
      outPro: '38.023/207.296',
      outNet: '0.203/8.846',
      high: '2.03/61.2%',
      low: '0.893/38.8%',
      inProRent: '47%',
      inNetRent: '56%',
    },
  ];
  customNetflowOfColumns: ColumnItem[] = [
    {
      name: 'ICP??????',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: Custom, b: Custom) => a.compName.length - b.compName.length,
      filterMultiple: true,
      listOfFilter: [
        {text: '??????????????????????????????', value: '??????????????????????????????'},
        {text: '???????????????????????????????????????', value: '???????????????????????????????????????'},
        {text: '??????????????????????????????', value: '??????????????????????????????'},
        {text: '??????????????????????????????????????????', value: '??????????????????????????????????????????'},
        {text: '???????????????????????????', value: '???????????????????????????'},
        {text: '??????????????????????????????', value: '??????????????????????????????'},
        {text: '??????', value: '??????'},
        {text: '?????????????????????????????????', value: '?????????????????????????????????'},
        {text: '???????????????????????????????????????', value: '???????????????????????????????????????'},
        {text: '????????????', value: '????????????'},
      ],
      filterFn: (address: string, item: Custom) => item.compName.indexOf(address) !== -1
    },
    {
      name: '??????',
    },
    {
      name: '????????????/????????????(Gbps)',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.total.length - b.total.length,
      sortDirections: null,
    },
    {
      name: '????????????/????????????(Gbps)',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.inPro.length - b.inPro.length,
      sortDirections: null,
    },
    {
      name: '????????????/????????????(Gbps)',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.outPro.length - b.outPro.length,
      sortDirections: null,
    },
    {
      name: '????????????/????????????(Gbps)',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.outNet.length - b.outNet.length,
      sortDirections: null,
    },
    {
      name: 'IPV4??????(Gbps)/??????',
      sortOrder: null,
      sortFn: (a: TopItem, b: TopItem) => a.v4 - b.v4,
      sortDirections: null,
    },
    {
      name: 'IPV6??????(Gbps)/??????',
      sortOrder: null,
      sortFn: (a: TopItem, b: TopItem) => a.v6 - b.v6,
      sortDirections: null,
    },
    {
      name: '?????????',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.inProRent.length - b.inProRent.length,
      sortDirections: null,
    },
    {
      name: '?????????',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.inNetRent.length - b.inNetRent.length,
      sortDirections: null,
    },
    {
      name: '????????????'
    },
    {
      name: '????????????'
    },
    {
      name: 'IP??????'
    },
    {
      name: 'CDN??????'
    }
  ];
  customNetflowIcpOfData = [
    {
      icpName: '??????',
      belong: '?????????????????????????????????',
      total: '1.091/33.938',
      inPro: '1.076/33.988',
      outPro: '0.061/10.602',
      outNet: '0/0.002',
      high: '9.49/68.3%',
      low: '2.522/31.7%',
      inProRent: '97.17%',
      inNetRent: '100%',
    },
    {
      icpName: '??????????????????????????????????????????',
      belong: '??????????????????????????????',
      total: '0.425/34.735',
      inPro: '0.397/34.615',
      outPro: '0.028/24.252',
      outNet: '0/0',
      high: '8.24/56.6%',
      low: '3.048/43.4%',
      inProRent: '96.71%',
      inNetRent: '100%',
    },
    {
      // icpName: '??????????????????????????????',
      icpName: '?????????????????????????????????????????????',
      belong: '???????????????????????????',
      total: '0.002/1.401',
      inPro: '0.002/1.401',
      outPro: '0/0.86',
      outNet: '0/0',
      high: '5.21/62.8%',
      low: '1.532/37.2%',
      inProRent: '100%',
      inNetRent: '100%',
    },
    {
      // icpName: '??????????????????????????????????????????',
      icpName: '???????????????????????????????????????',
      belong: '????????????????????????',
      total: '0.002/0.188',
      inPro: '0.002/0.188',
      outPro: '0/0.089',
      outNet: '0/0',
      high: '4.31/62.7%',
      low: '1.433/37.3%',
      inProRent: '100%',
      inNetRent: '100%',
    },
    {
      // icpName: '???????????????????????????',
      icpName: '??????????????????????????????',
      belong: '???????????????????????????????????????',
      total: '0.001/0.171',
      inPro: '0/0.042',
      outPro: '0/0',
      outNet: '0.001/0.171',
      high: '10.41/56.5%',
      low: '3.415/43.5%',
      inProRent: '100%',
      inNetRent: '100%',
    },
    {
      // icpName: '??????????????????????????????',
      icpName: '????????????????????????????????????',
      belong: '?????????????????????????????????',
      total: '0/0.063',
      inPro: '0/0',
      outPro: '0/0',
      outNet: '0/0.063',
      high: '3.56/63.2%',
      low: '0.938/36.8%',
      inProRent: '0%',
      inNetRent: '0%',
    },
    {
      // icpName: '??????',
      icpName: '??????????????????????????????????????????',
      belong: '??????????????????????????????',
      total: '0/0.044',
      inPro: '0/0.002',
      outPro: '0/0',
      outNet: '0/0.044',
      high: '8.34/59.4%',
      low: '3.938/40.6%',
      inProRent: '0%',
      inNetRent: '0%',
    },
    {
      // icpName: '?????????????????????????????????',
      icpName: '??????2022??????????????????????????????????????????',
      belong: '???????????????????????????',
      total: '0/0.041',
      inPro: '0/0',
      outPro: '0/0',
      outNet: '0/0.041',
      high: '11.34/63.4%',
      low: '4.103/36.6%',
      inProRent: '0%',
      inNetRent: '0%',
    },
    {
      // icpName: '???????????????????????????????????????',
      icpName: '?????????',
      belong: '??????',
      total: '0/0.049',
      inPro: '0/0',
      outPro: '0/0',
      outNet: '0/0.049',
      high: '8.34/59.4%',
      low: '3.859/40.6%',
      inProRent: '0%',
      inNetRent: '0%',
    },
    {
      // icpName: '????????????',
      icpName: '???????????????',
      belong: '?????????????????????????????????',
      total: '0/0.045',
      inPro: '0/0',
      outPro: '0/0',
      outNet: '0/0.045',
      high: '2.03/61.2%',
      low: '0.893/38.8%',
      inProRent: '0%',
      inNetRent: '0%',
    },
  ];
  customNetflowIcpOfColumns: ColumnItem[] = [
    {
      name: 'IDC??????',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: Custom, b: Custom) => a.compName.length - b.compName.length,
      filterMultiple: true,
      listOfFilter: [
        {text: '??????', value: '??????'},
        {text: '??????????????????????????????????????????', value: '??????????????????????????????????????????'},
        {text: '?????????????????????????????????????????????', value: '?????????????????????????????????????????????'},
        {text: '???????????????????????????????????????', value: '???????????????????????????????????????'},
        {text: '??????????????????????????????????????????', value: '??????????????????????????????????????????'},
        {text: '????????????????????????????????????', value: '????????????????????????????????????'},
        {text: '??????????????????????????????????????????', value: '??????????????????????????????????????????'},
        {text: '??????2022??????????????????????????????????????????', value: '??????2022??????????????????????????????????????????'},
        {text: '?????????', value: '?????????'},
        {text: '???????????????', value: '???????????????'},
      ],
      filterFn: (address: string, item: Custom) => item.compName.indexOf(address) !== -1
    },
    // {
    //   name: '??????'
    // },
    {
      name: '????????????/????????????',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.total.length - b.total.length,
      sortDirections: null,
      // filterMultiple: true,
      // listOfFilter: null,
      // filterFn: null
    },
    {
      name: '????????????/????????????',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.inPro.length - b.inPro.length,
      sortDirections: null,
      // filterMultiple: true,
      // listOfFilter: null,
      // filterFn: null
    },
    {
      name: '????????????/????????????',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.outPro.length - b.outPro.length,
      sortDirections: null,
      // listOfFilter: null,
      // filterFn: null,
      // filterMultiple: true
    },
    {
      name: '????????????/????????????',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.outNet.length - b.outNet.length,
      sortDirections: null,
      // filterMultiple: false,
      // listOfFilter: null,
      // filterFn: null
    },
    {
      name: 'IPV4??????(Gbps)/??????',
      sortOrder: null,
      sortFn: (a: TopItem, b: TopItem) => a.v4 - b.v4,
      sortDirections: null,
    },
    {
      name: 'IPV6??????(Gbps)/??????',
      sortOrder: null,
      sortFn: (a: TopItem, b: TopItem) => a.v6 - b.v6,
      sortDirections: null,
    },
    {
      name: '?????????',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.inProRent.length - b.inProRent.length,
      sortDirections: null,
      // filterMultiple: false,
      // listOfFilter: null,
      // filterFn: null
    },
    {
      name: '?????????',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.inNetRent.length - b.inNetRent.length,
      sortDirections: null,
      // filterMultiple: false,
      // listOfFilter: null,
      // filterFn: null
    },
  ];
  hostData = [
    {
      ip: '111.31.26.238',
      average: '8.633',
      belongs: '????????????',
      times: '229747',
    },
    {
      ip: '111.31.26.212',
      average: '8.518',
      belongs: '????????????',
      times: '11104902',
    },
    {
      ip: '111.31.34.78',
      average: '6.118',
      belongs: '????????????',
      times: '222138',
    },
    {
      ip: '111.31.27.165',
      average: '3.909',
      belongs: '????????????',
      times: '1343509',
    },
  ];
  cdnData = [
    {
      cdn: '?????????CDN',
      cname: 'cdntip.com',
      total: '0.425/34.735',
      inPro: '0.397/34.615',
      outPro: '0.028/24.252',
      outNet: '0/0',
      high: '9.49/68.3%',
      low: '2.522/31.7%',
      inProRent: '96.71%',
      inNetRent: '100%',
    },
    {
      cdn: '?????????',
      cname: 'qq.com',
      total: '0.336/24.562',
      inPro: '0.186/24.445',
      outPro: '0.048/24.252',
      outNet: '0/0',
      high: '8.24/56.6%',
      low: '3.048/43.4%',
      inProRent: '97.45%',
      inNetRent: '100%',
    },
    {
      cdn: '?????????CDN',
      cname: 'qcloudcdn.com',
      total: '0.441/23.924',
      inPro: '0.236/21.248',
      outPro: '0.048/24.252',
      outNet: '0/0',
      high: '5.21/62.8%',
      low: '1.532/37.2%',
      inProRent: '94.65%',
      inNetRent: '100%',
    },
  ];
  cdnIpData = [
    {
      ip: '111.30.176.30',
      belongs: '??????????????????????????????????????????',
      times: '95'
    },
    {
      ip: '111.30.142.188',
      belongs: '??????????????????????????????????????????',
      times: '8637'
    },
    {
      ip: '111.30.176.33',
      belongs: '??????????????????????????????????????????',
      times: '2812'
    }
  ];
  cdnCnameData = [
    {
      cname: 'smid5.hy.qcloudcdn.com.cdn.dnsv1.com.;smid5.cdntip.com.',
      web: '?????????CDN',
      clicks: '2812'
    },
    {
      cname: 'stsoc2ds.hy.qcloudcdn.com.cdn.dnsv1.com.;up.static2.stsocds.cdntip.com.;cdnmid.pdd.cdn.dnsv1.com.;smid5.cdntip.com.',
      web: '?????????CDN',
      clicks: '1298'
    },
    {
      cname: 'stsoc2ds.cache.qcloudcdn.com.cdn.dnsv1.com.;up.static2.stsocds.cdntip.com.;cdnmid.pdd.cdn.dnsv1.com.;smid5.cdntip.com.',
      web: '?????????CDN',
      clicks: '1228'
    }
  ];
  customNetflowIpOfData = [
    {
      ip: '111.30.181.16',
      ipIcp: '??????????????????????????????',
      total: '13.5/18.1',
      inPro: '7.4/11.6',
      outPro: '4.5/4.4',
      outNet: '2.6/3.1',
      inProRent: '59.6%',
      inNetRent: '61.8%',
      percent: '6.36%'
    },
    {
      ip: '111.30.150.0',
      ipIcp: '???????????????????????????????????????',
      total: '18.51/20.95',
      inPro: '10.9/11.37',
      outPro: '3.6/4.58',
      outNet: '4.11/5.943',
      inProRent: '30.0%',
      inNetRent: '62.5%',
      percent: '8.72%'
    },
    {
      ip: '111.30.172.210',
      ipIcp: '??????????????????????????????',
      total: '10.4/12.42',
      inPro: '5.04/8.052',
      outPro: '4.36/3.368',
      outNet: '1.356/3.7628',
      inProRent: '35.0%',
      inNetRent: '64.2%',
      percent: '4.90%'
    },
    {
      ip: '111.30.172.194',
      ipIcp: '??????????????????????????????????????????',
      total: '14.1/18.33',
      inPro: '8.46/10.398',
      outPro: '3.64/3.932',
      outNet: '3.994/4.8922',
      inProRent: '21.2%',
      inNetRent: '52.1%',
      percent: '6.64%'
    },
    {
      ip: '111.30.159.193',
      ipIcp: '??????????????????????????????',
      total: '12.5/18.1',
      inPro: '8.4/12.6',
      outPro: '2.5/3.4',
      outNet: '1.6/2.1',
      inProRent: '59.6%',
      inNetRent: '61.8%',
      percent: '5.89%'
    },
    {
      ip: '111.30.160.142',
      ipIcp: '???????????????????????????',
      total: '30.4/40.12',
      inPro: '18.44/24.072',
      outPro: '12.96/12.048',
      outNet: '10.416/12.7408',
      inProRent: '30.8%',
      inNetRent: '77.4%',
      percent: '14.32%'
    },
    {
      ip: '111.30.182.235',
      ipIcp: '??????????????????????????????',
      total: '10.7/12.51',
      inPro: '6.62/8.506',
      outPro: '4.08/4.004',
      outNet: '3.118/4.4534',
      inProRent: '37.4%',
      inNetRent: '54.3%',
      percent: '5.04%'
    },
    {
      ip: '111.30.135.0',
      ipIcp: '??????',
      total: '46.8/60.34',
      inPro: '28.08/36.604',
      outPro: '18.72/24.736',
      outNet: '14.212/10.0756',
      inProRent: '25.3%',
      inNetRent: '46.7%',
      percent: '22.04%'
    },
    {
      ip: '111.30.142.50',
      ipIcp: '?????????????????????????????????',
      total: '24.6/32.98',
      inPro: '14.76/20.988',
      outPro: '10.84/12.992',
      outNet: '8.764/10.7932',
      inProRent: '36.1%',
      inNetRent: '53.6%',
      percent: '11.59%'
    },
    {
      ip: '111.30.181.123',
      ipIcp: '???????????????????????????????????????',
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
      ipIcp: '????????????',
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
      filterMultiple: true,
      listOfFilter: [
        {text: '117.187.149.232', value: '117.187.149.232'},
      ],
      filterFn: (address: string, item: CustomIp) => item.ip.indexOf(address) !== -1
    },
    // {
    //   name: 'ICP??????',
    //   sortOrder: null,
    //   sortFn: (a: CustomIp, b: CustomIp) => a.ipIcp.length - b.ipIcp.length,
    //   sortDirections: null,
    //   filterMultiple: true,
    //   listOfFilter: null,
    //   filterFn: null
    // },
    {
      name: '????????????/????????????',
      sortOrder: null,
      sortFn: (a: CustomIp, b: CustomIp) => a.total.length - b.total.length,
      sortDirections: null,
      // filterMultiple: true,
      // listOfFilter: null,
      // filterFn: null
    },
    {
      name: '????????????/????????????',
      sortOrder: null,
      sortFn: (a: CustomIp, b: CustomIp) => a.inPro.length - b.inPro.length,
      sortDirections: null,
      // filterMultiple: true,
      // listOfFilter: null,
      // filterFn: null
    },
    {
      name: '????????????/????????????',
      sortOrder: null,
      sortFn: (a: CustomIp, b: CustomIp) => a.outPro.length - b.outPro.length,
      sortDirections: null,
      // listOfFilter: null,
      // filterFn: null,
      // filterMultiple: true
    },
    {
      name: '????????????/????????????',
      sortOrder: null,
      sortFn: (a: CustomIp, b: CustomIp) => a.outNet.length - b.outNet.length,
      sortDirections: null,
      // filterMultiple: false,
      // listOfFilter: null,
      // filterFn: null
    },
    {
      name: '?????????',
      sortOrder: null,
      sortFn: (a: CustomIp, b: CustomIp) => a.inProRent.length - b.inProRent.length,
      sortDirections: null,
      // filterMultiple: false,
      // listOfFilter: null,
      // filterFn: null
    },
    {
      name: '?????????',
      sortOrder: null,
      sortFn: (a: CustomIp, b: CustomIp) => a.inNetRent.length - b.inNetRent.length,
      sortDirections: null,
      // filterMultiple: false,
      // listOfFilter: null,
      // filterFn: null
    },
    {
      name: '????????????',
      sortOrder: null,
      sortFn: (a: CustomIp, b: CustomIp) => a.percent.length - b.percent.length,
      sortDirections: null,
      // filterMultiple: false,
      // listOfFilter: null,
      // filterFn: null
    },
  ];
  ipAnalyseOfData: IpAnalyse[] = [
    {
      host: 'cs.map.qq.com',
      cname: 'ins-n9qyl8ib.ias.tencent-cloud.net.',
      webName: '?????????',
      compName: '??????????????????????????????????????????',
      analyseTimes: '395374',
    },
    {
      host: 'mapvectors.map.qq.com',
      cname: 'ins-xeypxay6.ias.tencent-cloud.net.',
      webName: '?????????',
      compName: '??????????????????????????????????????????',
      analyseTimes: '46240',
    },
    {
      host: 'rta.map.qq.com',
      cname: 'ins-ewo2z8o4.ias.tencent-cloud.net.',
      webName: '?????????',
      compName: '??????????????????????????????????????????',
      analyseTimes: '21720',
    },
    {
      host: 'ld.map.qq.com',
      cname: 'ins-p8cwnxe5.ias.tencent-cloud.net.',
      webName: '?????????',
      compName: '??????????????????????????????????????????',
      analyseTimes: '19148',
    },
    {
      host: 'ins-xeypxay6.ias.tencent-cloud.net',
      cname: '',
      webName: '?????????',
      compName: '??????????????????????????????????????????',
      analyseTimes: '11096',
    },
    {
      host: 'parking.map.qq.com',
      cname: 'ins-77t1s7tr.ias.tencent-cloud.net.',
      webName: '?????????',
      compName: '??????????????????????????????????????????',
      analyseTimes: '1260',
    },
    {
      host: 'retcode.taobao.com',
      cname: 'taobao.com.danuoyi.tbcache.com.',
      webName: '?????????',
      compName: '??????????????????????????????????????????',
      analyseTimes: '14,263,535',
    },
    {
      host: 'ins-ewo2z8o4.ias.tencent-cloud.net',
      cname: '',
      webName: '?????????',
      compName: '??????????????????????????????????????????',
      analyseTimes: '299',
    },
    {
      host: 'ins-77t1s7tr.ias.tencent-cloud.net',
      cname: '',
      webName: '?????????',
      compName: '??????????????????????????????????????????',
      analyseTimes: '288',
    },
    {
      host: 'sv6.map.qq.com',
      cname: 'ins-jj0lqomn.ias.tencent-cloud.net.',
      webName: '?????????',
      compName: '??????????????????????????????????????????',
      analyseTimes: '275',
    },
  ];

  constructor(private fb: FormBuilder, private modal: NzModalService) { }
  ngOnInit(): void {
    this.selectForm = this.fb.group({
      dateRange: [],
      granularity: ['oneDay']
    });
    this.search();
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }
  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  cancelClose(): void{
    this.allProvince = false;
  }
  okClose(): void{
    this.allProvince = false;
  }
  ifOk(): void{
    this.thisProvince = false;
  }
  ifCancel(): void{
    this.thisProvince = false;
  }
  compOk(): void{
    this.clickComp = false;
  }
  compCancel(): void{
    this.clickComp = false;
  }
  netflowOk(): void{
    this.clickNetflow = false;
  }
  netflowCancel(): void{
    this.clickNetflow = false;
  }
  ipOk(): void{
    this.clickIp = false;
    this.ipVisibel = false;
  }
  ipCancel(): void{
    this.clickIp = false;
    this.ipVisibel = false;
  }
  allFlowPieChart(): void {
    this.allFlowPieOption = {
      title: {
        text: '??????????????????',
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
          name: '????????????',
          type: 'pie',
          radius: '40%',
          data: [
            {value: 126.28, name: '????????????'},
            {value: 241.32, name: '????????????'},
            {value: 29.36, name: '????????????'},
            {value: 31.53, name: '????????????'},
            {value: 15.63, name: '????????????'},
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
    this.v4v6PieOption = {
      title: {
        text: 'V4V6????????????',
        left: 'center',
        subtext: '(Gbps)'
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
          name: '????????????',
          type: 'pie',
          radius: '50%',
          label: {
            show: true,
            formatter: '{b}: {d}%'
          },
          data: [
            {value: 1354.28, name: 'IPV6'},
            {value: 1634.32, name: 'IPV4'},
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
    this.allPieOption = {
      title: {
        text: '??????????????????',
        left: 'center',
        subtext: '(Gbps)'
      },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
          }
        },
        legend: {
          orient: 'vertical',
          left: 'right',
        },
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
          data: ['?????????']
        },
        series: [
          {
            name: '??????V4',
            type: 'bar',
            stack: 'total',
            emphasis: {
              focus: 'series'
            },
            data: [1449.31]
          },
          {
            name: '??????4G',
            type: 'bar',
            stack: 'total',
            emphasis: {
              focus: 'series'
            },
            data: [249.41]
          },
          {
            name: '??????V4',
            type: 'bar',
            stack: 'total',
            emphasis: {
              focus: 'series'
            },
            data: [145.34]
          },
          {
            name: '??????5G',
            type: 'bar',
            stack: 'total',
            emphasis: {
              focus: 'series'
            },
            data: [114.39]
          },
          {
            name: '??????V6',
            type: 'bar',
            stack: 'total',
            emphasis: {
              focus: 'series'
            },
            data: [0.884]
          },
          {
            name: 'WLAN',
            type: 'bar',
            stack: 'total',
            emphasis: {
              focus: 'series'
            },
            data: [0.691]
          }
        ]
      };
  }
  search(): void{
    this.customTypeBarCharts();
    this.netflowLineCharts();
    this.netflowStackedLineCharts();
    this.netflowSpeedInCharts();
    this.netflowSpeedOutCharts();
    this.netflowSpeedNationalCharts();
    this.alignTopCharts();
    this.alignTopBondsCharts();
    this.compNetflowLineCharts();
    this.compNetflowLineSevenCharts();
    this.allFlowLineChart();
    this.netflowTendCharts();
    this.allFlowPieChart();
  }
  showModal(): void {
    this.isVisible = true;
  }
  showAll(): void{
    this.allProvince = true;
  }
  showProvince(): void{
    this.thisProvince = true;
  }
  showClickComp(): void{
    this.clickComp = true;
  }
  showClickNetflow(): void{
    this.clickNetflow = true;
  }
  showClickIp(): void{
    this.clickIp = true;
  }
  customTypeBarCharts(): void{
    this.customTypeBarOption = {
      title: {
        text: '??????????????????(???)',
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
          name: '????????????',
          type: 'pie',
          radius: '50%',
          data: [
            {value: 898.538, name: '??????'},
            {value: 398.297, name: '??????'},
            {value: 1189.392, name: '??????'},
            {value: 249.812, name: 'WLAN'},
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
  netflowLineCharts(): void{
    this.netflowLineOption = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }]
    };
  }
  netflowStackedLineCharts(): void{
    this.netflowStackedLineOption = {
      title: {
        text: '?????????????????????'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['??????', '??????', '??????', 'WLAN', '??????']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['??????', '??????', '??????', '??????', '??????', '??????', '??????']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '??????',
          type: 'line',
          stack: '??????',
          data: [120, 132, 101, 134, 90, 234, 210]
        },
        {
          name: '??????',
          type: 'line',
          stack: '??????',
          data: [220, 182, 191, 234, 290, 328, 284]
        },
        {
          name: '??????',
          type: 'line',
          stack: '??????',
          data: [150, 232, 201, 154, 190, 362, 345]
        },
        {
          name: 'WLAN',
          type: 'line',
          stack: '??????',
          data: [320, 332, 301, 334, 390, 353, 325]
        },
        {
          name: '??????',
          type: 'line',
          stack: '??????',
          data: [810, 878, 794, 856, 960, 1277, 1164]
        }
      ]
    };
  }
  netflowSpeedInCharts(): void{
    this.netflowSpeedInBarOption = {
      title: {
        text: '????????????????????????',
        subtext: '?????? Gbps',
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
            { value: 356, name: '????????????' },
            { value: 304, name: '????????????' },
            { value: 62, name: '????????????' },
            { value: 54, name: '????????????' },
            { value: 5, name: '????????????' },
            { value: 13, name: '????????????'}
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
  netflowSpeedOutCharts(): void{
    this.netflowSpeedOutBarOption = {
      title: {
        text: '????????????????????????',
        subtext: '?????? Gbps',
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
            { value: 316, name: '????????????' },
            { value: 254, name: '????????????' },
            { value: 32, name: '????????????' },
            { value: 34, name: '????????????' },
            { value: 15, name: '????????????' },
            { value: 13, name: '????????????'}
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

  netflowSpeedNationalCharts(): void {
    this.netflowSpeedNationalBarOption = {
      title: {
        text: '????????????????????????',
        subtext: '?????? Gbps',
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
            { value: 296, name: '????????????' },
            { value: 344, name: '????????????' },
            { value: 72, name: '????????????' },
            { value: 56, name: '????????????' },
            { value: 12, name: '????????????' },
            { value: 23, name: '????????????'}
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

  alignTopCharts(): void {
    this.alignTopBarOption = {
      title: {
        text: '??????????????????(Gbps)',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // ??????????????????????????????????????????
          type: 'shadow'        // ??????????????????????????????'line' | 'shadow'
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
          data: ['??????', '??????', '??????', '??????', '??????', '??????', '??????', '??????', '??????', '??????'],
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
          name: '????????????',
          type: 'bar',
          barWidth: '60%',
          data: [2336.225, 2235.531, 2132.158, 2029.156, 1927.794, 1826.915, 1726.15, 1664.646, 1574.239, 1521.107]
        }
      ]
    };

    this.outNetAlignTopBarOption = {
      title: {
        text: '????????????TOP10????????????(Gbps)',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // ??????????????????????????????????????????
          type: 'shadow'        // ??????????????????????????????'line' | 'shadow'
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
          data: ['????????????', '????????????', '????????????', '????????????', '????????????', '????????????', '????????????', '????????????', '????????????', '????????????'],
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
          name: '????????????',
          type: 'bar',
          barWidth: '60%',
          data: [1846.214, 1756.644, 1691.225, 1649.432, 1631.234, 1573.324, 1556.9, 1476.505, 1424.116, 1324.121, 1221.153]
        }
      ]
    };

    this.outProvinceAlignTopBarOption = {
      title: {
        text: '????????????TOP10????????????(Gbps)',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // ??????????????????????????????????????????
          type: 'shadow'        // ??????????????????????????????'line' | 'shadow'
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
          data: ['??????', '??????', '??????', '??????', '??????', '??????', '??????', '??????', '??????', '??????'],
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
          name: '????????????',
          type: 'bar',
          barWidth: '60%',
          data: [1846.214, 1756.644, 1691.225, 1649.432, 1631.234, 1573.324, 1556.9, 1476.505, 1424.116, 1324.121, 1221.153]
        }
      ]
    };
  }

  alignTopBondsCharts(): void {
    this.alignTopBondsOption = {
      title: {
        text: '??????????????????(Gbps)',
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
          name: '????????????',
          type: 'pie',
          radius: '50%',
          data: [
            {value: 314, name: '??????'},
            {value: 243, name: '??????'},
            {value: 218, name: '??????'},
            {value: 264, name: '??????'},
            {value: 244, name: '??????'},
            {value: 318, name: '??????'},
            {value: 228, name: '??????'},
            {value: 324, name: '??????'},
            {value: 352, name: '??????'},
            {value: 357, name: '??????'}
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
    this.outNetAlignTopBondsOption = {
      title: {
        text: '?????????????????????????????????(Gbps)',
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
          name: '????????????',
          type: 'pie',
          radius: '50%',
          data: [
            {value: 2314.325, name: '??????'},
            {value: 2243.699, name: '??????'},
            {value: 698.371, name: '???????????????'},
            {value: 464.527, name: '??????'},
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
    this.outProvinceAlignTopBondsOption = {
      title: {
        text: '??????????????????????????????(Gbps)',
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
          name: '????????????',
          type: 'pie',
          radius: '50%',
          data: [
            {value: 2314.325, name: '??????'},
            {value: 2243.699, name: '??????'},
            {value: 698.371, name: 'WLAN'},
            {value: 464.527, name: '??????'},
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

  compNetflowLineCharts(): void {
    let base = +new Date(2021, 7, 15);
    const oneDay = 4000;
    const inData = [[base, Math.random() * 8]];

    for (let i = 1; i < 20000; i++) {
      const now = new Date(base += oneDay);
      inData.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        Math.abs(Math.round((Math.random() - 0.5) * 20 + inData[i - 1][1]))
      ]);
    }
    this.compNetflowLineOption = {
      tooltip: {
        trigger: 'axis',
        position(pt) {
          return [pt[0], '10%'];
        }
      },
      legend: {
        data: ['??????'],
        top: '8%'
      },
      title: {
        left: 'center',
        text: '????????????????????????Gbps???',
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
          name: '??????',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: inData
        },
      ]
    };
  }

  compNetflowLineSevenCharts(): void {
    let base = +new Date(2021, 7, 15);
    const oneDay = 20000;

    const data = [[base, Math.random() * 300]];

    for (let i = 1; i < 30000; i++) {
      const now = new Date(base += oneDay);
      data.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        Math.abs(Math.round((Math.random() - 0.5) * 20 + data[i - 1][1]))
      ]);
    }
    this.compNetflowLineSevenOption = {
      tooltip: {
        trigger: 'axis',
        position(pt) {
          return [pt[0], '10%'];
        }
      },
      title: {
        left: 'center',
        text: '7???????????????????????????Gbps???',
      },
      legend: {
        data: ['??????'],
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
          name: '????????????',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data
        }
      ]
    };
  }
  netflowTendCharts(): void {
    let base = +new Date(2021, 7, 15);
    const oneDay = 20000;
    const inData = [[base, Math.random() * 9]];
    const outData = [[base, Math.random() * 6]];
    const inPro = [[base, Math.random() * 2]];
    const out = [[base, Math.random() * 4]];
    const dx = [[base, Math.random() * 3.5]];
    const lt = [[base, Math.random() * 4.5]];
    const gj = [[base, Math.random() * 2]];
    const net = [[base, Math.random()]];
    const pro = [[base, Math.random()]];

    for (let i = 1; i < 3000; i++) {
      const now = new Date(base += oneDay);
      inData.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        Math.abs(Math.round((Math.random() - 0.5) * 20 + inData[i - 1][1]))
      ]);
      outData.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        Math.abs(Math.round((Math.random() - 0.5) * 20 + inData[i - 1][1])) * 0.43
      ]);
      inPro.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        Math.abs(Math.round((Math.random() - 0.5) * 20 + inData[i - 1][1])) * 0.22
      ]);
      out.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        Math.abs(Math.round((Math.random() - 0.5) * 20 + inData[i - 1][1])) * 0.35
      ]);
      dx.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        Math.abs(Math.round((Math.random() - 0.5) * 20 + inData[i - 1][1])) * 0.15
      ]);
      lt.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        Math.abs(Math.round((Math.random() - 0.5) * 20 + inData[i - 1][1])) * 0.14
      ]);
      gj.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        Math.abs(Math.round((Math.random() - 0.5) * 20 + inData[i - 1][1])) * 0.12
      ]);
      net.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        67.4
      ]);
      pro.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        93.6
      ]);
    }

    this.netflowTendOption = {
      tooltip: {
        trigger: 'axis',
        position(pt) {
          return [pt[0], '10%'];
        }
      },
      legend: {
        data: ['????????????', '????????????', '????????????', '????????????', '????????????', '????????????', '????????????', '?????????', '?????????'],
        top: '8%'
      },
      title: {
        left: 'center',
        text: '??????????????????????????????Gbps???',
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
      yAxis: [
        {
          type: 'value',
          boundaryGap: [0, '100%']
        },
        {
          type: 'value',
          max: 100,
          boundaryGap: [0, '100%']
        }
      ],
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
          name: '????????????',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: inData
        },
        {
          name: '????????????',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: outData
        },
        {
          name: '????????????',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: inPro
        },
        {
          name: '????????????',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: out
        },
        {
          name: '????????????',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: dx
        },
        {
          name: '????????????',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: lt
        },
        {
          name: '????????????',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: gj
        },
        {
          name: '?????????',
          type: 'line',
          symbol: 'none',
          yAxisIndex: 1,
          data: net
        },
        {
          name: '?????????',
          type: 'line',
          symbol: 'none',
          yAxisIndex: 1,
          data: pro
        }
      ]
    };
  }
  allFlowLineChart(): void {
    let base = +new Date(2021, 12, 15);
    const oneDay = 1000;
    const inData = [[base, Math.random() * 8]];
    const outData = [[base, Math.random() * 3]];
    const discernRate = [[base, 100]];
    const discernRateByType = [[base, 0]];
    const allSpeed = [[base, Math.random() * 3]];
    for (let i = 1; i < 10000; i++) {
      const now = new Date(base += oneDay);
      inData.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        Math.abs(Math.round((Math.random() - 0.5) * 520 + inData[i - 1][1]))
      ]);
      let number = Math.abs(Math.round((Math.random() - 0.5) * 120 + inData[i - 1][1])) * 1.5;
      if (number > 6000) {
        number = Math.abs(Math.round((Math.random() - 0.5) * 120 + inData[i - 1][1])) * 1.5 - inData[i - 1][1] + 2000;
      }
      outData.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        number
      ]);
      discernRate.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        100
      ]);
      discernRateByType.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        Math.round((Math.random()) * 10000) / 100
      ]);
      allSpeed.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        number + Math.round((Math.random()) * 100000) / 100
      ]);
    }

    this.netflowTendOfDayOption = {
      tooltip: {
        trigger: 'axis',
        position(pt) {
          return [pt[0], '10%'];
        }
      },
      legend: {
        data: ['????????????', '???????????????'],
        top: '8%'
      },
      title: {
        left: 'center',
        text: '?????????????????????',
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
      yAxis: [{
        name: 'Gbps',
        type: 'value',
        max: 10000,
        boundaryGap: [0, '100%']
      }, {
        name: '%',
        type: 'value',
        max: 100,
        boundaryGap: [0, '100%']
      }],
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
          name: '????????????',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: outData
        },
        {
          name: '???????????????',
          type: 'line',
          smooth: true,
          symbol: 'none',
          yAxisIndex: 1,
          data: discernRate
        }
      ]
    };

    this.netflowTendOfTypeOption = {
      tooltip: {
        trigger: 'axis',
        position(pt) {
          return [pt[0], '10%'];
        }
      },
      legend: {
        data: ['?????????', '????????????', '???????????????'],
        top: '8%'
      },
      title: {
        left: 'center',
        text: '?????????????????????',
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
      yAxis: [{
        name: 'Gbps',
        type: 'value',
        max: 10000,
        boundaryGap: [0, '100%']
      }],
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
          name: '?????????',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: allSpeed
        },
        {
          name: '????????????',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: outData
        },
        {
          name: '???????????????',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: discernRateByType
        }
      ]
    };
  }

  detailCancel(): void {
    this.visible = false;
  }

  detailOk(): void {
    this.visible = false;
  }

  showDetail(): void {
    this.visible = true;
  }

  ipDetailCancel(): void {
    this.ipDetailVidsible = false;
  }

  ipDetailOk(): void {
    this.ipDetailVidsible = false;
  }

  showIpDetail(): void {
    this.ipDetailVidsible = true;
  }

  downloadFile(data): void {
    // ???????????? xls
    const contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    // ???????????????csv
    const contentType2 = 'text/csv';
    const blob = new Blob([data], {type: contentType2});
    const url = window.URL.createObjectURL(blob);
    // ?????????????????????????????????
    // window.open(url);
    // ???????????????a??????????????????
    const a = document.createElement('a');
    const fileName = '20210526174243';
    a.href = url;
    // a.download = fileName;
    a.download = fileName + '.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  exportFile(): void {
    this.downloadFile(this.ipDetailOfData.toString());
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  showNetflowSummaryTable(): void {
    this.netflowSummaryVisible = true;
  }
  netflowSummaryOk(): void {
    this.netflowSummaryVisible = false;
  }

  netflowSummaryCancel(): void {
    this.netflowSummaryVisible = false;
  }
  showCustomTable(): void {
    this.customVisible = true;
  }

  customOk(): void {
    this.customVisible = false;
  }

  costomCancel(): void {
    this.customVisible = false;
  }

  showIpDetailTable(): void {
    this.ipDetailVidsible = true;
  }

  showIpAnalyseOk(): void {
    this.ipAnalyseVisible = true;
  }

  ipAnalyseOk(): void {
    this.ipAnalyseVisible = false;
  }

  ipAnalyseCancel(): void {
    this.ipAnalyseVisible = false;
  }

  showIpTable(): void {
    this.ipVisibel = true;
  }


  showCdn(): void {
    this.cdnVisible = true;
  }

  cdnCancel(): void {
    this.cdnVisible = false;
  }

  showCdnIp(): void {
    this.cdnIpVisible = true;
  }

  cdnIpCancel(): void {
    this.cdnIpVisible = false;
  }

  showCdnCname(): void {
    this.cdnCnameVisible = true;
  }

  cdnCnameCancel(): void {
    this.cdnCnameVisible = false;
  }

  showHost(): void {
    this.hostVisible = true;
  }

  hostCancel(): void {
    this.hostVisible = false;
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

  webCancel(): void {
    this.webVisible = false;
  }

  showWeb(): void {
    this.webVisible = true;
  }
}
