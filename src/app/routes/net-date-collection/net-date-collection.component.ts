import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-net-date-collection',
  templateUrl: './net-date-collection.component.html',
  styleUrls: ['./net-date-collection.component.css']
})
export class NetDateCollectionComponent implements OnInit {

  sysDataList: any[];
  sysNzLoading: boolean = false;
  confDataList: any[];
  dataList: any[];
  confNzLoading: boolean = false;
  searchValue = '';
  visible = false;

  confFormTitle = '';
  saveOrUpdateConfForm: FormGroup;
  confModalVisible = false;
  confModalOkLoading = false;
  editConfCache: { [key: string]: { edit: boolean; data: any } } = {};

  editCache: { [key: string]: { edit: boolean; add?: boolean, data: any } } = {};
  allChecked = false;
  indeterminate = false;
  setOfCheckedId = new Set<number>();
  selectForm!: FormGroup;
  dataCollectionTable: any[] = [];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.selectForm = this.fb.group({
      dateRange: [],
      granularity: ['oneDay'],
      equipName: [''],
      firmId: [''],
      equipTypeId: [''],
    });
    this.saveOrUpdateConfForm = this.fb.group({
      id: [],
      equipName: ['', Validators.required],
      ipAddress: ['', Validators.required],
      firmId: ['', Validators.required],
      equipTypeId: ['', Validators.required],
      routerSampling: ['', Validators.required],
      bgp: ['', Validators.required],
      snmp: ['', Validators.required],
      bgpPeer: ['', Validators.required],
      ipVersion: ['', Validators.required],
      icp: ['', Validators.required],
    });

    this.dataList = [
      {
        id: 1,
        equipName: 'S5700',
        ipAddress: '177.132.1.2',
        firmName: '华为',
        equipTypeName: 'Netstream',
        ipVersion: 'IPV4，IPV6',
        firmId: 1,
        equipTypeId: 3,
        routerSampling: '1:1',
        bgp: 'BGPV4，BGPv6',
        as4Byte: '支持',
        snmp: 'SNMPv3',
        bgpPeer: 'peer 10.1.1.1 as-number 100',
        icp: '京ICP备20********'
      }, {
        id: 2,
        equipName: 'Cisco7200',
        ipAddress: '157.2.123.12',
        firmId: 3,
        equipTypeId: 0,
        ipVersion: 'IPV4',
        firmName: 'Cisco',
        equipTypeName: 'NetFlow',
        routerSampling: '100:1',
        bgp: 'BGPV4，BGPv6',
        as4Byte: '支持',
        snmp: 'SNMPv3',
        bgpPeer: 'peer 10.1.1.1 as-number 100',
        icp: '沪ICP备20********'
      }, {
        id: 3,
        equipName: 'Juniper353',
        ipAddress: '176.129.111.12',
        firmName: 'Juniper',
        equipTypeName: 'cflow',
        ipVersion: 'IPV4，IPV6',
        firmId: 4,
        equipTypeId: 1,
        routerSampling: '50:1',
        bgp: 'BGPV4，BGPv6',
        as4Byte: '支持',
        snmp: 'SNMPv3',
        bgpPeer: 'peer 10.1.1.1 as-number 100',
        icp: '沪ICP备20********'
      }, {
        id: 4,
        equipName: 'NE40',
        ipAddress: '177.122.23.32',
        firmName: '华为',
        equipTypeName: 'Netstream',
        ipVersion: 'IPV4',
        firmId: 1,
        equipTypeId: 3,
        routerSampling: '500:1',
        bgp: 'BGPV4，BGPv6',
        as4Byte: '支持',
        snmp: 'SNMPv3',
        bgpPeer: 'peer 10.1.1.1 as-number 100',
        icp: '京ICP备20********'
      }
    ];
    this.confDataList = this.dataList;

    this.sysDataList = [
      {
        id: 1,
        serverName: '内容流量分析系统服务器-网络数据采集1',
        hardDisk: '2TB',
        memory: '16GB',
      },
      {
        id: 2,
        serverName: '内容流量分析系统服务器-网络数据采集2',
        hardDisk: '2TB',
        memory: '16GB',
      },
      {
        id: 3,
        serverName: '内容流量分析系统服务器-数据处理',
        hardDisk: '2TB',
        memory: '16GB',
      }
    ];
    this.updateEditCache();
    this.updateConfEditCache();
    // tslint:disable-next-line:max-line-length
    const routing = ['117.187.27.160' , '117.187.27.172', '117.187.27.196' , '117.187.27.236', '138.35.77.5' , '138.37.0.23' , '138.44.1.37' , '138.44.16.85' , '138.46.0.0', '168.141.0.45' , '168.144.0.125' , '168.145.0.246' , '168.153.0.6', '185.32.44.95' , '185.32.52.30' , '185.32.66.43' , '185.32.68.157', '154.127.48.125' , '154.127.112.154', '154.68.192.111' , '154.70.96.23' , '154.70.136.53'];
    const host = ['dns.weixin.qq.com', 'www.baidu.com', 'www.taobao.com', 'dig.bdurl.net', 'www.jd.com', 'th.pinduoduo.com', 'aps.amap.com', 'btrace.qq.com', 'query.hicloud.com', 'ts.qq.com', 'www.toutiao.com', 'loc.map.baidu.com', 'www.pinduoduo.com', 'www.iqiyi.com', 'www.douyin.com', 'oth.eve.mdt.qq.com', 'metrics1.data.hicloud.com', 'www.mi.com', 'cgicol.amap.com', 'tx2.a.yximgs.com', 'pull-rtmp-l11-source.douyincdn.com', 'pull-rtmp-l11-cny.douyincdn.com', 'pull-rtmp-l6.douyincdn.com', 'ali2.a.yximgs.com'];
    for (let i = 0; i < 20; i++){
      this.dataCollectionTable = [
        ...this.dataCollectionTable,
        {
          id: i + 1,
          routing: routing[i],
          port: '443',
          host: host[i],
          validity: Math.floor(Math.random() * 5) + '年' + Math.floor(Math.random() * 12) + '月' + Math.floor(Math.random() * 365) + '日',
        }
      ];
    }
  }

  exportFile(): void {
    this.downloadFile(this.confDataList.toString());
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

  searchA(): void{
    this.visible = false;
    this.dataCollectionTable = this.dataCollectionTable.filter((item: any) => item.name.indexOf(this.searchValue) !== -1);
  }

  search(): void {
    this.confDataList = this.dataList;
    let rawValue = this.selectForm.getRawValue();
    console.log(rawValue)
    this.confDataList = this.confDataList.filter(item => {
      if (rawValue.equipName && rawValue.equipTypeId && rawValue.firmId) {
        return item.equipTypeId === rawValue.equipTypeId && item.firmId === rawValue.firmId && item.equipName.indexOf(rawValue.equipName) != -1;
      } else if (rawValue.equipName && rawValue.equipTypeId) {
        return item.equipTypeId === rawValue.equipTypeId && item.equipName.indexOf(rawValue.equipName) != -1;
      } else if (rawValue.equipName && rawValue.firmId) {
        return item.equipName.indexOf(rawValue.equipName) != -1 && item.firmId === rawValue.firmId;
      } else if (rawValue.equipTypeId && rawValue.firmId) {
        return item.equipTypeId === rawValue.equipTypeId && item.firmId === rawValue.firmId;
      } else if (rawValue.equipName) {
        return item.equipName.indexOf(rawValue.equipName) != -1;
      } else if (rawValue.equipTypeId) {
        return item.equipTypeId === rawValue.equipTypeId;
      } else if (rawValue.firmId) {
        return item.firmId === rawValue.firmId;
      }
      return true;
    })

  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  openConfModal(id?: any): void {
    this.saveOrUpdateConfForm.reset();
    this.confModalVisible = true;
    if (id) {
      this.confFormTitle = '编辑';
      this.saveOrUpdateConfForm.patchValue(this.editConfCache[id].data);
    } else {
      this.confFormTitle = '添加';
    }
  }

  saveOrUpdateConf(): void {
    this.confModalVisible = false;
  }

  hideConfModal(): void {
    this.confModalVisible = false;
  }

  selectFirm(e: any): void {

  }

  updateConfEditCache(): void {
    this.confDataList.forEach(item => {
      this.editConfCache[item.id] = {
        edit: false,
        data: {...item}
      };
    });
  }


  deleteConf(id?: number): void {
    this.confDataList = this.confDataList.filter(value => value.id !== id);
  }

  startEdit(id?: number): void {
    if (!id) {
      const newId = this.sysDataList.length + 1;
      this.editCache[newId] = {
        edit: true,
        data: {}
      };
      this.sysDataList = [...this.sysDataList, {id: newId, name: null, code: null, desc: null}];
    } else {
      this.editCache[id].edit = true;
    }
  }

  saveEdit(id: number): void {
    const index = this.sysDataList.findIndex(item => item.id === id);
    Object.assign(this.sysDataList[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }

  cancelEdit(id: number): void {
    if (this.editCache[id].add) {
      this.sysDataList = this.sysDataList.filter(value => value.id !== id);
    } else {
      const index = this.sysDataList.findIndex(item => item.id === id);
      this.editCache[id] = {
        data: {...this.sysDataList[index]},
        edit: false
      };
    }
  }

  updateEditCache(): void {
    this.sysDataList.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: {...item}
      };
    });
  }

  deleteSys(id?: number): void {
    if (id) {
      this.sysDataList = this.sysDataList.filter(value => value.id !== id);
    } else {
      let ids = [];
      this.setOfCheckedId.forEach(value => ids = [...ids, value]);
      ids.forEach(value => {
        this.sysDataList = this.sysDataList.filter(v => v.id !== value);
      });
    }
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.sysDataList.filter(({disabled}) => !disabled);
    this.allChecked = listOfEnabledData.every(({id}) => this.setOfCheckedId.has(id));
    this.indeterminate = listOfEnabledData.some(({id}) => this.setOfCheckedId.has(id)) && !this.allChecked;
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.sysDataList.filter(({disabled}) => !disabled).forEach(({id}) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }

}
