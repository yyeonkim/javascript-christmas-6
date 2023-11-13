import { DAY } from "../src/constants/day.js";
import WeekendDiscount from "../src/models/WeekendDiscount.js";

describe("주말 할인 테스트", () => {
  const cases = [
    [2, DAY.FRIDAY, 4046],
    [1, DAY.SATURDAY, 2023],
  ];

  test.each(cases)(
    "금요일과 토요일에는 주말 할인이 적용된다.",
    (mainCount, day, discount) => {
      expect(WeekendDiscount.giveBasedOn(mainCount, day)).toEqual(discount);
    }
  );

  test("금요일이나 토요일이 아니면 주말 할인이 적용되지 않는다.", () => {
    expect(WeekendDiscount.giveBasedOn(3, DAY.MONDAY)).toEqual(0);
  });
});
