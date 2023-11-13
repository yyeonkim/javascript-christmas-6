import SpecialDiscount from "../src/models/SpecialDiscount.js";

describe("특별 할인 테스트", () => {
  const applied = [
    [3, 1000],
    [25, 1000],
  ];

  test.each(applied)(
    "크리스마스와 일요일에는 특별 할인이 적용된다.",
    (date, discount) => {
      expect(SpecialDiscount.giveBasedOn(date)).toEqual(discount);
    }
  );

  const notApplied = [
    [11, 0],
    [23, 0],
  ];

  test.each(notApplied)(
    "크리스마스가 아니거나 일요일이 아닌 날에는 특별 할인이 적용되지 않는다. ",
    (date, discount) => {
      expect(SpecialDiscount.giveBasedOn(date)).toEqual(discount);
    }
  );
});
