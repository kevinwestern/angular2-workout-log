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
var routine_entry_1 = require('../models/routine-entry');
var routine_1 = require('../models/routine');
var FIREBASE_APP_ID = 'torrid-fire-5346';
var FirebaseService = (function () {
    function FirebaseService() {
        this.url = FIREBASE_APP_ID + ".firebaseio.com/workoutlogger/dev/";
        this.firebase = new Firebase(this.url);
    }
    FirebaseService.prototype.set = function (data) {
        this.firebase.set(data);
    };
    FirebaseService.prototype.saveRoutineEntry = function (entry) {
        var entriesRef = this.firebase.child('entries');
        var update = {};
        update[entry.id] = {
            lifts: entry.liftEntries
        };
        entriesRef.update(update);
    };
    FirebaseService.prototype.createRoutineEntry = function (entry) {
        var routinePath = 'routines/' + entry.routine.name;
        var routineUpdate = {};
        routineUpdate[routinePath] = entry.routine;
        entry.routine.lastCompletedTime = Firebase.ServerValue.TIMESTAMP;
        this.firebase.update(routineUpdate);
        var entriesRef = this.firebase.child('entries');
        var entriesUpdate = {
            routine: entry.routine.name,
            lifts: entry.liftEntries,
            createdTime: Firebase.ServerValue.TIMESTAMP
        };
        var key = entriesRef.push(entriesUpdate).key();
        return key;
    };
    FirebaseService.prototype.getRoutineEntry = function (id) {
        var _this = this;
        var entriesRef = this.firebase.child("entries/" + id);
        return new Promise(function (resolve, reject) {
            entriesRef.once('value', function (e) {
                var entry = e.val();
                _this.firebase.child("routines/" + entry.routine).once('value', function (l) {
                    resolve(routine_entry_1.RoutineEntry.fromJson(e.key(), l.val(), entry));
                }, reject);
            }, reject);
        });
    };
    FirebaseService.prototype.getRoutines = function () {
        var routinesRef = this.firebase.child('routines/');
        return new Promise(function (resolve, reject) {
            routinesRef.orderByKey().once('value', function (r) {
                var routines = r.val();
                resolve(Object.keys(routines).map(function (k) { return routine_1.Routine.fromJson(routines[k]); }));
            }, reject);
        });
    };
    FirebaseService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FirebaseService);
    return FirebaseService;
})();
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=firebase-service.js.map