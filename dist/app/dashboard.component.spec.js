"use strict";
var testing_1 = require('@angular/core/testing');
var dashboard_component_1 = require('../app/dashboard.component');
testing_1.beforeEachProviders(function () { return [dashboard_component_1.DashboardComponent]; });
testing_1.describe('App: DashboardComponent', function () {
    testing_1.it('should create the app', testing_1.inject([dashboard_component_1.DashboardComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'clitest works!\'', testing_1.inject([dashboard_component_1.DashboardComponent], function (app) {
        testing_1.expect(app.title).toEqual('clitest works!');
    }));
});
//# sourceMappingURL=dashboard.component.spec.js.map