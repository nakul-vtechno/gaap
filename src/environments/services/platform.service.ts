import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor() { }

  private currentPlatform = null;

  public setPlatform(platform) {
    this.currentPlatform = platform;
    console.log('27Jul 1 =>' , this.currentPlatform );
  }

  public getPlatform() {
    return this.currentPlatform;
  }
}
