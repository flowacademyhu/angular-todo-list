import { Component, OnInit } from '@angular/core';
import { RocketService } from './service/rocket.service';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css'],
})
export class RocketComponent implements OnInit {

  rows = [];

  constructor(
    private rocketService: RocketService
  ) { }

  ngOnInit() {
  }

  getDataFromServer() {
    this.rocketService.getRockets().subscribe((response) => {
      this.rows = response;
    }, (error) => {
      console.log(':(');
    }, () => {
      console.log('Kiraly, leftutott! :) ');
    });
  }

}
