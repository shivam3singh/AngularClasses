"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Component = function (Config) {
    return function (targetClass) {
        let tc = new targetClass();
        return class {
            title = tc.title;
            power = Config.power;
            selector = Config.selector;
            template = Config.template;
        };
    };
};
let MyComp = class MyComp {
    title = "Welcome to your life";
};
MyComp = __decorate([
    Component({
        power: 5,
        selector: "app-root",
        template: `
<div>
    <h2>{{ title }}</h2>
    <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
    </ul>
   
</div>
`
    })
], MyComp);
;
