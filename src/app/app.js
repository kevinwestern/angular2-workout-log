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
var routine_service_1 = require('./services/routine-service');
var routine_snapshot_1 = require('./components/routine-snapshot/routine-snapshot');
var routine_logger_1 = require('./components/routine-logger/routine-logger');
var router_1 = require('angular2/router');
var RoutineList = (function () {
    function RoutineList(routineService) {
        this.routineService = routineService;
        this.routines = this.routineService.getRoutines();
    }
    RoutineList = __decorate([
        angular2_1.Component({
            selector: 'routine-list',
            template: "\n      <div class=\"app-content\">\n          <routine-snapshot *ng-for=\"#routine of routines\" [routine]=\"routine\"></routine-snapshot>\n      </div>\n  ",
            directives: [routine_snapshot_1.RoutineSnapshot, angular2_1.NgFor, router_1.ROUTER_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [routine_service_1.RoutineService])
    ], RoutineList);
    return RoutineList;
})();
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            template: "<router-outlet></router-outlet>",
            directives: [router_1.ROUTER_DIRECTIVES],
        }),
        router_1.RouteConfig([
            { path: '/', component: RoutineList },
            { path: '/routines', component: RoutineList },
            { path: '/routine/:id/start', component: routine_logger_1.RoutineLogger, as: 'RoutineLogger' },
            { path: '/routine/:id', component: routine_snapshot_1.RoutineSnapshot, as: 'WorkoutRoutine' }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent, [
    routine_service_1.RoutineService,
    router_1.ROUTER_BINDINGS,
    angular2_1.bind(router_1.APP_BASE_HREF).toValue('/src')
]);
//# sourceMappingURL=app.js.map