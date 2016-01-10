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
var seed_data_1 = require('../seed-data');
var AppLocalStorage = (function () {
    function AppLocalStorage() {
        if (!localStorage.getItem('routines')) {
            localStorage.setItem('routines', JSON.stringify(seed_data_1.default));
        }
    }
    AppLocalStorage.prototype.getRoutines = function () {
        return JSON.parse(localStorage.getItem('routines'));
    };
    AppLocalStorage.prototype.saveRoutine = function (routine) {
        var routines = this.getRoutines();
        var index = routines.findIndex(function (r) { return r.name == routine.name; });
        routines[index] = routine;
        localStorage.setItem('routines', JSON.stringify(routines));
    };
    AppLocalStorage = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppLocalStorage);
    return AppLocalStorage;
})();
exports.AppLocalStorage = AppLocalStorage;
/**
 * Database Service provides offline saving to IndexedDB.
 */
var Database = (function () {
    function Database(db) {
        this.db = db;
    }
    Database.prototype.getRoutines = function () {
        // TODO: Check connection
        return Promise.resolve(this.db.getRoutines());
    };
    Database.prototype.saveRoutine = function (routine) {
        this.db.saveRoutine(routine);
    };
    Database.prototype.getRoutineByEntryId = function (id) {
        return this.db.getRoutines()
            .find(function (routine) { return routine.entries && !!routine.entries.find(function (entry) { return entry.timestamp == id; }); });
    };
    Database = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [AppLocalStorage])
    ], Database);
    return Database;
})();
exports.Database = Database;
//# sourceMappingURL=database-service.js.map