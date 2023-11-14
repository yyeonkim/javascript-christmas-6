import { MENU, MENU_TYPE } from "../src/constants/menu.js";
import OrderController from "../src/controllers/OrderController.js";

describe("주문 클래스 테스트", () => {
  const order = [
    {
      name: MENU.STAKE,
      count: 1,
    },
    {
      name: MENU.SALAD,
      count: 1,
    },
    {
      name: MENU.SEAFOOD_PASTA,
      count: 1,
    },
    {
      name: MENU.CHAMPAGNE,
      count: 1,
    },
  ];

  const orderController = new OrderController(order);

  test("총 주문 금액을 계산한다.", () => {
    const price = orderController.computePrice();

    expect(price).toEqual(123000);
  });

  test("주문한 메뉴의 개수를 유형별로 알려준다.", () => {
    const count = orderController.countMenuPerType();
    const expectCount = {
      [MENU_TYPE.APPETIZER]: 1,
      [MENU_TYPE.MAIN]: 2,
      [MENU_TYPE.DESSERT]: 0,
      [MENU_TYPE.BEVERAGES]: 1,
    };

    expect(count).toEqual(expectCount);
  });
});

describe("주문 클래스 예외 테스트", () => {
  test("주문 메뉴 개수가 20개를 넘으면 에러를 던진다.", () => {
    const order = [
      {
        name: MENU.SALAD,
        count: 10,
      },
      {
        name: MENU.ICE_CREAM,
        count: 11,
      },
    ];

    expect(() => {
      new OrderController(order);
    }).toThrow("[ERROR]");
  });

  test("음료만 주문하면 에러를 던진다.", () => {
    const order = [
      {
        name: MENU.WINE,
        count: 3,
      },
    ];

    expect(() => {
      new OrderController(order);
    }).toThrow("[ERROR]");
  });
});
