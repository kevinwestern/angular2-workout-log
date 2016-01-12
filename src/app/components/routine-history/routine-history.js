var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var database_service_1 = require('../../services/database-service');
var angular2_2 = require('angular2/angular2');
var router_1 = require('angular2/router');
var RoutineHistory = (function () {
    function RoutineHistory(params, database) {
        this.database = database;
    }
    RoutineHistory.prototype.handleChange = function (e) {
        this.database.saveRoutine(this.routine);
    };
    RoutineHistory = __decorate([
        angular2_1.Component({
            selector: 'routine-history',
            templateUrl: '/src/app/components/routine-history/routine-history.html',
            directives: [angular2_1.NgFor, router_1.ROUTER_DIRECTIVES, angular2_1.FORM_DIRECTIVES],
            encapsulation: angular2_2.ViewEncapsulation.Emulated,
            styles: ["\n    :host {\n      display: block;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.RouteParams, database_service_1.Database])
    ], RoutineHistory);
    return RoutineHistory;
})();
exports.RoutineHistory = RoutineHistory;
//# sourceMappingURL=routine-history.js.map