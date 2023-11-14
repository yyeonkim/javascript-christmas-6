import { MENU_TYPE } from "../src/constants/menu.js";
import WeekdayDiscount from "../src/models/WeekdayDiscount.js";

describe("평일 할인 테스트", () => {
  const menuCountPerType = {
    [MENU_TYPE.APPETIZER]: 1,
    [MENU_TYPE.MAIN]: 2,
    [MENU_TYPE.DESSERT]: 1,
    [MENU_TYPE.BEVERAGES]: 1,
  };

  test("일요일부터 목요일까지 평일 할인이 적용된다.", () => {
    const dates = [3, 4, 5, 6, 7];

    dates.forEach((date) => {
      expect(WeekdayDiscount.giveIf(date, menuCountPerType)).toEqual(2023);
    });
  });

  test("금요일과 토요일에는 평일 할인이 적용되지 않는다.", () => {
    const dates = [8, 9];

    dates.forEach((date) => {
      expect(WeekdayDiscount.giveIf(date, menuCountPerType)).toEqual(0);
    });
  });
});
