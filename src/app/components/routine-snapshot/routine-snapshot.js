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
var routine_entry_1 = require('../../models/routine-entry');
var firebase_service_1 = require('../../services/firebase-service');
var routine_service_1 = require('../../services/routine-service');
var messageordate_1 = require('../../pipes/messageordate');
var angular2_2 = require('angular2/angular2');
var router_1 = require('angular2/router');
var RoutineSnapshot = (function () {
    function RoutineSnapshot(params, routineService, firebase, router) {
        this.params = params;
        this.routineService = routineService;
        this.firebase = firebase;
        this.router = router;
        var id = params.get('id');
        if (id != null) {
            this.routine = routineService.get(parseInt(id, 10));
        }
        this.firebase = firebase;
    }
    RoutineSnapshot.prototype.startWorkout = function () {
        if (this.routine) {
            var id = this.firebase.createRoutineEntry(new routine_entry_1.RoutineEntry(this.routine));
            this.router.navigate(['/RoutineLogger', { id: id }]);
        }
    };
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
            pipes: [messageordate_1.MessageOrDate],
            //styleUrls: ['app/components/routine-snapshot/routine-snapshot.css'],
            styles: ["\n    :host {\n      display: block;\n    }\n    \n    h3 {\n      font-size: 24px;\n      font-weight: 500;\n    }\n    \n    h5 {\n      color: rgba(0, 0, 0, .54);\n      font-style: italic;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.RouteParams, routine_service_1.RoutineService, firebase_service_1.FirebaseService, router_1.Router])
    ], RoutineSnapshot);
    return RoutineSnapshot;
})();
exports.RoutineSnapshot = RoutineSnapshot;
//# sourceMappingURL=routine-snapshot.js.map