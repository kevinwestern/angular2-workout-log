System.register(['angular2/core', 'angular2/common', '../../entry-builder', '../../services/database-service', '../../pipes/messageordate', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, entry_builder_1, database_service_1, messageordate_1, router_1;
    var RoutineSnapshot;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (entry_builder_1_1) {
                entry_builder_1 = entry_builder_1_1;
            },
            function (database_service_1_1) {
                database_service_1 = database_service_1_1;
            },
            function (messageordate_1_1) {
                messageordate_1 = messageordate_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            RoutineSnapshot = (function () {
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
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], RoutineSnapshot.prototype, "routine", void 0);
                RoutineSnapshot = __decorate([
                    core_1.Component({
                        selector: 'routine-snapshot',
                        templateUrl: '/src/app/components/routine-snapshot/routine-snapshot.html',
                        directives: [common_1.NgFor, router_1.ROUTER_DIRECTIVES, router_1.RouterLink],
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        pipes: [messageordate_1.MessageOrDate],
                        //styleUrls: ['app/components/routine-snapshot/routine-snapshot.css'],
                        styles: ["\n    :host {\n      display: block;\n    }\n    \n    h3 {\n      font-size: 24px;\n      font-weight: 500;\n    }\n    \n    h5 {\n      color: rgba(0, 0, 0, .54);\n      font-style: italic;\n    }\n    "]
                    }), 
                    __metadata('design:paramtypes', [database_service_1.Database, router_1.Router])
                ], RoutineSnapshot);
                return RoutineSnapshot;
            })();
            exports_1("RoutineSnapshot", RoutineSnapshot);
        }
    }
});
//# sourceMappingURL=routine-snapshot.js.map