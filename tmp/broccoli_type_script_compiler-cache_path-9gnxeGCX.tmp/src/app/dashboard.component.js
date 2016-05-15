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
var time_series_1 = require('./time-series');
var frequency_1 = require('./frequency');
var frequency_bands_1 = require('./frequency-bands');
var topo_1 = require('./topo');
var music_training_1 = require('./music-training');
var router_1 = require('@angular/router');
var DashboardComponent = (function () {
    function DashboardComponent(router) {
        this.router = router;
        this.title = 'BCI Dashboard';
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bci-dashboard',
            templateUrl: 'dashboard.component.html',
            styleUrls: ['dashboard.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS]
        }),
        router_1.Routes([
            { path: '/', component: music_training_1.MusicTrainingComponent },
            { path: '/time-series', component: time_series_1.TimeSeriesComponent },
            { path: '/frequency/line', component: frequency_1.FrequencyComponent },
            { path: '/frequency/radar', component: frequency_1.FrequencyComponent },
            { path: '/frequency/bands', component: frequency_bands_1.FrequencyBandsComponent },
            { path: '/topo', component: topo_1.TopoComponent },
            { path: '/music-training', component: music_training_1.MusicTrainingComponent }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map