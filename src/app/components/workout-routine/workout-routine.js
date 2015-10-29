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
var Routine_1 = require('../../models/Routine');
var angular2_2 = require('angular2/angular2');
var WorkoutRoutine = (function () {
    function WorkoutRoutine() {
    }
    WorkoutRoutine.prototype.startRoutine = function (routine) {
        console.log(routine);
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Routine_1.Routine)
    ], WorkoutRoutine.prototype, "routine");
    WorkoutRoutine = __decorate([
        angular2_1.Component({
            selector: 'workout-routine',
            templateUrl: 'app/components/workout-routine/workout-routine.ng.html',
            directives: [angular2_1.NgFor],
            encapsulation: angular2_2.ViewEncapsulation.Emulated,
            styleUrls: ['app/components/workout-routine/workout-routine.css']
        }), 
        __metadata('design:paramtypes', [])
    ], WorkoutRoutine);
    return WorkoutRoutine;
})();
exports.WorkoutRoutine = WorkoutRoutine;
//# sourceMappingURL=workout-routine.js.map