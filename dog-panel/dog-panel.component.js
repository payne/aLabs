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
var dog_1 = require("./model/dog");
var DogPanel = /** @class */ (function () {
    function DogPanel() {
        this._dog = new dog_1.Dog(1, 'Rover', 5, "mongrel", true);
        console.log('Created: ', this);
    }
    Object.defineProperty(DogPanel.prototype, "dog", {
        get: function () { return this._dog; },
        enumerable: true,
        configurable: true
    });
    DogPanel = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: "dog-panel.component.html",
            styleUrls: ['dog-panel.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], DogPanel);
    return DogPanel;
}());
exports.DogPanel = DogPanel;
