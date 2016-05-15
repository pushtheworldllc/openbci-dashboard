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
var MusicTrainingComponent = (function () {
    function MusicTrainingComponent(view, constants) {
        this.view = view;
        this.constants = constants;
        this.socket = io(constants.socket.url);
    }
    MusicTrainingComponent.prototype.ngOnInit = function () {
        this.phaserElement = this.view.nativeElement.querySelector('#phaser');
        this.game = new Phaser.Game(480, 480, Phaser.WEBGL, this.phaserElement.id, {
            preload: this.preload, create: this.create, update: this.update
        });
        this.socket.on(this.constants.socket.events.time, function (data) {
            console.log('data from music component', data);
        });
    };
    MusicTrainingComponent.prototype.preload = function () {
        this.game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
        this.game.stage.backgroundColor = '#FF0000';
    };
    MusicTrainingComponent.prototype.create = function () {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
    };
    MusicTrainingComponent.prototype.update = function () {
    };
    MusicTrainingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bci-music-training',
            templateUrl: 'music-training.component.html',
            styleUrls: ['music-training.component.css'],
            providers: [constants_1.Constants]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, constants_1.Constants])
    ], MusicTrainingComponent);
    return MusicTrainingComponent;
}());
exports.MusicTrainingComponent = MusicTrainingComponent;
//# sourceMappingURL=music-training.component.js.map