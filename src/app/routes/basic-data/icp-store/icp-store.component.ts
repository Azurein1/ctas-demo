import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icp-store',
  templateUrl: './icp-store.component.html',
  styleUrls: ['./icp-store.component.css']
})
export class IcpStoreComponent implements OnInit {
  addVisible = false;

  ipData = [
    {
      cname: 'ycxjtd.com',
      host: 'www.ycxjtd.com',
      icp: '延长县金土地农牧业有限责任公司',
      number: '陕ICP备15011767号-1',
      date: '2015/9/17',
    },{
      cname: 'pptv.com',
      host: 'www.pptv.com',
      icp: 'PP视频',
      number: '沪ICP备09010723号-6',
      date: '2021/7/16',
    },
    {
      cname: 'finkapp.cn',
      host: 'www.finkapp.cn',
      icp: '北京猩球互动网络科技有限公司',
      number: '京ICP备19054540号-3',
      date: '2020/12/22',
    },{
      cname: 'jsyxw.cn',
      host: 'www.jsyxw.cn',
      icp: '教师研修',
      number: '京ICP备06018303号-10',
      date: '2019/11/28',
    },{
      cname: '24m37.cn',
      host: 'www.24m37.cn',
      icp: '黑豆网',
      number: '桂ICP备19007529号-17',
      date: '2019/12/11',
    },
    {
      cname: 'a7cc.cn',
      host: 'www.a7cc.cn',
      icp: '傲气',
      number: '粤ICP备09192309号-1',
      date: '2009/11/3',
    },
    {
      cname: 'gds.name',
      host: 'www.gds.name',
      icp: 'GDS个人网',
      number: '粤ICP备16033460号-1',
      date: '2019/6/27',
    },{
      cname: 'ytkb888.cn',
      host: 'www.ytkb888.cn',
      icp: '艳泉博客',
      number: '黑ICP备19005963号-1',
      date: '2019/10/11',
    },{
      cname: 'cqkangdun.com',
      host: 'www.cqkangdun.com',
      icp: '重庆康盾医疗器有械有限公司',
      number: '渝ICP备11005332号-1',
      date: '2012/2/20',
    },
    {
      cname: 'dantsin.cn',
      host: 'www.dantsin.cn',
      icp: '北京丹青华瑞科贸有限责任公司',
      number: '京ICP备07001937号-2',
      date: '2020/11/4',
    },
    {
      cname: 'ycxjtd.com',
      host: 'www.ycxjtd.com',
      icp: '延长县金土地农牧业有限责任公司',
      number: '陕ICP备15011767号-1',
      date: '2015/9/17',
    },{
      cname: 'pptv.com',
      host: 'www.pptv.com',
      icp: 'PP视频',
      number: '沪ICP备09010723号-6',
      date: '2021/7/16',
    },
    {
      cname: 'finkapp.cn',
      host: 'www.finkapp.cn',
      icp: '北京猩球互动网络科技有限公司',
      number: '京ICP备19054540号-3',
      date: '2020/12/22',
    },{
      cname: 'jsyxw.cn',
      host: 'www.jsyxw.cn',
      icp: '教师研修',
      number: '京ICP备06018303号-10',
      date: '2019/11/28',
    },{
      cname: '24m37.cn',
      host: 'www.24m37.cn',
      icp: '黑豆网',
      number: '桂ICP备19007529号-17',
      date: '2019/12/11',
    },
    {
      cname: 'a7cc.cn',
      host: 'www.a7cc.cn',
      icp: '傲气',
      number: '粤ICP备09192309号-1',
      date: '2009/11/3',
    },
    {
      cname: 'gds.name',
      host: 'www.gds.name',
      icp: 'GDS个人网',
      number: '粤ICP备16033460号-1',
      date: '2019/6/27',
    },{
      cname: 'ytkb888.cn',
      host: 'www.ytkb888.cn',
      icp: '艳泉博客',
      number: '黑ICP备19005963号-1',
      date: '2019/10/11',
    },{
      cname: 'cqkangdun.com',
      host: 'www.cqkangdun.com',
      icp: '重庆康盾医疗器有械有限公司',
      number: '渝ICP备11005332号-1',
      date: '2012/2/20',
    },
    {
      cname: 'dantsin.cn',
      host: 'www.dantsin.cn',
      icp: '北京丹青华瑞科贸有限责任公司',
      number: '京ICP备07001937号-2',
      date: '2020/11/4',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getIpData(): void{
    this.ipData = [];
  }

  reset(): void {
    this.ipData = [];
  }

  showAdd(): void {
    this.addVisible = true;
  }

  addClose(): void {
    this.addVisible = false;
  }
}
