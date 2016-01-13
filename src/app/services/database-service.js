System.register(['angular2/core', '../seed-data'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, seed_data_1;
    var AppLocalStorage, Database;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (seed_data_1_1) {
                seed_data_1 = seed_data_1_1;
            }],
        execute: function() {
            AppLocalStorage = (function () {
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
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AppLocalStorage);
                return AppLocalStorage;
            })();
            exports_1("AppLocalStorage", AppLocalStorage);
            /**
             * Database Service provides offline saving to IndexedDB.
             */
            Database = (function () {
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
                Database.prototype.getRoutineByName = function (name) {
                    return this.db.getRoutines().find(function (r) { return r.name == name; });
                };
                Database = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [AppLocalStorage])
                ], Database);
                return Database;
            })();
            exports_1("Database", Database);
        }
    }
});
//# sourceMappingURL=database-service.js.map