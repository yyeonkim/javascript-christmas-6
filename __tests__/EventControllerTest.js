import { EVENT } from "../src/constants/event.js";
import { MENU_TYPE } from "../src/constants/menu.js";
import EventController from "../src/controllers/EventController.js";

describe("이벤트 클래스 테스트", () => {
  // 주문 메뉴: 티본, 크리스마스파스타, 아이스크림, 와인, 샐러드
  const count = {
    [MENU_TYPE.APPETIZER]: 1,
    [MENU_TYPE.MAIN]: 2,
    [MENU_TYPE.DESSERT]: 1,
    [MENU_TYPE.BEVERAGES]: 1,
  };
  const event = new EventController(25, 153000, count);

  test("각 이벤트별로 혜택 내역을 계산한다.", () => {
    expect(event.computeEach()).toEqual({
      [EVENT.D_DAY_DISCOUNT]: 3400,
      [EVENT.WEEKDAY_DISCOUNT]: 2023,
      [EVENT.WEEKEND_DISCOUNT]: 0,
      [EVENT.GIVEAWAYS_EVENT]: 25000,
      [EVENT.SPECIAL_DISCOUNT]: 1000,
    });
  });

  test("총 혜택 금액을 계산한다.", () => {
    expect(event.computeTotal()).toEqual(31423);
  });
});
