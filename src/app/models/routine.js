var Routine = (function () {
    function Routine(name, lifts, lastCompletedTime) {
        if (lastCompletedTime === void 0) { lastCompletedTime = 'No last recorded time.'; }
        this.name = name;
        this.lifts = lifts;
        this.lastCompletedTime = lastCompletedTime;
    }
    return Routine;
})();
exports.Routine = Routine;
//# sourceMappingURL=routine.js.map