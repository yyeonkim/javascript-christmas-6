import { DAY } from "../src/constants/date.js";
import WeekdayDiscount from "../src/models/WeekdayDiscount.js";

describe("평일 할인 테스트", () => {
  const applied = [
    [2, DAY.SUNDAY, 4046],
    [1, DAY.MONDAY, 2023],
    [0, DAY.TUESDAY, 0],
    [3, DAY.THURSDAY, 6069],
  ];

  test.each(applied)(
    "일요일부터 목요일까지 평일 할인이 적용된다.",
    (dessertCount, day, discount) => {
      expect(WeekdayDiscount.giveIf(dessertCount, day)).toEqual(discount);
    }
  );

  const notApplied = [
    [2, DAY.FRIDAY, 0],
    [3, DAY.SATURDAY, 0],
  ];

  test.each(notApplied)(
    "금요일과 토요일에는 평일 할인이 적용되지 않는다.",
    (dessertCount, day, discount) => {
      expect(WeekdayDiscount.giveIf(dessertCount, day)).toEqual(discount);
    }
  );
});
