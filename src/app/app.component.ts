import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoService } from './info.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major + ' with APP_INITIALIZER';

  constructor(infoService: InfoService) {
    console.log('infoService', infoService.info);
  }
}
