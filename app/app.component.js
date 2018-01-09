"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
        this._property1 = 'a property from the constructor';
        this._src = 'http://www.dogbreedplus.com/dog_names/images/funny-dog-names.jpg';
        this._alt = 'funny dogs';
        this.needsBorder = true;
    }
    Object.defineProperty(AppComponent.prototype, "property1", {
        get: function () { return this._property1 + ' from the accessor'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "src", {
        get: function () { return this._src; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "alt", {
        get: function () { return this._alt; },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root, .app-root, [app-root]',
            templateUrl: "app.component.2.html",
            styles: [
                ".success { background-color: lightcyan; }",
                "  h1 { color: white; }"
            ],
            styleUrls: ['app.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
