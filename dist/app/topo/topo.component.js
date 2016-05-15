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
var constants_1 = require('../shared/constants');
var TopoComponent = (function () {
    function TopoComponent(view, constants) {
        this.view = view;
        this.constants = constants;
        this.data = {
            x: [],
            y: [],
            name: 'density',
            ncontours: 15,
            colorscale: [
                [0, 'rgb(208, 0, 0)'],
                [.50, 'rgb(247, 192, 0)'],
                [.60, 'rgb(241, 255, 22)'],
                [.80, 'rgb(68, 255, 250)'],
                [.95, 'rgb(50, 0, 159)'],
                [1, 'rgb(51, 51, 51)']
            ],
            reversescale: true,
            showscale: false,
            type: 'histogram2dcontour',
            line: {
                width: 1
            },
            contours: {}
        };
        this.layout = {
            autosize: true,
            width: 600,
            height: 450,
            bargap: 0,
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: 'rgba(0,0,0,0)',
            margin: { l: 0, r: 0, b: 0, t: 0 },
            xaxis: {
                autorange: true,
                showgrid: false,
                zeroline: false,
                showline: false,
                autotick: true,
                ticks: '',
                showticklabels: false
            },
            yaxis: {
                autorange: true,
                showgrid: false,
                zeroline: false,
                showline: false,
                autotick: true,
                ticks: '',
                showticklabels: false
            }
        };
        this.options = {
            staticPlot: true
        };
        this.socket = io(constants.socket.url);
    }
    TopoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.plotElement = this.view.nativeElement.querySelector('#topo');
        Plotly.newPlot(this.plotElement.id, [this.data], this.layout, this.options);
        this.socket.on(this.constants.socket.events.topo, function (data) {
            console.log(data.plot);
            _this.data.x = data.plot.x; //this.getRandomData().x
            _this.data.y = data.plot.y; //this.getRandomData().y
            Plotly.redraw(_this.plotElement);
            //Plotly.Plots.resize(this.plotElement);
        });
    };
    TopoComponent.prototype.ngOnDestroy = function () {
        this.socket.removeListener(this.constants.socket.events.topo);
    };
    TopoComponent.prototype.getRandomData = function () {
        function normal() {
            var x = 0, y = 0, rds, c;
            do {
                x = Math.random() * 2 - 1;
                y = Math.random() * 2 - 1;
                rds = x * x + y * y;
            } while (rds == 0 || rds > 1);
            c = Math.sqrt(-2 * Math.log(rds) / rds);
            return x * c;
        }
        var N = 2000, a = -1, b = Math.random();
        var step = (b - a) / (N - 1);
        var t = new Array(N), x = new Array(N), y = new Array(N);
        for (var i = 0; i < N; i++) {
            t[i] = a + step * i;
            x[i] = (Math.pow(t[i], 3)) + (0.3 * normal());
            y[i] = (Math.pow(t[i], 6)) + (0.3 * normal());
        }
        return {
            x: x,
            y: y
        };
    };
    TopoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bci-topo',
            templateUrl: 'topo.component.html',
            styleUrls: ['topo.component.css'],
            providers: [constants_1.Constants]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, constants_1.Constants])
    ], TopoComponent);
    return TopoComponent;
}());
exports.TopoComponent = TopoComponent;
//# sourceMappingURL=topo.component.js.map