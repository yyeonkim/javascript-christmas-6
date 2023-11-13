import { MENU, MENU_TYPE } from "../src/constants/menu.js";
import Menu from "../src/models/Menu.js";

const soup = new Menu(MENU.SOUP);

describe("메뉴 클래스 테스트", () => {
  test("메뉴 개수 만큼 주문 금액을 계산한다.", () => {
    const price = soup.computePrice(2);
    expect(price).toEqual(12000);
  });

  test("메뉴의 유형을 알려준다.", () => {
    expect(soup.getType()).toEqual(MENU_TYPE.APPETIZER);
  });
});
