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
var routines_1 = require('../mocks/routines');
var RoutineService = (function () {
    function RoutineService() {
        this.routines = routines_1.ROUTINES;
    }
    RoutineService.prototype.getRoutines = function () {
        return this.routines;
    };
    RoutineService.prototype.get = function (id) {
        return this.routines[id];
    };
    RoutineService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], RoutineService);
    return RoutineService;
})();
exports.RoutineService = RoutineService;
//# sourceMappingURL=routine-service.js.map