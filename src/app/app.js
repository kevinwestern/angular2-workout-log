System.register(['angular2/core', 'angular2/common', 'angular2/platform/browser', './pipes/messageordate', './services/database-service', './components/routine-history/routine-history', './components/routine-logger/routine-logger', './components/routine-snapshot/routine-snapshot', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, browser_1, messageordate_1, database_service_1, database_service_2, routine_history_1, routine_logger_1, routine_snapshot_1, router_1;
    var RoutineList, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (messageordate_1_1) {
                messageordate_1 = messageordate_1_1;
            },
            function (database_service_1_1) {
                database_service_1 = database_service_1_1;
                database_service_2 = database_service_1_1;
            },
            function (routine_history_1_1) {
                routine_history_1 = routine_history_1_1;
            },
            function (routine_logger_1_1) {
                routine_logger_1 = routine_logger_1_1;
            },
            function (routine_snapshot_1_1) {
                routine_snapshot_1 = routine_snapshot_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            RoutineList = (function () {
                function RoutineList(database) {
                    var _this = this;
                    database.getRoutines().then(function (routines) { return _this.routines = routines; });
                }
                RoutineList = __decorate([
                    core_1.Component({
                        selector: 'routine-list',
                        template: "\n      <div class=\"app-content\">\n          <routine-snapshot *ngFor=\"#routine of routines\" [routine]=\"routine\"></routine-snapshot>\n      </div>\n  ",
                        directives: [routine_snapshot_1.RoutineSnapshot, common_1.NgFor, router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [database_service_2.Database])
                ], RoutineList);
                return RoutineList;
            })();
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<router-outlet></router-outlet>",
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'RoutineList', component: RoutineList },
                        { path: '/routines', name: 'RoutineList', component: RoutineList },
                        { path: '/routine/:id', name: 'RoutineHistory', component: routine_history_1.RoutineHistory },
                        { path: '/routine/:id/edit', name: 'RoutineLogger', component: routine_logger_1.RoutineLogger },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            browser_1.bootstrap(AppComponent, [
                database_service_1.AppLocalStorage,
                database_service_2.Database,
                messageordate_1.MessageOrDate,
                router_1.ROUTER_BINDINGS,
                router_1.ROUTER_PROVIDERS,
                core_1.bind(router_1.APP_BASE_HREF).toValue('/src')
            ]);
        }
    }
});
//# sourceMappingURL=app.js.map