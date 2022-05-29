import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from './service/config.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private configService: ConfigService) { }

  title = 'glicy';
  config: any;

  ngOnInit(): void {
    this.showDash();
  }

  showDash(){
    this.config = this.configService.getConfig();

    if (this.config.finished) {
      this.router.navigate(['/dashboard']);
    }
  }

}