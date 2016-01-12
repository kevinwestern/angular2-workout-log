System.register([], function(exports_1) {
    return {
        setters:[],
        execute: function() {
            exports_1("default",{
                createEntryFromPreviousEntry: function (entry) {
                    var _this = this;
                    return {
                        timestamp: Date.now(),
                        lifts: entry.lifts.map(function (liftEntry) {
                            return {
                                lift: liftEntry.lift,
                                sets: _this.buildSetFromPreviousSets(liftEntry.sets, liftEntry.lift)
                            };
                        })
                    };
                },
                buildSetFromPreviousSets: function (liftSets, lift) {
                    var sets = [];
                    var i = 0;
                    for (; i < liftSets.length - 1; i++) {
                        sets.push(this.getNewSet(liftSets[i], liftSets[i + 1], lift));
                    }
                    if (this.shouldIncrease(liftSets[i], lift)) {
                        sets.push({
                            suggestedReps: lift.suggestedReps,
                            suggestedWeight: (liftSets[i].actualWeight || liftSets[i].suggestedWeight) + 5
                        });
                    }
                    else {
                        sets.push({
                            suggestedReps: lift.suggestedReps,
                            suggestedWeight: liftSets[i].suggestedWeight
                        });
                    }
                    return sets;
                },
                didIncreaseWeight: function (firstSet, secondSet) {
                    return (secondSet.actualWeight || secondSet.suggestedWeight) > (firstSet.actualWeight || firstSet.suggestedWeight);
                },
                didMeetTargets: function (set, lift) {
                    return (set.actualReps || set.suggestedReps) - lift.suggestedReps >= -1;
                },
                shouldIncrease: function (firstSet, lift) {
                    return this.didMeetTargets(firstSet, lift);
                },
                getNewSet: function (firstSet, secondSet, lift) {
                    if (this.shouldIncrease(firstSet, lift)) {
                        return {
                            suggestedReps: lift.suggestedReps,
                            suggestedWeight: (secondSet.actualWeight || secondSet.suggestedWeight)
                        };
                    }
                    return {
                        suggestedReps: lift.suggestedReps,
                        suggestedWeight: firstSet.suggestedWeight
                    };
                },
                getMostRecentEntry: function (entries, timestamp) {
                    return entries.reduce(function (prev, current) {
                        if (!prev) {
                            return prev;
                        }
                        var prevDiff = Math.abs(timestamp - prev.timestamp);
                        var currDiff = Math.abs(timestamp - current.timestamp);
                        return prevDiff < currDiff ? prev : current;
                    });
                },
            });
        }
    }
});
//# sourceMappingURL=entry-builder.js.map