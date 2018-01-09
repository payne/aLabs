import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-root, .app-root, [app-root]',
    // templateUrl : `app.component.html`,
    template: `<div class="success callout">
  <h1>An Angular v ${2+2}  App</h1>
</div>`
    styles: [
      `.success { background-color: lightcyan; }`,
      `  h1 { color: white; }`
    ],
    styleUrls: ['app.component.css']
})
export class AppComponent { }
