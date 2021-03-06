import { Component, OnInit } from '@angular/core';
import {NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder} from "ng-zorro-antd/table";
import {CompItem, ProvinceItem, SpeedItem} from "@routes/idc-netflow/custom-analyse/custom-analyse.component";

interface ColumnItem {
  name: string;
  sortOrder?: NzTableSortOrder | null;
  sortFn?: NzTableSortFn | null;
  listOfFilter?: NzTableFilterList;
  filterFn?: NzTableFilterFn | null;
  filterMultiple?: boolean;
  sortDirections?: NzTableSortOrder[];
}

interface SummaryNetflow {
  idc: string;
  total: number;
  inPro: number;
  outPro: number;
  national: number;
}

interface SummaryNetflowDetail {
  idc: string;
  average: number;
  maxSpeed: number;
}

interface TopItem {
  id: number;
  province: string;
  userType: string;
  netflow: number;
  speed: number;
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

interface CustomIcp {
  icpName: string;
  belong: string;
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

interface IpAnalyse {
  host: string;
  cname: string;
  webName: string;
  compName: string;
  analyseTimes: string;
}

interface Galery {
  date: string;
  total: string;
  inPro: string;
  outPro: string;
  outNet: string
}

@Component({
  selector: 'app-tencent',
  templateUrl: './tencent.component.html',
  styleUrls: ['./tencent.component.css']
})
export class TencentComponent implements OnInit {
  ipWidth = 1300;
  width = 1500;
  searchValue = '';
  cnameValue = '';
  visible = false;
  cnameVisible = false;
  customIcpVisible = false;
  netflowSummaryVisible = false;
  customVisible = false;
  ipDetailVidsible = false;
  ipAnalyseVisible = false;
  hostVisible = false;
  ipVisibel = false;
  cdnVisible = false;
  cdnIpVisible = false;
  cdnCnameVisible = false;
  alignTopBarOption: any;
  alignTopBondsOption: any;
  outNetTopBarOption: any;
  outNetTopBondsOption: any;
  netflowTendOption: any;
  netflowTendOfDayOption: any;
  allFlowLineOption: any;
  allFlowPieOption: any;
  v4v6PieOption: any;
  webVisible = false;

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
  hostDetailOfData = [
    {
      host: 'adashx.m.taobao.com',
      average: 8.9,
      maxSpeed: 25.3,
      high: '9.49/68.3%',
      low: '2.522/31.7%',
      click: '18,371,921'
    },
    {
      host: 'audid-api.taobao.com',
      average: 6.2,
      maxSpeed: 21.3,
      high: '8.24/56.6%',
      low: '3.048/43.4%',
      click: '16,461,612'
    },
    {
      host: 'h-adashx.ut.taobao.com',
      average: 4.9,
      maxSpeed: 15.3,
      high: '5.21/62.8%',
      low: '1.532/37.2%',
      click: '15,274,745'
    },
    {
      host: 'guide-acs.m.taobao.com',
      average: 4.9,
      maxSpeed: 15.3,
      high: '4.31/62.7%',
      low: '1.433/37.3%',
      click: '15,124,275'
    },
    {
      host: 'rhdc-acs.m.taobao.com',
      average: 4.9,
      maxSpeed: 15.3,
      high: '10.41/56.5%',
      low: '3.415/43.5%',
      click: '14,938,434'
    },
    {
      host: 'hybrid.miniapp.taobao.com',
      average: 4.9,
      maxSpeed: 15.3,
      high: '3.56/63.2%',
      low: '0.938/36.8%',
      click: '14,364,429'
    },
    {
      host: 'hybrid.miniapp.taobao.com',
      average: 4.9,
      maxSpeed: 15.3,
      high: '8.34/59.4%',
      low: '3.938/40.6%',
      click: '14,364,429'
    },
    {
      host: 'hybrid.miniapp.taobao.com',
      average: 4.9,
      maxSpeed: 15.3,
      high: '11.34/63.4%',
      low: '4.103/36.6%',
      click: '14,364,429'
    },
    {
      host: 'hybrid.miniapp.taobao.com',
      average: 4.9,
      maxSpeed: 15.3,
      high: '8.34/59.4%',
      low: '3.859/40.6%',
      click: '14,364,429'
    }
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
      average: '71.612/330.571',
      dxAvg: '33.431/132.414',
      ltAvg: '23.527/109.592',
      gjAvg: '3.251/11.452',
      qtAvg: '11.593/60.921',
    },
    {
      province: '??????',
      average: '71.612/330.571',
      dxAvg: '33.431/132.414',
      ltAvg: '23.527/109.592',
      gjAvg: '3.251/11.452',
      qtAvg: '11.593/60.921',
    },
    {
      province: '??????',
      average: '82.526/231.571',
      dxAvg: '31.593/96.419',
      ltAvg: '25.167/93.423',
      gjAvg: '5.268/16.252',
      qtAvg: '21.156/40.153',
    },
    {
      province: '?????????',
      average: '86.422/334.589',
      dxAvg: '35.422/121.948',
      ltAvg: '21.156/98.245',
      gjAvg: '1.415/9.361',
      qtAvg: '30.105/130.257',
    },
    {
      province: '??????',
      average: '56.827/152.343',
      dxAvg: '21.215/59.194',
      ltAvg: '13.492/39.378',
      gjAvg: '1.251/8.471',
      qtAvg: '16.593/36.161',
    },
    {
      province: '?????????',
      average: '55.042/312.049',
      dxAvg: '31.593/96.419',
      ltAvg: '25.167/93.423',
      gjAvg: '5.268/16.252',
      qtAvg: '21.156/40.153',
    },
    {
      province: '??????',
      average: '35.542/532.047',
      dxAvg: '31.593/96.419',
      ltAvg: '25.167/93.423',
      gjAvg: '5.268/16.252',
      qtAvg: '21.156/40.153',
    },
    {
      province: '??????',
      average: '54.959/225.434',
      dxAvg: '33.431/132.414',
      ltAvg: '23.527/109.592',
      gjAvg: '3.251/11.452',
      qtAvg: '11.593/60.921',
    },
    {
      province: '??????',
      average: '54.542/340.52',
      dxAvg: '35.422/121.948',
      ltAvg: '21.156/98.245',
      gjAvg: '1.415/9.361',
      qtAvg: '30.105/130.257',
    }
  ];
  summaryOfData: SummaryNetflow[] = [
    {
      idc: '??????????????????????????????',
      total: 1246.6,
      inPro: 37.8,
      outPro: 12.6,
      national: 7.6
    },
    {
      idc: '???????????????????????????????????????',
      total: 512.2,
      inPro: 15.6,
      outPro: 9.2,
      national: 3.2
    },
    {
      idc: '??????????????????????????????????????????',
      total: 345.8,
      inPro: 23.5,
      outPro: 18.5,
      national: 2
    },
    {
      idc: '???????????????????????????',
      total: 311.4,
      inPro: 16.3,
      outPro: 14.1,
      national: 1.6
    },
    {
      idc: '??????',
      total: 884.7,
      inPro: 29.1,
      outPro: 25.7,
      national: 15.2
    },
    {
      idc: '??????????????????????????????',
      total: 241.1,
      inPro: 13.3,
      outPro: 8.1,
      national: 1.6
    },
    {
      idc: '??????????????????????????????',
      total: 219.6,
      inPro: 15.7,
      outPro: 11.9,
      national: 6.3
    },
    {
      idc: '????????????',
      total: 178.4,
      inPro: 12.7,
      outPro: 11.9,
      national: 4.4
    },
    {
      idc: '?????????????????????????????????',
      total: 184.3,
      inPro: 13.7,
      outPro: 8.9,
      national: 3.8
    },
    {
      idc: '???????????????????????????????????????',
      total: 803.8,
      inPro: 35.7,
      outPro: 21.9,
      national: 11.4
    },
  ];
  summaryDetailOfData: SummaryNetflowDetail[] = [
    {
      idc: '??????????????????????????????',
      average: 232.1,
      maxSpeed: 512.2
    },
  ];
  flowOfColumns: ColumnItem[] = [
    {
      name: '??????',
      sortOrder: null,
      sortFn: (a: TopItem, b: TopItem) => a.id - b.id,
      sortDirections: null,
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
      name: '????????????(Gbps)',
      sortOrder: null,
      sortFn: (a: TopItem, b: TopItem) => a.netflow - b.netflow,
      sortDirections: null,
    },
    {
      name: '????????????(Gbps)',
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
      id: '-',
      province: '??????',
      userType: '??????',
      netflow: 140.4,
      speed: 43.5,
      v4: 40.6,
      v6: 16.1
    },
    {
      id: 1,
      province: '??????',
      userType: '??????',
      netflow: 6.4,
      speed: 3.5,
      v4: 3.9,
      v6: 2.4
    },
    {
      id: 2,
      province: '??????',
      userType: '??????',
      netflow: 7.1,
      speed: 2.4,
      v4: 3.1,
      v6: 2.1
    },
    {
      id: 3,
      province: '??????',
      userType: 'WLAN',
      netflow: 5.7,
      speed: 2.1,
      v4: 2.9,
      v6: 1.4
    },
    {
      id: 4,
      province: '??????',
      userType: '??????',
      netflow: 4.6,
      speed: 1.4,
      v4: 1.9,
      v6: 0.9
    },
    {
      id: 5,
      province: '??????',
      userType: '??????',
      netflow: 4.3,
      speed: 1.8,
      v4: 2.3,
      v6: 1.5
    },
    {
      id: 6,
      province: '??????',
      userType: '??????',
      netflow: 3.4,
      speed: 1.2,
      v4: 1.7,
      v6: 0.5
    },
    {
      id: 7,
      province: '??????',
      userType: '??????',
      netflow: 3.2,
      speed: 1.4,
      v4: 1.9,
      v6: 0.8
    },
    {
      id: 8,
      province: '??????',
      userType: '??????',
      netflow: 4.3,
      speed: 2.1,
      v4: 2.6,
      v6: 1.5
    },
    {
      id: 9,
      province: '??????',
      userType: 'WLAN',
      netflow: 3.7,
      speed: 1.2,
      v4: 1.6,
      v6: 0.9
    },
    {
      id: 10,
      province: '??????',
      userType: '??????',
      netflow: 2.4,
      speed: 1.6,
      v4: 1.9,
      v6: 1.4
    },
    {
      id: 11,
      province: '??????',
      userType: '??????',
      netflow: 4.5,
      speed: 5.7,
      v4: 3.9,
      v6: 2.4
    },
    {
      id: 12,
      province: '??????',
      userType: '??????',
      netflow: 4.2,
      speed: 5.4,
      v4: 3.9,
      v6: 2.4
    },
    {
      id: 13,
      province: '??????',
      userType: '??????',
      netflow: 3.8,
      speed: 4.7,
      v4: 3.9,
      v6: 2.4
    },
    {
      id: 14,
      province: '??????',
      userType: '??????',
      netflow: 3.6,
      speed: 4.6,
      v4: 3.9,
      v6: 2.4
    },
    {
      id: 15,
      province: '??????',
      userType: '??????',
      netflow: 3.4,
      speed: 3.6,
      v4: 3.9,
      v6: 2.4
    },
    {
      id: 16,
      province: '??????',
      userType: '??????',
      netflow: 3.4,
      speed: 3.6,
      v4: 3.9,
      v6: 2.4
    },
    {
      id: 17,
      province: '??????',
      userType: '??????',
      netflow: 3.4,
      speed: 3.6,
      v4: 3.9,
      v6: 2.4
    },
    {
      id: 18,
      province: '??????',
      userType: '??????',
      netflow: 3.4,
      speed: 3.6,
      v4: 3.9,
      v6: 2.4
    },
    {
      id: 19,
      province: '??????',
      userType: '??????',
      netflow: 3.4,
      speed: 3.6,
      v4: 3.9,
      v6: 2.4
    },
    {
      id: 20,
      province: '?????????',
      userType: '??????',
      netflow: 3.4,
      speed: 3.6,
      v4: 3.9,
      v6: 2.4
    },
    {
      id: 21,
      province: '??????',
      userType: '??????',
      netflow: 3.4,
      speed: 3.6,
      v4: 3.9,
      v6: 2.4
    },
    {
      id: 22,
      province: '??????',
      userType: '??????',
      netflow: 3.4,
      speed: 3.6,
      v4: 3.9,
      v6: 2.4
    },
    {
      id: 23,
      province: '??????',
      userType: '??????',
      netflow: 3.4,
      speed: 3.6,
      v4: 3.9,
      v6: 2.4
    },
    {
      id: 24,
      province: '??????',
      userType: '??????',
      netflow: 3.4,
      speed: 3.6,
      v4: 3.9,
      v6: 2.4
    },
    {
      id: 25,
      province: '??????',
      userType: '??????',
      netflow: 3.4,
      speed: 3.6,
      v4: 3.9,
      v6: 2.4
    },
    {
      id: 26,
      province: '?????????',
      userType: '??????',
      netflow: 3.4,
      speed: 3.6,
      v4: 3.9,
      v6: 2.4
    },
    {
      id: 27,
      province: '??????',
      userType: '??????',
      netflow: 3.4,
      speed: 3.6,
      v4: 3.9,
      v6: 2.4
    },
    {
      id: 28,
      province: '??????',
      userType: '??????',
      netflow: 3.4,
      speed: 3.6,
      v4: 3.9,
      v6: 2.4
    },
    {
      id: 29,
      province: '??????',
      userType: '??????',
      netflow: 3.4,
      speed: 3.6,
      v4: 3.9,
      v6: 2.4
    },
    {
      id: 30,
      province: '??????',
      userType: '??????',
      netflow: 3.4,
      speed: 3.6,
      v4: 3.9,
      v6: 2.4
    }
  ];
  outProTopflowOfColumns: ColumnItem[] = [
    {
      name: '??????',
      sortOrder: null,
      sortFn: (a: TopItem, b: TopItem) => a.id - b.id,
      sortDirections: null,
    },
    {
      name: '??????',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: TopItem, b: TopItem) => a.province.length - b.province.length,
      filterMultiple: false,
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
      name: '????????????',
      sortOrder: null,
      sortFn: (a: TopItem, b: TopItem) => a.userType.length - b.userType.length,
      sortDirections: null,
      filterMultiple: true,
      listOfFilter: [
        {text: '??????', value: '??????'},
        {text: '??????', value: '??????'},
        {text: '?????????', value: '?????????'},
        {text: '?????????', value: '?????????'},
        {text: '?????????', value: '?????????'},
        {text: '?????????', value: '?????????'},
      ],
      filterFn: (target: string[], item: TopItem) => {
        if (!target || target.length <= 0) {
          return true;
        }
        for (const value of target) {
          if (item.userType.includes(value)) {
            return true;
          }
        }
        return false;
      }
    },
    {
      name: '????????????(Gbps)',
      sortOrder: null,
      sortFn: (a: TopItem, b: TopItem) => a.netflow - b.netflow,
      sortDirections: null,
    },
    {
      name: '????????????(Gbps)',
      sortOrder: null,
      sortFn: (a: TopItem, b: TopItem) => a.speed - b.speed,
      sortDirections: null,
    },
    {
      name: 'IPV4??????(Gbps)',
      sortOrder: null,
    },
    {
      name: 'IPV6??????(Gbps)',
      sortOrder: null,
    }
  ];
  outProTopflowOfData = [
    {
      id: 1,
      province: '??????',
      userType: '??????',
      netflow: 23.4 * 0.3,
      speed: 32.5 * 0.3,
      v4: 7.3,
      v6: 5.4
    },
    {
      id: 2,
      province: '??????',
      userType: '??????',
      netflow: 17.1 * 0.3,
      speed: 7.4,
      v4: 6.2,
      v6: 2.4
    },
    {
      id: 3,
      province: '??????',
      userType: '?????????',
      netflow: 5.9,
      speed: 21.1 * 0.3,
      v4: 6.2,
      v6: 3.4
    },
    {
      id: 4,
      province: '??????',
      userType: '?????????',
      netflow: 8.8,
      speed: 15.6 * 0.7,
      v4: 8.9,
      v6: 5.4
    },
    {
      id: 5,
      province: '??????',
      userType: '?????????',
      netflow: 14.3 * 0.3,
      speed: 7.4,
      v4: 5.2,
      v6: 2.4
    },
    {
      id: 6,
      province: '??????',
      userType: '?????????',
      netflow: 7.9,
      speed: 14.2 * 0.7,
      v4: 8.3,
      v6: 4.5
    },
  ];
  customNetflowOfData: Custom[] = [
    {
      compName: '??????',
      total: '1.523/34.743',
      inPro: '1.475/34.657',
      outPro: '0.07/24.159',
      outNet: '0/0.002',
      high: '1.734/63.5%',
      low: '1.359/36.5%',
      inProRent: '97.05%',
      inNetRent: '100%',
    },
    {
      compName: '??????????????????-??????',
      total: '1.523/34.743',
      inPro: '1.475/34.657',
      outPro: '0.07/24.159',
      outNet: '0/0.002',
      high: '1.734/63.5%',
      low: '1.359/36.5%',
      inProRent: '97.05%',
      inNetRent: '100%',
    }
  ];
  customNetflowOfColumns: ColumnItem[] = [
    {
      name: 'IDC?????????',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: Custom, b: Custom) => a.compName.length - b.compName.length,
      filterMultiple: true,
      listOfFilter: [
        {text: '??????????????????-??????', value: '??????????????????-??????'}
      ],
      filterFn: (address: string, item: Custom) => item.compName.indexOf(address) !== -1
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
    },
    {
      name: 'IPV6??????(Gbps)/??????',
      sortOrder: null,
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
      name: '????????????',
      sortOrder: null,
    },
    {
      name: 'ICP??????',
      sortOrder: null,
    },
    {
      name: 'IP??????',
      sortOrder: null,
    },
    {
      name: 'CDN??????',
      sortOrder: null,
    }
  ];
  customNetflowIcpOfData = [
    {
      icpName: '??????',
      belong: '?????????????????????????????????',
      other: '??????',
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
      other: '??????',
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
      other: '??????',
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
      other: '??????',
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
      other: '??????',
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
      other: '????????????',
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
      other: '????????????',
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
      other: '?????????',
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
      other: '??????',
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
      other: '?????????',
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
      name: 'ICP??????',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: Custom, b: Custom) => a.compName.length - b.compName.length,
      filterMultiple: false,
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
    {
      name: '??????'
    },
    {
      name: '????????????/????????????',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.total.length - b.total.length,
      sortDirections: null,
    },
    {
      name: '????????????/????????????',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.inPro.length - b.inPro.length,
      sortDirections: null,
    },
    {
      name: '????????????/????????????',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.outPro.length - b.outPro.length,
      sortDirections: null,
    },
    {
      name: '????????????/????????????',
      sortOrder: null,
      sortFn: (a: Custom, b: Custom) => a.outNet.length - b.outNet.length,
      sortDirections: null,
    },
    {
      name: 'IPV4??????(Gbps)/??????',
      sortOrder: null,
    },
    {
      name: 'IPV6??????(Gbps)/??????',
      sortOrder: null,
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
      name: '??????'
    }
  ];
  icpDetailOfData: IcpDetail[] = [
    {
      ip: '113.30.142.188',
      total: 10977.864,
      average: 1.401,
      maxSpeed: 0.128,
    },
    {
      ip: '111.30.176.33',
      total: 3596.21,
      average: 0.042,
      maxSpeed: 2.182,
    },
    {
      ip: '111.30.176.34',
      total: 3584.368,
      average: 0.042,
      maxSpeed: 1.427,
    },
    {
      ip: '111.30.176.116',
      total: 3586.883,
      average: 0.042,
      maxSpeed: 1.961,
    },
    {
      ip: '111.30.176.32',
      total: 3601.62,
      average: 0.042,
      maxSpeed: 1.291,
    },
    {
      ip: '111.30.171.188',
      total: 3601.656,
      average: 0.042,
      maxSpeed: 1.98,
    },
    {
      ip: '111.30.176.30',
      total: 3595.411,
      average: 0.042,
      maxSpeed: 1.74,
    },
    {
      ip: '111.30.171.196',
      total: 3569.314,
      average: 0.041,
      maxSpeed: 1.959,
    },
    {
      ip: '111.30.175.111',
      total: 1906.889,
      average: 0.022,
      maxSpeed: 0.259,
    },
  ];
  ipDetailOfData = [
    {
      host: 'smid5.hy.qcloudcdn.com',
      cname: 'smid5.hy.qcloudcdn.com.cdn.dnsv1.com.;smid5.cdntip.com.',
      compName: '??????????????????????????????????????????',
      webName: '?????????cdn',
      clickTime: 2801,
    },
    {
      host: 'stsoc2ds.cache.qcloudcdn.com',
      cname: 'stsoc2ds.cache.qcloudcdn.com.cdn.dnsv1.com.;up.static2.stsocds.cdntip.com.;cdnmid.pdd.cdn.dnsv1.com.;smid5.cdntip.com.',
      compName: '??????????????????????????????????????????',
      webName: '?????????cdn',
      clickTime: 1350,
    },
    {
      host: 'stsoc2ds.hy.qcloudcdn.com',
      cname: 'stsoc2ds.hy.qcloudcdn.com.cdn.dnsv1.com.;up.static2.stsocds.cdntip.com.;cdnmid.pdd.cdn.dnsv1.com.;smid5.cdntip.com',
      compName: '??????????????????????????????????????????',
      webName: '?????????cdn',
      clickTime: 1237,
    },
    {
      host: 'smid5.cache.qcloudcdn.com',
      cname: 'smid5.cache.qcloudcdn.com.cdn.dnsv1.com.;smid5.cdntip.com.',
      compName: '??????????????????????????????????????????',
      webName: '?????????cdn',
      clickTime: 346,
    },
    {
      host: 'smid5.cdntip.com',
      cname: '',
      compName: '??????????????????????????????????????????',
      webName: '?????????cdn',
      clickTime: 93,
    }
  ];
  ipDetailOfDisplayData = [...this.ipDetailOfData];
  cnameDetailOfData: CnameDetail[] = [
    {
      cname: 'smid5.hy.qcloudcdn.com.cdn.dnsv1.com.;smid5.cdntip.com.',
      webName: '?????????CDN',
      compName: '??????????????????????????????????????????',
      clickTime: 2801,
    },
    {
      cname: 'stsoc2ds.cache.qcloudcdn.com.cdn.dnsv1.com.;up.static2.stsocds.cdntip.com.;cdnmid.pdd.cdn.dnsv1.com.;smid5.cdntip.com.',
      webName: '?????????CDN',
      compName: '??????????????????????????????????????????',
      clickTime: 1350,
    },
    {
      cname: 'stsoc2ds.hy.qcloudcdn.com.cdn.dnsv1.com.;up.static2.stsocds.cdntip.com.;cdnmid.pdd.cdn.dnsv1.com.;smid5.cdntip.com.',
      webName: '?????????CDN',
      compName: '??????????????????????????????????????????',
      clickTime: 1237,
    },
    {
      cname: 'smid5.cache.qcloudcdn.com.cdn.dnsv1.com.;smid5.cdntip.com.',
      webName: '?????????CDN',
      compName: '??????????????????????????????????????????',
      clickTime: 346,
    },
    {
      cname: 'smid5.cdntip.com.',
      webName: '?????????CDN',
      compName: '??????????????????????????????????????????',
      clickTime: 51,
    },
    {
      cname: 'smid5.cdntip.com.',
      webName: '?????????CDN',
      compName: '??????????????????????????????????????????',
      clickTime: 39,
    }
  ];
  cnameDetailOfDisplayData = [...this.cnameDetailOfData];
  customNetflowIpOfData: CustomIp[] = [
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
      filterMultiple: false,
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
    },
    {
      name: '????????????/????????????',
      sortOrder: null,
      sortFn: (a: CustomIp, b: CustomIp) => a.inPro.length - b.inPro.length,
      sortDirections: null,
    },
    {
      name: '????????????/????????????',
      sortOrder: null,
      sortFn: (a: CustomIp, b: CustomIp) => a.outPro.length - b.outPro.length,
      sortDirections: null,
    },
    {
      name: '????????????/????????????',
      sortOrder: null,
      sortFn: (a: CustomIp, b: CustomIp) => a.outNet.length - b.outNet.length,
      sortDirections: null,
    },
    {
      name: '?????????',
      sortOrder: null,
      sortFn: (a: CustomIp, b: CustomIp) => a.inProRent.length - b.inProRent.length,
      sortDirections: null,
    },
    {
      name: '?????????',
      sortOrder: null,
      sortFn: (a: CustomIp, b: CustomIp) => a.inNetRent.length - b.inNetRent.length,
      sortDirections: null,
    },
    {
      name: '????????????',
      sortOrder: null,
      sortFn: (a: CustomIp, b: CustomIp) => a.percent.length - b.percent.length,
      sortDirections: null,
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
  galeryOfData = [
    {
      date: '2021-12-15',
      proAvg: '141.525/526.288',
      outAvg: '515.139/1841.382',
      netAvg: '1.429/27.060',
      net: '59.%',
      pro: '90.5%',
      v4: '284.165/144.781',
    },
    {
      date: '2021-12-14',
      proAvg: '105.567/512.263',
      outAvg: '405.612/1931.5623',
      netAvg: '0.617/20.556',
      net: '64.4%',
      pro: '91.6%',
      v4: '243.748/147.532',
    },
    {
      date: '2021-12-13',
      proAvg: '120.519/582.359',
      outAvg: '515.329/1956.863',
      netAvg: '1.512/26.406',
      net: '59%',
      pro: '93.6%',
      v4: '224.322/115.932',
    },
    {
      date: '2021-07-12',
      proAvg: '124.151/592.359',
      outAvg: '501.625/2008.636',
      netAvg: '0.925/266.450',
      net: '61.6%',
      pro: '91.6%',
      v4: '243.864/142.108',
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

  constructor() {
  }

  ngOnInit(): void {
    this.search();
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
    this.netflowSpeedInCharts();
    this.netflowSpeedOutCharts();
    this.outNet();
  }

  exportFile(): void {
    this.downloadFile(this.ipDetailOfData.toString());
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

  search(): void {
    this.alignTopCharts();
    this.alignTopBondsCharts();
    this.outNetTopBondsCharts();
    this.outNetTopCharts();
    this.netflowTendCharts();
    this.allFlowLineChart();
    this.allFlowPieChart();
    this.allFlowLineChart2();
    this.visible = false;
    this.ipDetailOfDisplayData = this.ipDetailOfData.filter((item: IpDetail) => item.host.indexOf(this.searchValue) !== -1);
    this.cnameDetailOfDisplayData = this.cnameDetailOfData.filter((item: CnameDetail) => item.cname.indexOf(this.cnameValue) !== -1);
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

  showCustomIcpTable(): void {
    this.customIcpVisible = true;
  }

  customIcpOk(): void {
    this.customIcpVisible = false;
  }

  customIcpCancel(): void {
    this.customIcpVisible = false;
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

  ipDetailOk(): void {
    this.ipDetailVidsible = false;
  }

  ipDetailCancel(): void {
    this.ipDetailVidsible = false;
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

  ipOk(): void {
    this.ipVisibel = false;
  }

  ipCancel(): void {
    this.ipVisibel = false;
  }

  alignTopCharts(): void {
    this.alignTopBarOption = {
      title: {
        text: '????????????TOP????????????(Gbps)',
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
          },
          axisLabel: { interval: 0, rotate: 30 }
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
          data: [365, 354, 325, 296, 274, 269, 265, 246, 240, 217]
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
            {value: 325, name: '??????'},
            {value: 265, name: '??????'},
            {value: 274, name: '??????'},
            {value: 240, name: '??????'},
            {value: 246, name: '??????'},
            {value: 269, name: '??????'},
            {value: 217, name: '??????'},
            {value: 296, name: '??????'},
            {value: 365, name: '??????'},
            {value: 354, name: '??????'}
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

  outNetTopCharts(): void {
    this.outNetTopBarOption = {
      title: {
        text: '??????????????????(GB)',
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
          data: ['??????', '??????', '?????????', '?????????', '?????????', '?????????'],
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
          data: [192, 184, 174, 157, 147, 146]
        }
      ]
    };
  }

  outNetTopBondsCharts(): void {
    this.outNetTopBondsOption = {
      title: {
        text: '??????????????????(GB)',
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
            {value: 157, name: '??????'},
            {value: 123, name: '??????'},
            {value: 130, name: '??????'},
            {value: 146, name: '??????'},
            {value: 118, name: '??????'},
            {value: 134, name: '??????'},
            {value: 147, name: '??????'},
            {value: 184, name: '??????'},
            {value: 192, name: '??????'},
            {value: 174, name: '??????'}
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
  // netflowTendCharts(): void {
  //   let base = +new Date(2021, 7, 15);
  //   const oneDay = 20000;
  //   const inData = [[base, Math.random() * 8]];
  //   const outData = [[base, Math.random() * 5]];
  //
  //   for (let i = 1; i < 30000; i++) {
  //     const now = new Date(base += oneDay);
  //     inData.push([
  //       // @ts-ignore
  //       [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
  //       Math.abs(Math.round((Math.random() - 0.5) * 20 + inData[i - 1][1]))
  //     ]);
  //     outData.push([
  //       // @ts-ignore
  //       [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
  //       Math.abs(Math.round((Math.random() - 0.5) * 20 + inData[i - 1][1])) / 2
  //     ]);
  //   }
  //
  //   this.netflowTendOption = {
  //     tooltip: {
  //       trigger: 'axis',
  //       position(pt) {
  //         return [pt[0], '10%'];
  //       }
  //     },
  //     legend: {
  //       data: ['????????????', '????????????'],
  //       top: '8%'
  //     },
  //     title: {
  //       left: 'center',
  //       text: '??????????????????????????????Gbps???',
  //     },
  //     toolbox: {
  //       feature: {
  //         dataZoom: {
  //           yAxisIndex: 'none'
  //         },
  //         restore: {},
  //         saveAsImage: {}
  //       }
  //     },
  //     xAxis: {
  //       type: 'time',
  //       boundaryGap: false
  //     },
  //     yAxis: {
  //       type: 'value',
  //       boundaryGap: [0, '100%']
  //     },
  //     dataZoom: [{
  //       type: 'inside',
  //       start: 0,
  //       end: 20
  //     }, {
  //       start: 0,
  //       end: 20
  //     }],
  //     series: [
  //       {
  //         name: '????????????',
  //         type: 'line',
  //         smooth: true,
  //         symbol: 'none',
  //         areaStyle: {},
  //         data: inData
  //       },
  //       {
  //         name: '????????????',
  //         type: 'line',
  //         smooth: true,
  //         symbol: 'none',
  //         areaStyle: {},
  //         data: outData
  //       }
  //     ]
  //   };
  // }

  allFlowLineChart(): void {
    let base = +new Date(2021, 5, 3);
    const oneDay = 1000;
    const inData = [[base, Math.random() * 8]];
    const outData = [[base, Math.random() * 5]];

    for (let i = 1; i < 10000; i++) {
      const now = new Date(base += oneDay);
      inData.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        Math.abs(Math.round((Math.random() - 0.5) * 20 + inData[i - 1][1]))
      ]);
      outData.push([
        // @ts-ignore
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        Math.abs(Math.round((Math.random() - 0.5) * 20 + inData[i - 1][1])) / 2
      ]);
    }

    this.allFlowLineOption = {
      tooltip: {
        trigger: 'axis',
        position(pt) {
          return [pt[0], '10%'];
        }
      },
      legend: {
        data: ['????????????', '????????????'],
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
        }
      ]
    };
  }

  allFlowLineChart2(): void {
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
          radius: '50%',
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
  }

  reset(): void {
    this.cnameValue = '';
    this.searchValue = '';
    this.search();
  }
  netflowSpeedOfColumns = [
    {
      name: '????????????',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: SpeedItem, b: SpeedItem) => a.userType.length - b.userType.length,
      filterMultiple: false,
      listOfFilter: [
        {text: '??????', value: '??????'},
        {text: '??????', value: '??????'},
        {text: 'WLAN', value: 'WLAN'},
        {text: '??????', value: '??????'},
      ],
      filterFn: (address: string, item: SpeedItem) => item.userType.indexOf(address) !== -1
    },
    {
      name: '????????????/????????????(Gbps)',
      sortOrder: null,
      sortFn: (a: SpeedItem, b: SpeedItem) => a.total.length - b.total.length,
      sortDirections: null,
      filterMultiple: true,
      listOfFilter: null,
      filterFn: null
    },
    {
      name: '????????????(Gbps)',
      sortOrder: null,
      sortFn: (a: SpeedItem, b: SpeedItem) => a.inProvince.length - b.inProvince.length,
      sortDirections: null,
      filterMultiple: true,
      listOfFilter: null,
      filterFn: null
    },
    {
      name: '????????????(Gbps)',
      sortOrder: null,
      sortFn: (a: SpeedItem, b: SpeedItem) => a.outProvince.length - b.outProvince.length,
      sortDirections: null,
      listOfFilter: null,
      filterFn: null,
      filterMultiple: true
    },
    {
      name: '????????????(Gbps)',
      sortOrder: null,
      sortFn: (a: SpeedItem, b: SpeedItem) => a.international.length - b.international.length,
      sortDirections: null,
      filterMultiple: false,
      listOfFilter: null,
      filterFn: null
    },
    {
      name: 'IPV4??????(Gbps)'
    },
    {
      name: 'IPV6??????(Gbps)'
    },
    {
      name: '??????'
    }
  ];
  netflowSpeedListOfData = [
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
  netflowSpeedInBarOption: any;
  allPieOption: any;
  netflowSpeedInCharts(): void {
    this.netflowSpeedInBarOption = {
      title: {
        text: '??????????????????????????????(Gbps)',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: '????????????',
          type: 'pie',
          radius: ['20%', '50%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '20',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            {value: 1405.08, name: '??????'},
            {value: 925.44, name: '??????'},
            {value: 770.76, name: '??????'},
            {value: 681.12, name: 'WLAN'},
          ]
        },
        {
          name: '????????????',
          type: 'pie',
          radius: ['60%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '20',
              fontWeight: 'bold'
            }
          },
          data: [
            {value: 3782.4, name: '??????'},
          ]
        }
      ]
    };
  }
  allProvince = false;
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
  allProvinceOfColumns: ColumnItem[] = [
    {
      name: '??????',
      sortOrder: null,
      sortFn: (a: ProvinceItem, b: ProvinceItem) => a.id - b.id,
      sortDirections: null,
      filterMultiple: true,
      listOfFilter: null,
      filterFn: null
    },
    {
      name: '????????????',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: ProvinceItem, b: ProvinceItem) => a.userType.length - b.userType.length,
      filterMultiple: false,
      listOfFilter: [
        {text: '??????', value: '??????'},
        {text: '??????', value: '??????'},
        {text: 'WLAN', value: 'WLAN'},
        {text: '??????', value: '??????'},
      ],
      filterFn: (address: string, item: ProvinceItem) => item.userType.indexOf(address) !== -1
    },
    {
      name: '??????',
      sortOrder: null,
      sortFn: (a: ProvinceItem, b: ProvinceItem) => a.province.length - b.province.length,
      sortDirections: null,
      filterMultiple: true,
      listOfFilter: null,
      filterFn: null
    },
    {
      name: '?????????',
      sortOrder: null,
      sortFn: (a: ProvinceItem, b: ProvinceItem) => a.operator.length - b.operator.length,
      sortDirections: null,
      filterMultiple: true,
      listOfFilter: null,
      filterFn: null
    },
    {
      name: '????????????(Gbps)',
      sortOrder: null,
      sortFn: (a: ProvinceItem, b: ProvinceItem) => a.average.length - b.average.length,
      sortDirections: null,
      filterMultiple: true,
      listOfFilter: null,
      filterFn: null
    },
    {
      name: '????????????(Gbps)',
      sortOrder: null,
      sortFn: (a: ProvinceItem, b: ProvinceItem) => a.maxSpeed.length - b.maxSpeed.length,
      sortDirections: null,
      listOfFilter: null,
      filterFn: null,
      filterMultiple: true
    },
  ];
  showAll(): void {
    this.allProvince = true;
  }
  netflowSpeedOutBarOption: any;
  netflowSpeedOutCharts(): void {
    this.netflowSpeedOutBarOption = {
      title: {
        text: '????????????????????????(Gbps)',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: '????????????',
          type: 'pie',
          radius: ['20%', '50%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '20',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            {value: 1216.196, name: '??????'},
            {value: 1113.824, name: '??????'},
            {value: 954.308, name: '??????'},
            {value: 1236.472, name: 'WLAN'},
          ]
        },
        {
          name: '????????????',
          type: 'pie',
          radius: ['60%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '20',
              fontWeight: 'bold'
            }
          },
          data: [
            {value: 4621.456, name: '??????'},
          ]
        }
      ]
    };
  }
  cancelClose(): void {
    this.allProvince = false;
  }

  okClose(): void {
    this.allProvince = false;
  }
  thisProvince = false;
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
  showProvince(): void {
    this.thisProvince = true;
  }

  ifOk(): void {
    this.thisProvince = false;
  }

  ifCancel(): void {
    this.thisProvince = false;
  }

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
  outNetAlignTopBarOption: any;
  outNetAlignTopBondsOption: any;

  outNet():void{
    this.outNetAlignTopBarOption = {
      title: {
        text: '????????????TOP????????????(Gbps)',
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
  }
  detailVisible = false;
  showDetail(): void {
    this.visible = true;
  }
  detailCancel(): void {
    this.visible = false;
  }

  detailOk(): void {
    this.visible = false;
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

  webCancel(): void {
    this.webVisible = false;
  }

  showWeb(): void {
    this.webVisible = true;
  }
}
