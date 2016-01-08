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
var routine_service_1 = require('../../services/routine-service');
var angular2_2 = require('angular2/angular2');
var router_1 = require('angular2/router');
var RoutineLogger = (function () {
    function RoutineLogger(params, routineService, database) {
        var _this = this;
        this.id = Number(params.get('id'));
        this.database = database;
        this.database.getRoutineEntry(this.id).then(function (re) {
            _this.routineEntry = re;
        });
    }
    RoutineLogger.prototype.handleChange = function (e) {
        this.database.saveRoutineEntry(this.routineEntry, this.id);
    };
    RoutineLogger = __decorate([
        angular2_1.Component({
            selector: 'routine-logger',
            templateUrl: '/src/app/components/routine-logger/routine-logger.html',
            directives: [angular2_1.NgFor, angular2_1.NgIf, router_1.ROUTER_DIRECTIVES, angular2_1.FORM_DIRECTIVES],
            encapsulation: angular2_2.ViewEncapsulation.Emulated,
            styles: ["\n    :host {\n      display: block;\n    }\n    \n    .lift {\n      font-size: 18px;\n    }\n    \n    .short-input {\n      width: 50px;\n      border: none;\n      border-bottom: solid 1px #ccc;\n      margin-left: .5em;\n    }\n    \n    .short-input:focus {\n      border-bottom-color: #1976D2;\n      outline-width: 0;\n    }\n    \n    .lift-set {\n      line-height: 2em;\n    }  \n    "]
        }), 
        __metadata('design:paramtypes', [router_1.RouteParams, routine_service_1.RoutineService, database_service_1.Database])
    ], RoutineLogger);
    return RoutineLogger;
})();
exports.RoutineLogger = RoutineLogger;
//# sourceMappingURL=routine-logger.js.map