import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  angularHttpResponse?: Object;
  capacitorHttpResponse?: HttpResponse;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    //const apiHost = `${window.location.protocol}//${window.location.hostname}:3000`;
    const apiHost = 'http://192.168.1.83:3000' 

    // Quick and dirty way to get PNG file contents from assets folder
    this.http.get('assets/example-file.png', {responseType: 'arraybuffer'}).subscribe(f => {
      console.log('Doing an Angular HTTP request...');

      const formdata = new FormData();
      formdata.append('file', new Blob([f]));

      this.http.post(`${apiHost}/profile`, formdata, {
        headers: {
          'Client': 'Angular'
        }
      })
        .subscribe(res => {
          console.log('Angular HTTP result')
          console.log(res)
          this.angularHttpResponse = res
        }, err => {
          console.log(err)
          this.angularHttpResponse = err
        })

      console.log('Doing a Capacitor HTTP request...')

      const formdata2 = new FormData();
      formdata2.append('file', new Blob([f]));

      CapacitorHttp.post({
        url: `${apiHost}/profile`,
        headers: {
          'Client': 'Capacitor'
        },
        data: formdata2
      })
        .then(res => {
          console.log('Capacitor HTTP result')
          console.log(res)
          this.capacitorHttpResponse = res
        })
    })
  }
}
