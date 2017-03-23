import { Component } from '@angular/core';
import { FrameworkConfigService, FrameworkConfigSettings} from '../fw/services/framework-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor (private frameworkConfigService: FrameworkConfigService) {
  
    let config : FrameworkConfigSettings = {
        socialIcons: [
            {imageFile: 'assets/social-fb-bw.png', alt: 'Facebook', link:'http://www.facebook.com'}
        ],
        showLenguageSelector:true
    };
    frameworkConfigService.configure(config);
  }
}
