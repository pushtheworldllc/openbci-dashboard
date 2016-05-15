"use strict";
var testing_1 = require('@angular/core/testing');
var chart_service_1 = require('./chart.service');
testing_1.describe('Chart Service', function () {
    testing_1.beforeEachProviders(function () { return [chart_service_1.ChartService]; });
    testing_1.it('should ...', testing_1.inject([chart_service_1.ChartService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=chart.service.spec.js.map