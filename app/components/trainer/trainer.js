
(function () {

    angular
        .module('bciDashboard')
        .directive('bciTrainer', bciTrainer);

    function bciTrainer() {



        return {
            templateUrl: 'components/trainer/trainer.html',
            scope: {
                eventName: '@'
            },
            bindToController: true,
            controllerAs: '$ctrl',
            controller: function ($timeout) {

                var $ctrl = this;

                var socket = io();

                socket.on($ctrl.eventName, function (data) {

                    $timeout(function () {
                        $ctrl.amplitudes = data.amplitudes;
                        $ctrl.timeline = data.timeline;
                    });


                });

                $ctrl.$onDestroy = function () {
                    socket.removeListener($ctrl.eventName);
                };

            },
            link: function (scope, element) {
                // 200 = 50 samples * 4 milliseconds (sample rate)
                trainer.streamTo(element[0].querySelector('canvas'), 40);
            }
        }
    }

})();
