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
var routine_1 = require('../../models/routine');
var routine_service_1 = require('../../services/routine-service');
var angular2_2 = require('angular2/angular2');
var router_1 = require('angular2/router');
var RoutineSnapshot = (function () {
    function RoutineSnapshot(params, routineService) {
        var id = params.get('id');
        if (id == null) {
            this.routine = routineService.get(parseInt(id, 10));
        }
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', routine_1.Routine)
    ], RoutineSnapshot.prototype, "routine");
    RoutineSnapshot = __decorate([
        angular2_1.Component({
            selector: 'routine-snapshot',
            templateUrl: '/src/app/components/routine-snapshot/routine-snapshot.html',
            directives: [angular2_1.NgFor, router_1.ROUTER_DIRECTIVES],
            encapsulation: angular2_2.ViewEncapsulation.Emulated,
            //styleUrls: ['app/components/routine-snapshot/routine-snapshot.css'],
            styles: ["\n    :host {\n      display: block;\n    }\n    \n    .name {\n      font-size: 24px;\n      font-weight: 500;\n    }\n    \n    .lift {\n      line-height: 1.5em;\n    }\n    \n    .last-update {\n      color: rgba(0, 0, 0, .54);\n      font-style: italic;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.RouteParams, routine_service_1.RoutineService])
    ], RoutineSnapshot);
    return RoutineSnapshot;
})();
exports.RoutineSnapshot = RoutineSnapshot;
//# sourceMappingURL=routine-snapshot.js.map