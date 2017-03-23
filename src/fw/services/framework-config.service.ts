import { Injectable } from '@angular/core';

export interface IconFiles {
    imageFile: string,
    alt: string,
    link: string
}

export interface FrameworkConfigSettings {
    showLenguageSelector?: boolean,
    showUserControls?: boolean,
    showStatusBar?: boolean,
    showStatusBarBreakpoint?: number,
    socialIcons?: Array<IconFiles>
}


@Injectable()
export class FrameworkConfigService {
  showLenguageSelector = true;
  showUserControls = true;
  showStatusBar = true;
  showStatusBarBreakpoint = 0;
  socialIcons = new Array<IconFiles>();
  
  configure(settings: FrameworkConfigSettings) : void {
    Object.assign(this, settings);
  }

}
