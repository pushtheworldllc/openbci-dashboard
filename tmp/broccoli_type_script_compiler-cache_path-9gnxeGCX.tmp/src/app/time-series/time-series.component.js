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
var smoothie_1 = require('smoothie');
var shared_1 = require('../shared');
var io = require('socket.io-client');
var constants_1 = require('../shared/constants');
var TimeSeriesComponent = (function () {
    function TimeSeriesComponent(view, chartService, constants) {
        this.view = view;
        this.chartService = chartService;
        this.constants = constants;
        this.options = this.chartService.getChartSmoothieDefaults();
        this.timeSeries = new smoothie_1.SmoothieChart(this.options);
        this.amplitudes = [];
        this.timeline = [];
        this.lines = Array(8).fill(0).map(function () { return new smoothie_1.TimeSeries(); });
        this.channels = this.chartService.getChannels();
        this.colors = this.chartService.getColors();
        this.socket = io(constants.socket.url);
        this.chartService = chartService;
    }
    TimeSeriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addTimeSeriesLines();
        this.socket.on(this.constants.socket.events.time, function (data) {
            _this.amplitudes = data.amplitudes;
            _this.timeline = data.timeline;
            _this.appendTimeSeriesLines(data.data);
        });
    };
    TimeSeriesComponent.prototype.ngOnDestroy = function () {
        this.socket.removeListener(this.constants.socket.events.time);
    };
    TimeSeriesComponent.prototype.ngAfterViewInit = function () {
        this.timeSeries.streamTo(this.view.nativeElement.querySelector('canvas'), 40);
    };
    TimeSeriesComponent.prototype.addTimeSeriesLines = function () {
        var _this = this;
        this.lines.forEach(function (line, index) {
            _this.timeSeries.addTimeSeries(line, {
                strokeStyle: _this.colors[index].strokeColor
            });
        });
    };
    TimeSeriesComponent.prototype.appendTimeSeriesLines = function (data) {
        this.lines.forEach(function (line, index) {
            data[index].forEach(function (amplitude) {
                line.append(new Date().getTime(), amplitude);
            });
        });
    };
    TimeSeriesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bci-time-series',
            templateUrl: 'time-series.component.html',
            styleUrls: ['time-series.component.css'],
            providers: [shared_1.ChartService, constants_1.Constants]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, shared_1.ChartService, constants_1.Constants])
    ], TimeSeriesComponent);
    return TimeSeriesComponent;
}());
exports.TimeSeriesComponent = TimeSeriesComponent;
//# sourceMappingURL=time-series.component.js.map