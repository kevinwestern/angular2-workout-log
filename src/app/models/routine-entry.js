var RoutineEntry = (function () {
    function RoutineEntry(routine) {
        this.routine = routine;
        this.liftEntries = this.createLiftEntries(routine);
    }
    RoutineEntry.prototype.createLiftEntries = function (routine) {
        var result = [];
        routine.lifts.forEach(function (lift) {
            result.push(new LiftEntry(lift, 3, 130));
        });
        return result;
    };
    return RoutineEntry;
})();
exports.RoutineEntry = RoutineEntry;
var LiftEntry = (function () {
    function LiftEntry(lift, numberOfSets, suggestedWeight) {
        this.lift = lift;
        this.suggestedWeight = suggestedWeight;
        this.sets = [];
        for (var i = 0; i < numberOfSets; i++) {
            this.sets.push(new SetEntry(3, suggestedWeight += 5));
        }
    }
    return LiftEntry;
})();
exports.LiftEntry = LiftEntry;
var SetEntry = (function () {
    function SetEntry(suggestedReps, suggestedWeight) {
        this.suggestedReps = suggestedReps;
        this.actualReps = suggestedReps;
        this.suggestedWeight = suggestedWeight;
        this.actualWeight = suggestedWeight;
    }
    return SetEntry;
})();
exports.SetEntry = SetEntry;
//# sourceMappingURL=routine-entry.js.map