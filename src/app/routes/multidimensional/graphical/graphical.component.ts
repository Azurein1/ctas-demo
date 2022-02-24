import {Component, OnInit, TemplateRef} from '@angular/core';
import {NzNotificationService} from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-graphical',
  templateUrl: './graphical.component.html',
  styleUrls: ['./graphical.component.css']
})
export class GraphicalComponent implements OnInit {

  prep?: string;
  values?: string;
  actionList = [
    { label: '新增', value: 'insert', sql: 'insert into' },
    { label: '删除', value: 'delete', sql: 'delete' },
    { label: '查询', value: 'select', sql: 'select' },
    { label: '更新', value: 'update', sql: 'update'}
  ];
  selectedValue = { label: '', value: '', sql: '' };
  formList = [
    { label: '用户表', value: 'user', sql: 'user' },
    { label: '菜单表', value: 'menu', sql: 'menu' },
    { label: '权限表', value: 'right', sql: 'right' },
    { label: 'CDN数据表', value: 'cdn-data', sql: 'cdn_data' },
    { label: 'IDC数据表', value: 'idc-data', sql: 'idc_data' },
    { label: '应用数据表', value: 'app-data', sql: 'app_data' },
    { label: 'DNS数据表', value: 'dns-data', sql: 'dns_data' },
  ];
  formValue = { label: '', value: '', sql: '' };
  tableData = [
    {
      id: 1,
      userName: 'admin',
      role: '超级管理员',
      email: 'admin@163.com',
      createTime: '2020-07-01',
      remarks: '系统管理员包含所有权限',
      status: '启用',
    },
    {
      id: 2,
      userName: 'test',
      role: '超级管理员',
      email: 'test@163.com',
      createTime: '2020-11-01',
      remarks: '系统管理员包含所有权限',
      status: '启用',
    }
  ];


  constructor(private notification: NzNotificationService) { }
  ngOnInit(): void {
  }

  log(value: { label: string; value: string; age: number }): void {
    if (value.value === 'insert') {
      this.prep = 'values';
    } else if (value.value === 'update') {
      this.prep = 'set';
    }
  }

  createBasicNotification(template: TemplateRef<{}>): void {
    this.notification.template(template);
  }
}
