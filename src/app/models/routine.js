var lift_1 = require('./lift');
var Routine = (function () {
    function Routine(name, lifts, lastCompletedTime) {
        if (lastCompletedTime === void 0) { lastCompletedTime = 'No last recorded time.'; }
        this.name = name;
        this.lifts = lifts;
        this.lastCompletedTime = lastCompletedTime;
    }
    Routine.fromJson = function (json) {
        return new Routine(json.name, json.lifts.map(lift_1.Lift.fromJson), json.lastCompletedTime);
    };
    return Routine;
})();
exports.Routine = Routine;
//# sourceMappingURL=routine.js.map