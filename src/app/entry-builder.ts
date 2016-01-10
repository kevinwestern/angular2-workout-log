import {Entry, Lift, LiftSet, Routine} from './models';

export default {
  createEntryFromPreviousEntry(entry: Entry): Entry {
    return {
      timestamp: Date.now(),
      lifts: entry.lifts.map(liftEntry => {
        return {
          lift: liftEntry.lift,
          sets: this.buildSetFromPreviousSets(liftEntry.sets, liftEntry.lift)
        };
      })
    };
  },
  
  buildSetFromPreviousSets(liftSets: LiftSet[], lift: Lift): LiftSet[] {
    const sets: LiftSet[] = [];
    let i = 0;
    for (; i < liftSets.length - 1; i++) {
      sets.push(this.getNewSet(liftSets[i], liftSets[i+1], lift));
    }
    if (this.shouldIncrease(liftSets[i], lift)) {
      sets.push({
        suggestedReps: lift.suggestedReps,
        suggestedWeight: (liftSets[i].actualWeight || liftSets[i].suggestedWeight) + 5
      });
    } else {
      sets.push({
        suggestedReps: lift.suggestedReps,
        suggestedWeight: liftSets[i].suggestedWeight
      });
    }
    return sets;
  },
  
  didIncreaseWeight(firstSet: LiftSet, secondSet: LiftSet): boolean {
    return (secondSet.actualWeight || secondSet.suggestedWeight) > (firstSet.actualWeight || firstSet.suggestedWeight);
  },
  
  didMeetTargets(set: LiftSet, lift: Lift): boolean {
    return (set.actualReps || set.suggestedReps) - lift.suggestedReps >= -1;
  },
  
  shouldIncrease(firstSet: LiftSet, lift: Lift): boolean {
    return this.didMeetTargets(firstSet, lift);
  },
  
  getNewSet(firstSet: LiftSet, secondSet: LiftSet, lift: Lift): LiftSet {
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
 
  getMostRecentEntry(entries: Entry[], timestamp: number): Entry {
    return entries.reduce((prev, current) => {
      if (!prev) {
        return prev;
      }
      const prevDiff = Math.abs(timestamp - prev.timestamp);
      const currDiff = Math.abs(timestamp - current.timestamp);
      return prevDiff < currDiff ? prev : current;
    })
  },
};