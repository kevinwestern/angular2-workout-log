var Lift = (function () {
    function Lift(sets, name) {
        this.sets = sets;
        this.name = name;
    }
    Lift.prototype.toJson = function () {
        return {
            sets: this.sets,
            name: this.name
        };
    };
    Lift.fromJson = function (json) {
        return new Lift(json.sets, json.name);
    };
    return Lift;
})();
exports.Lift = Lift;
//# sourceMappingURL=lift.js.map