import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
@Component({
  moduleId: module.id,
  selector: 'cf-nav-menu',
  templateUrl: 'nav-menu.component.html',
  styleUrls: ['nav-menu.component.css'],
  directives:[ROUTER_DIRECTIVES,MD_TOOLBAR_DIRECTIVES]
})
export class NavMenuComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
