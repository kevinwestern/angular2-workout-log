var Routine = (function () {
    function Routine(id, name, lifts, lastCompletedTime) {
        if (lastCompletedTime === void 0) { lastCompletedTime = 'No last recorded time.'; }
        this.id = id;
        this.name = name;
        this.lifts = lifts;
        this.lastCompletedTime = lastCompletedTime;
    }
    return Routine;
})();
exports.Routine = Routine;
//# sourceMappingURL=routine.js.map