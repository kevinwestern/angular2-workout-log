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
var RoutineLogger = (function () {
    function RoutineLogger(params, database) {
        var _this = this;
        this.id = Number(params.get('id'));
        this.database = database;
        this.routine = database.getRoutineByEntryId(this.id);
        this.entry = this.routine.entries.find(function (entry) { return entry.timestamp == _this.id; });
    }
    RoutineLogger.prototype.handleChange = function (e) {
        this.database.saveRoutine(this.routine);
    };
    RoutineLogger = __decorate([
        angular2_1.Component({
            selector: 'routine-logger',
            templateUrl: '/src/app/components/routine-logger/routine-logger.html',
            directives: [angular2_1.NgFor, angular2_1.NgIf, router_1.ROUTER_DIRECTIVES, angular2_1.FORM_DIRECTIVES],
            encapsulation: angular2_2.ViewEncapsulation.Emulated,
            styles: ["\n    :host {\n      display: block;\n    }\n    \n    .lift {\n      font-size: 18px;\n    }\n    \n    .short-input {\n      width: 50px;\n      border: none;\n      border-bottom: solid 1px #ccc;\n      margin-left: .5em;\n    }\n    \n    .short-input:focus {\n      border-bottom-color: #1976D2;\n      outline-width: 0;\n    }\n    \n    .lift-set {\n      line-height: 2em;\n    }  \n    "]
        }), 
        __metadata('design:paramtypes', [router_1.RouteParams, database_service_1.Database])
    ], RoutineLogger);
    return RoutineLogger;
})();
exports.RoutineLogger = RoutineLogger;
//# sourceMappingURL=routine-logger.js.map