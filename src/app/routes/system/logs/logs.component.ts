import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  searchValue = '';
  visible = false;
  listOfData: any[] = [
    {
      userName: 'admin',
      role: '超级管理员',
      loginInTime: '2021-5-24 14:43:23',
      isSuccess: 'true',
      detail: '详情',
    },
    {
      userName: 'admin',
      role: '超级管理员',
      loginInTime: '2021-5-24 14:51:33',
      isSuccess: 'true',
      detail: '详情',
    },
    {
      userName: 'admin',
      role: '超级管理员',
      loginInTime: '2021-5-24 17:25:12',
      isSuccess: 'true',
      detail: '详情',
    },
    {
      userName: 'ceshi',
      role: '超级管理员',
      loginInTime: '2021-5-25 10:01:47',
      isSuccess: 'false',
      detail: '详情',
    },
    {
      userName: 'ceshi',
      role: '超级管理员',
      loginInTime: '2021-5-25 10:02:51',
      isSuccess: 'true',
      detail: '详情',
    },
    {
      userName: 'ceshi',
      role: '超级管理员',
      loginInTime: '2021-5-25 10:35:35',
      isSuccess: 'true',
      detail: '详情',
    },
    {
      userName: 'ceshi',
      role: '超级管理员',
      loginInTime: '2021-5-25 10:52:47',
      isSuccess: 'true',
      detail: '详情',
    },
    {
      userName: 'ceshi',
      role: '超级管理员',
      loginInTime: '2021-5-25 11:21:23',
      isSuccess: 'true',
      detail: '详情',
    },
    {
      userName: 'ceshi',
      role: '超级管理员',
      loginInTime: '2021-5-25 11:23:45',
      isSuccess: 'true',
      detail: '详情',
    },
    {
      userName: 'ceshi',
      role: '超级管理员',
      loginInTime: '2021-5-25 11:34:53',
      isSuccess: 'true',
      detail: '详情',
    },
    {
      userName: 'ceshi',
      role: '超级管理员',
      loginInTime: '2021-5-25 11:46:17',
      isSuccess: 'true',
      detail: '详情',
    },
    {
      userName: 'ceshi',
      role: '超级管理员',
      loginInTime: '2021-5-25 12:01:51',
      isSuccess: 'true',
      detail: '详情',
    },
    {
      userName: 'ceshi',
      role: '超级管理员',
      loginInTime: '2021-5-25 14:03:12',
      isSuccess: 'true',
      detail: '详情',
    },
    {
      userName: 'ceshi',
      role: '超级管理员',
      loginInTime: '2021-5-25 14:21:17',
      isSuccess: 'true',
      detail: '详情',
    },
    {
      userName: 'ceshi',
      role: '超级管理员',
      loginInTime: '2021-5-25 14:52:33',
      isSuccess: 'true',
      detail: '详情',
    },
  ];
  listOfDisplayData = [...this.listOfData];

  constructor() { }

  ngOnInit(): void {
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: any) => item.name.indexOf(this.searchValue) !== -1);
  }
}
