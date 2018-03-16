import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.less']
})


export class IndexPageComponent implements OnInit {

  public users = {
    'Vasya': {
      'size': '16',
      'name': 'Vasya',
      'age': '28'
    },
    'Petya': {
      'size': '18',
      'name': 'Petya',
      'age': '30'
    },
    'Danya': {
      'size': '19',
      'name': 'Danya',
      'age': '23'
    },
    'Vanya': {
      'size': '22',
      'name': 'Vanya',
      'age': '16'
    }
  };

  public  example = {'key':'123', 'bla':'asdasda'};

  public keys;

  constructor() { }

  ngOnInit() {
    this.keys = Object.keys(this.users);
  }

}
