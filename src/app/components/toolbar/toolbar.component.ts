import { Component, OnInit } from '@angular/core';

import { KeycloakService } from 'keycloak-angular';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private keycloakService: KeycloakService) { }

  ngOnInit(): void {
  }


  logout() {
    this.keycloakService.logout();
  }

}