import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-root, .app-root, [app-root]',
    templateUrl : `app.component.1.html`,
    styles: [
      `.success { background-color: lightcyan; }`,
      `  h1 { color: white; }`
    ],
    styleUrls: ['app.component.css']
})
export class AppComponent { 
   private title: string = 'app works!';
   private _property1 : string;
   constructor() {
     this._property1 = 'a property from the constructor';
   }
   public get property1() : string { return this._property1 + ' from the accessor'; }
}
