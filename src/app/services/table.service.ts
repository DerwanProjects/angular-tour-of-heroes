import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TableService {

  constructor() { }

  users = [
    {
      id: 1,
      name: 'Carolus Haverbeke',
      position: 'Senior Node.js Dev',
      created: '2019-01-05',
      last_activity: '2022-02-22',
      actions: 'delete'
    },
    {
      id: 2,
      name: 'Emma de Milliano',
      position: 'QA Engineer',
      created: '2018-04-18',
      last_activity: '2022-04-02',
      actions: 'delete'
    },
    {
      id: 3,
      name: 'Maria de Rycke',
      position: 'Senior QA Engineer',
      created: '2019-02-14',
      last_activity: '2022-01-05',
      actions: 'delete'
    },
    {
      id: 4,
      name: 'Jan van Brussel',
      position: 'Node.js Team Manager',
      created: '2016-02-14',
      last_activity: '2022-03-04',
      actions: 'delete'
    },
    {
      id: 5,
      name: 'Philibert Haverbeke',
      position: 'Junior Node.js Dev',
      created: '2017-02-14',
      last_activity: '2021-12-29',
      actions: 'delete'
    },
  ] as Array<{id:number,name:string,position:string,created:string,last_activity:string,actions:string}>
}
