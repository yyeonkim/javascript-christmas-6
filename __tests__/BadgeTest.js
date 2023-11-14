import { BADGE } from "../src/constants/event.js";
import Badge from "../src/models/Badge.js";

describe("배지 테스트", () => {
  const cases = [
    [30000, BADGE.SANTA],
    [15000, BADGE.TREE],
    [6000, BADGE.STAR],
  ];

  test.each(cases)("총혜택 금액에 따라 배지를 부여한다.", (discount, badge) => {
    expect(Badge.grant(discount)).toEqual(badge);
  });
});
