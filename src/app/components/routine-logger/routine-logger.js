System.register(['angular2/core', 'angular2/common', '../../services/database-service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, database_service_1, router_1;
    var RoutineLogger;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (database_service_1_1) {
                database_service_1 = database_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            RoutineLogger = (function () {
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
                    core_1.Component({
                        selector: 'routine-logger',
                        templateUrl: '/src/app/components/routine-logger/routine-logger.html',
                        directives: [common_1.NgFor, common_1.NgIf, router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        styles: ["\n    :host {\n      display: block;\n    }\n    \n    .lift {\n      font-size: 18px;\n    }\n    \n    .short-input {\n      width: 50px;\n      border: none;\n      border-bottom: solid 1px #ccc;\n      margin-left: .5em;\n    }\n    \n    .short-input:focus {\n      border-bottom-color: #1976D2;\n      outline-width: 0;\n    }\n    \n    .lift-set {\n      line-height: 2em;\n    }  \n    "]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, database_service_1.Database])
                ], RoutineLogger);
                return RoutineLogger;
            })();
            exports_1("RoutineLogger", RoutineLogger);
        }
    }
});
//# sourceMappingURL=routine-logger.js.map