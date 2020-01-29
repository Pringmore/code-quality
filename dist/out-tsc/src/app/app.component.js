import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor() {
        // This is a comment ladies and gentlemen
        // This is another comment dude
        this.title = 'demo-app';
    }
    testFunction(parameter, arrayData) {
        const greet = 'hello';
        const name = 'world';
        console.log(greet, name);
        if (parameter) {
            for (let index = 0; index < arrayData.length; index++) {
                const element = arrayData[index];
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
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.sass']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map