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
var core_1 = require('angular2/core');
var MessageOrDate = (function () {
    function MessageOrDate() {
    }
    MessageOrDate.prototype.transform = function (value, args) {
        if (value) {
            var diff = moment().diff(value, 'days');
            return diff ? ' days ago' : 'Recorded today.';
        }
        return args[0];
    };
    MessageOrDate = __decorate([
        core_1.Pipe({ name: 'messageOrDate' }), 
        __metadata('design:paramtypes', [])
    ], MessageOrDate);
    return MessageOrDate;
})();
exports.MessageOrDate = MessageOrDate;
//# sourceMappingURL=messageordate.js.map