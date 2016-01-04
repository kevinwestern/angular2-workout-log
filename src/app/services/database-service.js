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
var toPromise = function (src, eventName) {
    return new Promise(function (resolve, reject) {
        src[eventName] = function () { return resolve(); };
    });
};
var AppIndexedDB = (function () {
    function AppIndexedDB() {
        var _this = this;
        this.openRequest = window.indexedDB.open('aa', 1);
        this.db = new Promise(function (resolve, reject) {
            _this.openRequest.onupgradeneeded = function (e) {
                _this._upgradeDb(e.target.result);
                resolve(e.target.result);
            };
            _this.openRequest.onsuccess = function (e) { return resolve(e.target.result); };
        });
    }
    AppIndexedDB.prototype._upgradeDb = function (db) {
        var routinesStore = db.createObjectStore('routines', { keyPath: 'name' });
        var liftsStore = db.createObjectStore('lifts', { keyPath: 'name' });
        var entriesStore = db.createObjectStore('entries', { keyPath: 'key' });
        //const a = toPromise(routinesStore.transaction, 'oncomplete');
        ///const b= toPromise(liftsStore.transaction, 'oncomplete');
        // b.then(() => {
        //  console.log('ook');
        //const routines = db.transaction('routines', 'readwrite').objectStore('routines');
        // _SEED_DATA_ROUTINES.forEach((routine: any) => routines.add(routine));
        // });
        /*Promise.all([
          toPromise(routinesStore.transaction, 'oncomplete'),
          toPromise(liftsStore.transaction, 'oncomplete'),
        ]).then(() => {
          console.log('whatup');
        })*/
        toPromise(routinesStore.transaction, 'oncomplete').then(function () { return toPromise(liftsStore.transaction, 'oncomplete'); }).then(function () { return toPromise(entriesStore.transaction, 'oncomplete'); }).then(function () { return console.log('ok'); });
    };
    AppIndexedDB.prototype.getRoutines = function () {
        return this.db.then(function (db) {
            var cursorReq = db.transaction('routines', 'readonly').objectStore('routines').openCursor();
            var routines = [];
            return new Promise(function (resolve, reject) {
                cursorReq.onsuccess = function (e) {
                    var cursor = e.target.result;
                    if (cursor) {
                        routines.push(cursor.value);
                        cursor.continue();
                    }
                    else {
                        resolve(routines);
                    }
                };
                cursorReq.onerror = reject;
            });
        });
    };
    AppIndexedDB = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppIndexedDB);
    return AppIndexedDB;
})();
exports.AppIndexedDB = AppIndexedDB;
/**
 * Database Service provides offline saving to IndexedDB.
 */
var Database = (function () {
    function Database(db) {
        this.db = db;
    }
    Database.prototype.getRoutines = function () {
        // TODO: Check connection
        return this.db.getRoutines();
    };
    Database = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [AppIndexedDB])
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