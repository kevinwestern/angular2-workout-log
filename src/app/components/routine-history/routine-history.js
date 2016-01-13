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
    var RoutineHistory;
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
            RoutineHistory = (function () {
                function RoutineHistory(params, database) {
                    this.database = database;
                    this.routine = this.database.getRoutineByName(params.get('id'));
                }
                RoutineHistory = __decorate([
                    core_1.Component({
                        selector: 'routine-history',
                        templateUrl: '/src/app/components/routine-history/routine-history.html',
                        directives: [common_1.NgFor, router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        styles: ["\n    :host {\n      display: block;\n    }\n    "]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, database_service_1.Database])
                ], RoutineHistory);
                return RoutineHistory;
            })();
            exports_1("RoutineHistory", RoutineHistory);
        }
    }
});
//# sourceMappingURL=routine-history.js.map