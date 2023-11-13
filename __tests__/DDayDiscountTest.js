import DDayDiscount from "../src/models/DDayDiscount.js";

describe("디데인할인 객체 테스트", () => {
  const cases = [
    [1, 1000],
    [25, 3400],
    [27, 0],
  ];

  test.each(cases)("25일까지만 디데이 할인이 적용된다.", (date, discount) => {
    expect(DDayDiscount.giveIf(date)).toEqual(discount);
  });
});
