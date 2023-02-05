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
    const apiHost = window.location.protocol + '//' + window.location.hostname + ':3000';
    const headers = {
      'Authorization': 'abc123'
    }

    console.log('Doing an Angular HTTP request...');

    this.http.get(`${apiHost}/api-dummy`, {
      headers: {
        ...headers,
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

    CapacitorHttp.get({
      url: `${apiHost}/api-dummy`, headers: {
        ...headers,
        'Client': 'Capacitor'
      }
    })
      .then(res => {
        console.log('Capacitor HTTP result')
        console.log(res)
        this.capacitorHttpResponse = res
      })
  }
}
