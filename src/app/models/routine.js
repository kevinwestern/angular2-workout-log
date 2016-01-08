var lift_1 = require('./lift');
var Routine = (function () {
    function Routine(name, lifts, lastCompletedTime) {
        this.name = name;
        this.lifts = lifts;
        this.lastCompletedTime = lastCompletedTime;
    }
    Routine.prototype.toJson = function () {
        return {
            name: this.name,
            lifts: this.lifts.map(function (lift) { return lift.toJson(); }),
            lastCompletedTime: this.lastCompletedTime
        };
    };
    Routine.fromJson = function (json) {
        return new Routine(json.name, json.lifts.map(lift_1.Lift.fromJson), json.lastCompletedTime);
    };
    return Routine;
})();
exports.Routine = Routine;
//# sourceMappingURL=routine.js.map