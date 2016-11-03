import { Component, Injectable, Input } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}

const pi = 3.14;

/*
angular.module('app').component('root',{
  templateUrl: './app.component.html,
  controller : function(){
    this.title = 'app works!';
  }
})
*/