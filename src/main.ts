import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts';

bootstrapApplication(AppComponent, {
  providers: [
    provideEchartsCore({ echarts })
  ]
});
