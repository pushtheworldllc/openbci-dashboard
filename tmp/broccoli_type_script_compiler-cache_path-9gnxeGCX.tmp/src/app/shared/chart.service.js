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
var ChartService = (function () {
    function ChartService() {
    }
    ChartService.prototype.getChartJSDefaults = function (overrides) {
        if (overrides === void 0) { overrides = {}; }
        return Object.assign({
            responsive: true,
            animation: false,
            animationSteps: 15,
            datasetStrokeWidth: 1,
            pointDot: false,
            pointDotRadius: 1,
            pointDotStrokeWidth: 0,
            datasetFill: false,
            scaleOverride: true,
            scaleStartValue: -2,
            scaleStepWidth: 1,
            scaleSteps: 6,
            barShowStroke: false,
            barValueSpacing: 1,
            barStrokeWidth: 1
        }, overrides);
    };
    ChartService.prototype.getChartSmoothieDefaults = function (overrides) {
        if (overrides === void 0) { overrides = {}; }
        return Object.assign({
            millisPerLine: 3000,
            grid: {
                fillStyle: '#333333',
                strokeStyle: 'rgba(0,0,0,0.1)',
                sharpLines: false,
                verticalSections: this.getChannels().length,
                borderVisible: true
            },
            labels: {
                disabled: true
            },
            maxValue: this.getChannels().length * 2,
            minValue: 0
        }, overrides);
    };
    ChartService.prototype.getChannels = function () {
        return Array(8).fill('CH').map(function (item, index) { return item + (index + 1); });
    };
    ChartService.prototype.getColors = function () {
        return [
            { strokeColor: 'rgba(112,185,252,1)', fillColor: 'rgba(112,185,252,1)' },
            { strokeColor: 'rgba(116,150,161,1)', fillColor: 'rgba(116,150,161,1)' },
            { strokeColor: 'rgba(162,86,178,1)', fillColor: 'rgba(162,86,178,1)' },
            { strokeColor: 'rgba(144,132,246,1)', fillColor: 'rgba(144,132,246,1)' },
            { strokeColor: 'rgba(138,219,229,1)', fillColor: 'rgba(138,219,229,1)' },
            { strokeColor: 'rgba(232,223,133,1)', fillColor: 'rgba(232,223,133,1)' },
            { strokeColor: 'rgba(148,159,177,1)', fillColor: 'rgba(148,159,177,1)' },
            { strokeColor: 'rgba(77,83,96,1)', fillColor: 'rgba(77,83,96,1)' }
        ];
    };
    ChartService.prototype.getColorByIndex = function (index) {
        return this.getColors().filter(function (c, i) { return index === i; });
    };
    ChartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ChartService);
    return ChartService;
}());
exports.ChartService = ChartService;
//# sourceMappingURL=chart.service.js.map