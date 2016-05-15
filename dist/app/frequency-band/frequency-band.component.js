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
var io = require('socket.io-client');
var shared_1 = require('../shared');
var ng2_charts_1 = require('../shared/ng2-charts');
var constants_1 = require('../shared/constants');
var FrequencyBandComponent = (function () {
    function FrequencyBandComponent(chartService, constants) {
        this.chartService = chartService;
        this.constants = constants;
        this.data = [[]];
        this.channels = this.chartService.getChannels();
        this.options = this.chartService.getChartJSDefaults({
            responsive: false
        });
        this.socket = io(constants.socket.url);
    }
    FrequencyBandComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.colors = this.chartService.getColorByIndex(this.color);
        this.socket.on(this.constants.socket.events.fft, function (data) {
            _this.data = data[_this.band || 'data'];
        });
    };
    FrequencyBandComponent.prototype.ngOnDestroy = function () {
        this.socket.removeListener(this.constants.socket.events.fft);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FrequencyBandComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FrequencyBandComponent.prototype, "band", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], FrequencyBandComponent.prototype, "color", void 0);
    FrequencyBandComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bci-frequency-band',
            templateUrl: 'frequency-band.component.html',
            styleUrls: ['frequency-band.component.css'],
            directives: [ng2_charts_1.CHART_DIRECTIVES],
            providers: [shared_1.ChartService, constants_1.Constants]
        }), 
        __metadata('design:paramtypes', [shared_1.ChartService, constants_1.Constants])
    ], FrequencyBandComponent);
    return FrequencyBandComponent;
}());
exports.FrequencyBandComponent = FrequencyBandComponent;
//# sourceMappingURL=frequency-band.component.js.map