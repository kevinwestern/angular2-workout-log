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
var routine_1 = require('../models/routine');
var routine_entry_1 = require('../models/routine-entry');
var toPromise = function (src, eventName) {
    return new Promise(function (resolve, reject) {
        src[eventName] = function () { return resolve(); };
    });
};
var AppLocalStorage = (function () {
    function AppLocalStorage() {
        if (!localStorage.getItem('routines')) {
            localStorage.setItem('routines', JSON.stringify(_SEED_DATA_ROUTINES));
        }
        if (!localStorage.getItem('entries')) {
            localStorage.setItem('entries', "{}");
        }
    }
    AppLocalStorage.prototype.getRoutines = function () {
        return JSON.parse(localStorage.getItem('routines'));
    };
    AppLocalStorage.prototype.createRoutineEntry = function (entry) {
        // super unique id generator
        var id = Date.now() + Math.floor(Math.random() * 1000);
        this.saveRoutineEntry(entry, id);
        return id;
    };
    AppLocalStorage.prototype.saveRoutineEntry = function (entry, id) {
        var entries = JSON.parse(localStorage.getItem('entries'));
        entries[id] = entry.toJson();
        entries[id].id = id;
        localStorage.setItem('entries', JSON.stringify(entries));
    };
    AppLocalStorage.prototype.getRoutineEntry = function (id) {
        return JSON.parse(localStorage.getItem('entries'))[id];
    };
    AppLocalStorage.prototype.getRoutine = function (name) {
        return this.getRoutines().find(function (r) { return r.name == name; });
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
        return Promise.resolve(this.db.getRoutines().map(routine_1.Routine.fromJson));
    };
    Database.prototype.createRoutineEntry = function (entry) {
        // TODO: Check connection
        return Promise.resolve(this.db.createRoutineEntry(entry));
    };
    Database.prototype.saveRoutineEntry = function (entry, id) {
        this.db.saveRoutineEntry(entry, id);
        return Promise.resolve();
    };
    Database.prototype.getRoutineEntry = function (id) {
        // TODO: Check connection
        var entry = this.db.getRoutineEntry(id);
        var routine = this.db.getRoutine(entry.routine.name);
        return Promise.resolve(routine_entry_1.RoutineEntry.fromJson(entry.id, routine, entry));
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
                "sets": 3
            }, {
                "name": "Barbell Row",
                "sets": 3
            }, {
                "name": "Wide-Grip Pull-up or Chin-Up",
                "sets": 3
            }, {
                "name": "Close-grip lat pulldown",
                "sets": 3
            }, {
                "name": "Barbell shurgs",
                "sets": 3
            }, {
                "name": "Ab Circuits",
                "sets": 3
            }],
        "name": "Back & Abs"
    }, {
        "lastCompletedTime": 1451787168267,
        "lifts": [{
                "name": "Incline Barbell Bench Press",
                "sets": 3
            }, {
                "name": "Incline Dumbell Bench Press",
                "sets": 3
            }, {
                "name": "Flat Barbell Bench Press",
                "sets": 3
            }, {
                "name": "(Optional) Dip",
                "sets": 3
            }, {
                "name": "Calf Workout A",
                "sets": 3
            }],
        "name": "Chest & Calves"
    }, {
        "lastCompletedTime": 1451787709611,
        "lifts": [{
                "name": "Barbell Squat",
                "sets": 3
            }, {
                "name": "Leg Press",
                "sets": 3
            }, {
                "name": "Romanian Deadlift",
                "sets": 3
            }, {
                "name": "Side Lateral Raise",
                "sets": 3
            }, {
                "name": "Bent-Over Rear Delt Raise",
                "sets": 3
            }, {
                "name": "Calc Workout C",
                "sets": 3
            }],
        "name": "Legs and Shoulders"
    }, {
        "lastCompletedTime": 1451787693021,
        "lifts": [{
                "name": "Barbell Military Press",
                "sets": 3
            }, {
                "name": "Side Lateral Raise",
                "sets": 3
            }, {
                "name": "Bent-over Rear Delt Raise",
                "sets": 3
            }, {
                "name": "Face Pulls",
                "sets": 3
            }, {
                "name": "Calf Workout B",
                "sets": 3
            }],
        "name": "Shoulders & Calves"
    }, {
        "lastCompletedTime": 1451787701874,
        "lifts": [{
                "name": "Incline Barbell Benchpress",
                "sets": 3
            }, {
                "name": "Barbell Curl",
                "sets": 3
            }, {
                "name": "Close-Grip Bench Press",
                "sets": 3
            }, {
                "name": "Alternating Dumbbell Curl",
                "sets": 3
            }, {
                "name": "Seated Triceps Press",
                "sets": 3
            }, {
                "name": "Ab Circuits",
                "sets": 3
            }],
        "name": "Upper Body & Abs"
    }];
//# sourceMappingURL=database-service.js.map