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
var routine_service_1 = require('../../services/routine-service');
var angular2_2 = require('angular2/angular2');
var router_1 = require('angular2/router');
/**
 * Creates a numeric array of a given length with default values
 * of index+1.
 */
var RangePipe = (function () {
    function RangePipe() {
    }
    RangePipe.prototype.transform = function (value) {
        var arr = [];
        for (var i = 0; i < value; i++) {
            arr.push(i + 1);
        }
        return arr;
    };
    RangePipe = __decorate([
        angular2_1.Pipe({
            name: 'range'
        }), 
        __metadata('design:paramtypes', [])
    ], RangePipe);
    return RangePipe;
})();
var CollapsableItem = (function () {
    function CollapsableItem(element) {
        this.element = element;
        this.isCollapsed = element.nativeElement.classList.contains('collapsed');
    }
    CollapsableItem.prototype.toggleCollapse = function () {
        this.isCollapsed = !this.isCollapsed;
        this.element.nativeElement.classList.toggle('collapsed');
    };
    CollapsableItem = __decorate([
        angular2_1.Directive({
            selector: '[collapsable-item]',
            host: {
                '(click)': 'toggleCollapse()'
            }
        }), 
        __metadata('design:paramtypes', [angular2_1.ElementRef])
    ], CollapsableItem);
    return CollapsableItem;
})();
var RoutineLogger = (function () {
    function RoutineLogger(params, routineService) {
        var id = parseInt(params.get('id'), 10);
        this.routine = routineService.get(id);
    }
    RoutineLogger.prototype.getMaxRepsForSet = function (lift, set) {
        return 6;
    };
    RoutineLogger.prototype.getWeightForSet = function (lift, set) {
        return 300;
    };
    RoutineLogger = __decorate([
        angular2_1.Component({
            selector: 'routine-logger',
            templateUrl: '/src/app/components/routine-logger/routine-logger.html',
            directives: [angular2_1.NgFor, router_1.ROUTER_DIRECTIVES, CollapsableItem],
            pipes: [RangePipe],
            encapsulation: angular2_2.ViewEncapsulation.Emulated,
            styles: ["\n    :host {\n      display: block;\n    }\n    \n    .lift {\n      font-size: 18px;\n    }\n    \n    .short-input {\n      width: 50px;\n      border: none;\n      margin-left: .5em;\n    }\n    \n    .lift-set {\n      line-height: 2em;\n    }\n    \n    .sets {\n      opacity: 1;\n      transition: opacity .2s, transform .2s;\n    }\n    \n    .collapsed {\n      opacity: 0;\n      transform: translateY(-100px);\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.RouteParams, routine_service_1.RoutineService])
    ], RoutineLogger);
    return RoutineLogger;
})();
exports.RoutineLogger = RoutineLogger;
//# sourceMappingURL=routine-logger.js.map