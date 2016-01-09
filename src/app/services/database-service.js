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
var AppLocalStorage = (function () {
    function AppLocalStorage() {
        if (!localStorage.getItem('routines')) {
            localStorage.setItem('routines', JSON.stringify(_SEED_DATA_ROUTINES));
        }
    }
    AppLocalStorage.prototype.getRoutines = function () {
        return JSON.parse(localStorage.getItem('routines'));
    };
    AppLocalStorage.prototype.saveRoutine = function (routine) {
        var routines = this.getRoutines();
        var index = routines.findIndex(function (r) { return r.name == routine.name; });
        routines[index] = routine;
        localStorage.setItem('routines', JSON.stringify(routines));
    };
    AppLocalStorage = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppLocalStorage);
    return AppLocalStorage;
})();
exports.AppLocalStorage = AppLocalStorage;
/**
 * Database Service provides offline saving to IndexedDB.
 */
var Database = (function () {
    function Database(db) {
        this.db = db;
    }
    Database.prototype.getRoutines = function () {
        // TODO: Check connection
        return Promise.resolve(this.db.getRoutines());
    };
    Database.prototype.saveRoutine = function (routine) {
        this.db.saveRoutine(routine);
    };
    Database.prototype.getRoutineByEntryId = function (id) {
        return this.db.getRoutines()
            .find(function (routine) { return routine.entries && !!routine.entries.find(function (entry) { return entry.timestamp == id; }); });
    };
    Database = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [AppLocalStorage])
    ], Database);
    return Database;
})();
exports.Database = Database;
var _SEED_DATA_ROUTINES = [{
        "lastCompletedTime": 0,
        "lifts": [{
                "name": "Deadlift",
                "setCount": 3,
                "suggestedReps": 6
            }, {
                "name": "Barbell Row",
                "setCount": 3,
                "suggestedReps": 6
            }, {
                "name": "Wide-Grip Pull-up or Chin-Up",
                "setCount": 3,
                "suggestedReps": 6
            }, {
                "name": "Close-grip lat pulldown",
                "setCount": 3,
                "suggestedReps": 6
            }, {
                "name": "Barbell shurgs",
                "setCount": 3,
                "suggestedReps": 6
            }, {
                "name": "Ab Circuits",
                "setCount": 3,
                "suggestedReps": 6
            }],
        "name": "Back & Abs"
    }, {
        "lastCompletedTime": 1451787168267,
        "lifts": [{
                "name": "Incline Barbell Bench Press",
                "setCount": 3,
                "suggestedReps": 6
            }, {
                "name": "Incline Dumbell Bench Press",
                "setCount": 3,
                "suggestedReps": 6
            }, {
                "name": "Flat Barbell Bench Press",
                "setCount": 3,
                "suggestedReps": 6
            }, {
                "name": "(Optional) Dip",
                "setCount": 3,
                "suggestedReps": 6
            }, {
                "name": "Calf Workout A",
                "setCount": 3,
                "suggestedReps": 6
            }],
        "name": "Chest & Calves"
    }, {
        "lastCompletedTime": 1451787709611,
        "lifts": [{
                "name": "Barbell Squat",
                "setCount": 3,
                "suggestedReps": 6
            }, {
                "name": "Leg Press",
                "setCount": 3,
                "suggestedReps": 6
            }, {
                "name": "Romanian Deadlift",
                "setCount": 3,
                "suggestedReps": 6
            }, {
                "name": "Side Lateral Raise",
                "setCount": 3,
                "suggestedReps": 6
            }, {
                "name": "Bent-Over Rear Delt Raise",
                "setCount": 3,
                "suggestedReps": 6
            }, {
                "name": "Calc Workout C",
                "setCount": 3,
                "suggestedReps": 6
            }],
        "name": "Legs and Shoulders"
    }, {
        "lastCompletedTime": 1451787693021,
        "lifts": [{
                "name": "Barbell Military Press",
                "setCount": 3,
                "suggestedReps": 6
            }, {
                "name": "Side Lateral Raise",
                "setCount": 3,
                "suggestedReps": 6
            }, {
                "name": "Bent-over Rear Delt Raise",
                "setCount": 3,
                "suggestedReps": 6
            }, {
                "name": "Face Pulls",
                "setCount": 3,
                "suggestedReps": 6
            }, {
                "name": "Calf Workout B",
                "setCount": 3,
                "suggestedReps": 6
            }],
        "name": "Shoulders & Calves"
    }, {
        "lastCompletedTime": 1451787701874,
        "lifts": [{
                "name": "Incline Barbell Benchpress",
                "setCount": 3,
                "suggestedReps": 6
            }, {
                "name": "Barbell Curl",
                "setCount": 3,
                "suggestedReps": 6
            }, {
                "name": "Close-Grip Bench Press",
                "setCount": 3,
                "suggestedReps": 6
            }, {
                "name": "Alternating Dumbbell Curl",
                "setCount": 3,
                "suggestedReps": 6
            }, {
                "name": "Seated Triceps Press",
                "setCount": 3,
                "suggestedReps": 6
            }, {
                "name": "Ab Circuits",
                "setCount": 3,
                "suggestedReps": 6
            }],
        "name": "Upper Body & Abs"
    }];
//# sourceMappingURL=database-service.js.map