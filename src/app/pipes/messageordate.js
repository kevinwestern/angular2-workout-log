System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MessageOrDate;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MessageOrDate = (function () {
                function MessageOrDate() {
                }
                MessageOrDate.prototype.transform = function (value, args) {
                    if (value) {
                        var now = moment();
                        var diff = now.diff(value, 'days');
                        if (diff) {
                            return diff + " days ago";
                        }
                        var minutes = now.diff(value, 'minutes');
                        if (minutes > 60) {
                            return now.diff(value, 'hours') + ' hours ago';
                        }
                        else if (minutes) {
                            return minutes + " minutes ago";
                        }
                        else {
                            return now.diff(value, 'seconds') + ' seconds ago';
                        }
                    }
                    return args[0];
                };
                MessageOrDate = __decorate([
                    core_1.Pipe({ name: 'messageOrDate' }), 
                    __metadata('design:paramtypes', [])
                ], MessageOrDate);
                return MessageOrDate;
            })();
            exports_1("MessageOrDate", MessageOrDate);
        }
    }
});
//# sourceMappingURL=messageordate.js.map