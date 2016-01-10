var entry_builder_1 = require('./entry-builder');
describe('entry-builder', function () {
    var createLiftSet = function (suggestedReps, suggestedWeight, actualReps, actualWeight) {
        return {
            suggestedReps: suggestedReps,
            suggestedWeight: suggestedWeight,
            actualReps: actualReps,
            actualWeight: actualWeight
        };
    };
    var createLift = function (name, setCount, suggestedReps) {
        return { name: name, setCount: setCount, suggestedReps: suggestedReps };
    };
    describe('buildSetFromPreviousSets', function () {
        it('should create new sets with increased weights when previous sets increased', function () {
            var sets = [createLiftSet(6, 100, 6, 100), createLiftSet(6, 105, 6, 105), createLiftSet(6, 110, 6, 110)];
            var weights = entry_builder_1.default.buildSetFromPreviousSets(sets, createLift('a', 3, 6)).map(function (liftSet) { return liftSet.suggestedWeight; });
            expect(weights).toEqual([105, 110, 115]);
        });
        describe('when the last weight is not met', function () {
            it('should not increase weight for the last set', function () {
                var sets = [createLiftSet(6, 100, 6, 100), createLiftSet(6, 105, 6, 105), createLiftSet(6, 110, 4, 110)];
                var weights = entry_builder_1.default.buildSetFromPreviousSets(sets, createLift('a', 3, 6)).map(function (liftSet) { return liftSet.suggestedWeight; });
                expect(weights).toEqual([105, 110, 110]);
            });
        });
    });
    describe('didIncreaseWeight', function () {
        it('should return true if more weight was done in the second set', function () {
            expect(entry_builder_1.default.didIncreaseWeight(createLiftSet(1, 2), createLiftSet(1, 3))).toBe(true);
            expect(entry_builder_1.default.didIncreaseWeight(createLiftSet(1, 2, 3, 4), createLiftSet(1, 2, 3, 5))).toBe(true);
            expect(entry_builder_1.default.didIncreaseWeight(createLiftSet(1, 2, 3, 4), createLiftSet(1, 2, 3, 4))).toBe(false);
        });
    });
    describe('didMeetTargets', function () {
        it('should return true if the number of target reps were hit, or close to hitting', function () {
            expect(entry_builder_1.default.didMeetTargets(createLiftSet(6, 100, 6, 100), createLift('a', 1, 6))).toBe(true);
            expect(entry_builder_1.default.didMeetTargets(createLiftSet(6, 100, 5, 100), createLift('a', 1, 6))).toBe(true);
            expect(entry_builder_1.default.didMeetTargets(createLiftSet(6, 100), createLift('a', 1, 6))).toBe(true);
            expect(entry_builder_1.default.didMeetTargets(createLiftSet(6, 100, 4, 100), createLift('a', 1, 6))).toBe(false);
        });
    });
    describe('shouldIncrease', function () {
        it('should return true when target reps have been hit', function () {
            console.log('dah');
            expect(entry_builder_1.default.shouldIncrease(createLiftSet(6, 100, 6, 100), createLift('a', 1, 6))).toBe(true);
            expect(entry_builder_1.default.shouldIncrease(createLiftSet(6, 100, 4, 100), createLift('a', 1, 6))).toBe(false);
        });
    });
    describe('getNewSet', function () {
        it('should have a higher suggestedWeight if weights should be increased', function () {
            expect(entry_builder_1.default.getNewSet(createLiftSet(6, 100, 6, 100), createLiftSet(6, 105, 6, 105), createLift('a', 1, 6)).suggestedWeight).toBe(105);
        });
        it('should reuse the suggestedWeight of the first set if weights should not be increased', function () {
            expect(entry_builder_1.default.getNewSet(createLiftSet(6, 100, 6, 100), createLiftSet(6, 105, 4, 105), createLift('a', 1, 6)).suggestedWeight).toBe(105);
        });
    });
    describe('getMostRecentEntry', function () {
        var entries = [];
        beforeAll(function () {
            entries = [{
                    timestamp: 5,
                    lifts: []
                }, {
                    timestamp: 10,
                    lifts: []
                }, {
                    timestamp: 1,
                    lifts: []
                }];
        });
        it('should get the most recent entry', function () {
            expect(entry_builder_1.default.getMostRecentEntry(entries, 6).timestamp).toBe(5);
            expect(entry_builder_1.default.getMostRecentEntry(entries, 8).timestamp).toBe(10);
        });
    });
});
//# sourceMappingURL=entry-builder.spec.js.map