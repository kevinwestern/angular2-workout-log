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
var entry_builder_1 = require('../../entry-builder');
var database_service_1 = require('../../services/database-service');
var messageordate_1 = require('../../pipes/messageordate');
var angular2_2 = require('angular2/angular2');
var router_1 = require('angular2/router');
var RoutineSnapshot = (function () {
    function RoutineSnapshot(database, router) {
        this.database = database;
        this.router = router;
    }
    RoutineSnapshot.prototype.startWorkout = function () {
        var createSets = function (lift) {
            var sets = [];
            for (var i = 0; i < lift.setCount; i++) {
                sets.push({
                    suggestedReps: lift.suggestedReps,
                    suggestedWeight: 100,
                });
            }
            return sets;
        };
        if (this.routine) {
            var now = Date.now();
            if (!this.routine.entries) {
                this.routine.entries = [{
                        timestamp: now,
                        lifts: this.routine.lifts.map(function (lift) {
                            return {
                                lift: lift,
                                sets: createSets(lift)
                            };
                        })
                    }];
            }
            else {
                this.routine.entries.push(entry_builder_1.default.createEntryFromPreviousEntry(entry_builder_1.default.getMostRecentEntry(this.routine.entries, Date.now())));
            }
            this.routine.entries.push();
            this.routine.lastCompletedTime = now;
            this.database.saveRoutine(this.routine);
            this.router.navigate(['/RoutineLogger', { id: now }]);
        }
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
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
        __metadata('design:paramtypes', [database_service_1.Database, router_1.Router])
    ], RoutineSnapshot);
    return RoutineSnapshot;
})();
exports.RoutineSnapshot = RoutineSnapshot;
//# sourceMappingURL=routine-snapshot.js.map