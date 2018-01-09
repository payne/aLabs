import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-root, .app-root, [app-root]',
    templateUrl : `app.component.2.html`,
    styles: [
      `.success { background-color: lightcyan; }`,
      `  h1 { color: white; }`
    ],
    styleUrls: ['app.component.css']
})
export class AppComponent { 
   private _src : string;
   private _alt : string;
   private needsBorder: boolean;
   private title: string = 'app works!';
   private _property1 : string;
   constructor() {
     this._property1 = 'a property from the constructor';
     this._src = 'http://www.dogbreedplus.com/dog_names/images/funny-dog-names.jpg';
     this._alt = 'funny dogs';
     this.needsBorder = true;
   }
   public get property1() : string { return this._property1 + ' from the accessor'; }
   public get src() : string { return this._src; }
   public get alt() : string { return this._alt; }
   // public get needsBorder() : string { return this.needsBorder; }
}
