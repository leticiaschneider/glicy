import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private configData:Array<any> = [];

  constructor() { 
  }

  setConfig(configData: any) {
    this.configData = configData;
  }

  getConfig() {
    return this.configData;
  }

}