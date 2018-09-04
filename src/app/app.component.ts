import { Component, OnInit, Optional } from '@angular/core';
import { RocketService } from './rocket_module/bsd/service/rocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Todo';

  constructor(
    private rocketService: RocketService
  ) {

  }

  ngOnInit() {
  }
}
