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
var core_1 = require('@angular/core');
var frequency_band_1 = require('../frequency-band');
var FrequencyBandsComponent = (function () {
    function FrequencyBandsComponent() {
    }
    FrequencyBandsComponent.prototype.ngOnInit = function () {
    };
    FrequencyBandsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bci-frequency-bands',
            templateUrl: 'frequency-bands.component.html',
            styleUrls: ['frequency-bands.component.css'],
            directives: [frequency_band_1.FrequencyBandComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], FrequencyBandsComponent);
    return FrequencyBandsComponent;
}());
exports.FrequencyBandsComponent = FrequencyBandsComponent;
//# sourceMappingURL=frequency-bands.component.js.map