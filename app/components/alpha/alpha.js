
angular.module('bciDashboard')
    .component('bciAlpha', {
        templateUrl: 'components/alpha/alpha.html',
        bindings: {
            eventName: '@'
        },
        controller: function ($timeout) {

            var $ctrl = this;
            var socket = io();

            $ctrl.colors = [
                { fillColor: 'rgba(112,185,252,1)' }
            ];

            $ctrl.series = ['Channel 1','Channel 2','Channel 3','Channel 4','Channel 5','Channel 6','Channel 7','Channel 8'];

            $ctrl.options = {
                responsive: true,
                animation: true,
                animationSteps: 15,
                scaleOverride: true,
                scaleStartValue: -4,
                scaleStepWidth: 4,
                scaleSteps: 4
            };

            socket.on($ctrl.eventName, function (data) {
                var alphaRange = EEGSpectrumUtils.filterBand(data.data, data.labels, [8, 12]);
                $timeout(function () {
                    $ctrl.labels = alphaRange.labels;
                    $ctrl.data = alphaRange.spectrums;
                });
            });

            $ctrl.$onDestroy = function () {
                socket.removeListener($ctrl.eventName);
            };

        }
    });
