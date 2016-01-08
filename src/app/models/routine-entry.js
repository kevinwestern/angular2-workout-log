var lift_1 = require('./lift');
var routine_1 = require('./routine');
var RoutineEntry = (function () {
    function RoutineEntry(routine, entries, id) {
        this.routine = routine;
        this.liftEntries = entries || this.createLiftEntries(routine);
        this.id = id;
    }
    RoutineEntry.prototype.createLiftEntries = function (routine) {
        var result = [];
        routine.lifts.forEach(function (lift) {
            result.push(new LiftEntry(lift, LiftEntry.createSetsFromSuggestions(3, 130)));
        });
        return result;
    };
    RoutineEntry.prototype.toJson = function () {
        return {
            routine: this.routine.toJson(),
            liftEntries: this.liftEntries.map(function (le) { return le.toJson(); }),
            id: this.id
        };
    };
    RoutineEntry.fromJson = function (id, routine, entry) {
        return new RoutineEntry(routine_1.Routine.fromJson(routine), LiftEntry.fromJson(entry), id);
    };
    return RoutineEntry;
})();
exports.RoutineEntry = RoutineEntry;
var LiftEntry = (function () {
    function LiftEntry(lift, sets, createdTime) {
        this.lift = lift;
        this.sets = sets;
        if (createdTime) {
            this.createdTime = createdTime;
        }
    }
    LiftEntry.prototype.toJson = function () {
        return {
            lift: this.lift.toJson(),
            sets: this.sets.map(function (set) { return set.toJson(); }),
            createdTime: this.createdTime
        };
    };
    LiftEntry.createSetsFromSuggestions = function (numberOfSets, suggestedWeight) {
        var sets = [];
        for (var i = 0; i < numberOfSets; i++) {
            sets.push(new SetEntry(6, suggestedWeight += 5));
        }
        return sets;
    };
    LiftEntry.fromJson = function (entry) {
        return entry.liftEntries.map(function (e) {
            return new LiftEntry(lift_1.Lift.fromJson(e.lift), e.sets.map(SetEntry.fromJson), e.createdTime);
        });
    };
    return LiftEntry;
})();
exports.LiftEntry = LiftEntry;
var SetEntry = (function () {
    function SetEntry(suggestedReps, suggestedWeight, actualReps, actualWeight) {
        this.suggestedReps = suggestedReps;
        this.actualReps = actualReps;
        this.suggestedWeight = suggestedWeight;
        this.actualWeight = actualWeight;
    }
    SetEntry.prototype.toJson = function () {
        return {
            suggestedReps: this.suggestedReps,
            actualReps: this.actualReps,
            suggestedWeight: this.suggestedWeight,
            actualWeight: this.actualWeight
        };
    };
    SetEntry.fromJson = function (json) {
        return new SetEntry(json.suggestedReps, json.suggestedWeight, json.actualReps, json.actualWeight);
    };
    return SetEntry;
})();
exports.SetEntry = SetEntry;
//# sourceMappingURL=routine-entry.js.map