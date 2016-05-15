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
var router_1 = require('@angular/router');
var io = require('socket.io-client');
var shared_1 = require('../shared');
var ng2_charts_1 = require('../shared/ng2-charts');
var constants_1 = require('../shared/constants');
var FrequencyComponent = (function () {
    function FrequencyComponent(chartService, segment, constants) {
        this.chartService = chartService;
        this.segment = segment;
        this.constants = constants;
        this.data = [[]];
        this.labels = [];
        this.colors = this.chartService.getColors();
        this.channels = this.chartService.getChannels();
        this.options = this.chartService.getChartJSDefaults();
        this.socket = io(constants.socket.url);
        this.type = segment.getParam('type') || 'Line';
    }
    FrequencyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.on(this.constants.socket.events.fft, function (data) {
            _this.data = data.data;
            _this.labels = data.labels;
        });
    };
    FrequencyComponent.prototype.ngOnDestroy = function () {
        this.socket.removeListener(this.constants.socket.events.fft);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FrequencyComponent.prototype, "type", void 0);
    FrequencyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bci-frequency',
            templateUrl: 'frequency.component.html',
            styleUrls: ['frequency.component.css'],
            directives: [ng2_charts_1.CHART_DIRECTIVES],
            providers: [shared_1.ChartService, constants_1.Constants, router_1.ROUTER_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [shared_1.ChartService, router_1.RouteSegment, constants_1.Constants])
    ], FrequencyComponent);
    return FrequencyComponent;
}());
exports.FrequencyComponent = FrequencyComponent;
//# sourceMappingURL=frequency.component.js.map