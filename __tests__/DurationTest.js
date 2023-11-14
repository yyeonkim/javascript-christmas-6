import Duration from "../src/models/Duration.js";

describe("기간 클래스 테스트", () => {
  const duration = new Duration(25);

  test("방문 날짜가 크리스마스를 안 지났는지 확인한다.", () => {
    expect(duration.isUntilChristmas()).toBe(true);
  });

  test("방문 날짜가 평일인지 확인한다.", () => {
    expect(duration.isWeekday()).toBe(true);
  });

  test("방문 날짜가 주말인지 확인한다.", () => {
    expect(duration.isWeekend()).toBe(false);
  });

  test("방문 날짜가 크리스마스인지 확인한다.", () => {
    expect(duration.isChristmas()).toBe(true);
  });
});
