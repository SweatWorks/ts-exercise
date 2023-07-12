import { calculateScore } from "../src/calculateScore";

describe('Bowling Score', () => {
  test('should be 0 if all the rolls are 0', () => {
    const rolls = [
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
    ]



    expect(calculateScore(rolls)).toBe(0);
  });
});