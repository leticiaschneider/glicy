import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../service/config.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  configValues: any = {};
  showSucessMessage:boolean = false;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.configValues = this.configService.getConfig();
  }

  saveSettings() {
    this.configService.setConfig(this.configValues);
    this.showSucessMessage = true;
  }

  closeMessage() {
    this.showSucessMessage = false;
  }
}