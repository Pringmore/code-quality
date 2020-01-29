import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  // This is a comment ladies and gentlemen
  title = 'demo-app';
  public testFunction(parameter: boolean, arrayData: []) {
    const greet = 'hello';
    const name = 'world';

    console.log(greet, name);
    if (parameter) {
      for (const element of arrayData) {
        switch (element) {
          case undefined:
            console.log('Ooups that s a fake information.');
            break;

          default:
            console.log('Name is: ', element);
            break;
        }
      }
    }
  }

  ngOnInit() {
    console.log('ngOnInit is called from our compoment');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy is called from our compoment');
  }
}
