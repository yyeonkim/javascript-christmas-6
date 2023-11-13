import { MENU } from "../src/constants/menu.js";
import { OUTPUT } from "../src/constants/output.js";
import Giveaways from "../src/models/Giveaways.js";

describe("증정품 객체 테스트", () => {
  test("주문 금액이 12만원 이상이면 샴페인 1개를 증정한다.", () => {
    const giveaways = Giveaways.giveBasedOn(150000);

    expect(giveaways.name).toEqual(MENU.CHAMPAGNE);
  });

  test("주문 금액이 12만원 미만이면 증정품이 없다.", () => {
    const giveaways = Giveaways.giveBasedOn(100000);

    expect(giveaways.name).toEqual(OUTPUT.NOTHING);
  });
});
