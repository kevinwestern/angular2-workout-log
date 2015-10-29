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
var routines_1 = require('./mocks/routines');
var workout_routine_1 = require('./components/workout-routine/workout-routine');
var RoutineService = (function () {
    function RoutineService() {
        this.routines = routines_1.ROUTINES;
    }
    RoutineService.prototype.getRoutines = function () {
        return this.routines;
    };
    RoutineService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], RoutineService);
    return RoutineService;
})();
var AppComponent = (function () {
    function AppComponent(routineService) {
        this.routineService = routineService;
        this.routines = this.routineService.getRoutines();
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            template: "\n      <div class=\"app-content\">\n          <workout-routine *ng-for=\"#routine of routines\" [routine]=\"routine\"></workout-routine>\n      </div>\n  ",
            directives: [workout_routine_1.WorkoutRoutine, angular2_1.NgFor, angular2_1.FORM_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [RoutineService])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent, [RoutineService]);
//# sourceMappingURL=app.js.map