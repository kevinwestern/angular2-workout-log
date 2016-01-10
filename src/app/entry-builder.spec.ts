import entryBuilder from './entry-builder';
import {LiftSet, Lift} from './models';

describe('entry-builder', () => {
  
  const createLiftSet = (suggestedReps: number, suggestedWeight?: number, actualReps?: number, actualWeight?: number): LiftSet => {
    return {
      suggestedReps,
      suggestedWeight,
      actualReps,
      actualWeight
    };
  };
  
  const createLift = (name: string, setCount: number, suggestedReps: number): Lift => {
    return {name, setCount, suggestedReps};
  };
  
  describe('buildSetFromPreviousSets', () => {
    it('should create new sets with increased weights when previous sets increased', () => {
      const sets = [createLiftSet(6, 100, 6, 100), createLiftSet(6, 105, 6, 105), createLiftSet(6, 110, 6, 110)];
      const weights = entryBuilder.buildSetFromPreviousSets(sets, createLift('a', 3, 6)).map(liftSet => liftSet.suggestedWeight);
      expect(weights).toEqual([105, 110, 115]);
    });
    
    describe('when the last weight is not met', () => {
      it('should not increase weight for the last set', () => {
        const sets = [createLiftSet(6, 100, 6, 100), createLiftSet(6, 105, 6, 105), createLiftSet(6, 110, 4, 110)];
        const weights = entryBuilder.buildSetFromPreviousSets(sets, createLift('a', 3, 6)).map(liftSet => liftSet.suggestedWeight);
        expect(weights).toEqual([105, 110, 110]);
      })
    });
  });
  
  describe('didIncreaseWeight', () => {
    it('should return true if more weight was done in the second set', () => {
      expect(entryBuilder.didIncreaseWeight(
        createLiftSet(1, 2), createLiftSet(1, 3)
      )).toBe(true);
      expect(entryBuilder.didIncreaseWeight(
        createLiftSet(1, 2, 3, 4), createLiftSet(1, 2, 3, 5)
      )).toBe(true);
      expect(entryBuilder.didIncreaseWeight(
        createLiftSet(1, 2, 3, 4), createLiftSet(1, 2, 3, 4)
      )).toBe(false);
    });
  });
  
  describe('didMeetTargets', () => {
    it('should return true if the number of target reps were hit, or close to hitting', () => {
      expect(entryBuilder.didMeetTargets(
        createLiftSet(6, 100, 6, 100),
        createLift('a', 1, 6))).toBe(true);
      expect(entryBuilder.didMeetTargets(
        createLiftSet(6, 100, 5, 100),
        createLift('a', 1, 6))).toBe(true);
      expect(entryBuilder.didMeetTargets(
        createLiftSet(6, 100),
        createLift('a', 1, 6))).toBe(true);
      expect(entryBuilder.didMeetTargets(
        createLiftSet(6, 100, 4, 100),
        createLift('a', 1, 6))).toBe(false);
    });
  });
  
  describe('shouldIncrease', () => {
    it('should return true when target reps have been hit', () => {
      console.log('dah')
      expect(entryBuilder.shouldIncrease(
        createLiftSet(6, 100, 6, 100),
        createLift('a', 1, 6)
      )).toBe(true);
      
      expect(entryBuilder.shouldIncrease(
        createLiftSet(6, 100, 4, 100),
        createLift('a', 1, 6)
      )).toBe(false);
    });
  });
  
  describe('getNewSet', () => {
    it('should have a higher suggestedWeight if weights should be increased', () => {
      expect(entryBuilder.getNewSet(
        createLiftSet(6, 100, 6, 100),
        createLiftSet(6, 105, 6, 105),
        createLift('a', 1, 6)
      ).suggestedWeight).toBe(105);
    });
    
    it('should reuse the suggestedWeight of the first set if weights should not be increased', () => {
      expect(entryBuilder.getNewSet(
        createLiftSet(6, 100, 6, 100),
        createLiftSet(6, 105, 4, 105),
        createLift('a', 1, 6)
      ).suggestedWeight).toBe(105);
    });
  });
  
  describe('getMostRecentEntry', () => {
    let entries = [];
    
    beforeAll(() => {
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
    
    it('should get the most recent entry', () => {
      expect(entryBuilder.getMostRecentEntry(entries, 6).timestamp).toBe(5);
      expect(entryBuilder.getMostRecentEntry(entries, 8).timestamp).toBe(10);
    });
  });
});