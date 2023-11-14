import { MissionUtils } from "@woowacourse/mission-utils";
import { MENU } from "../src/constants/menu";
import { OUTPUT } from "../src/constants/output";
import { BADGE } from "../src/constants/event.js";
import OutputView from "../src/views/OutputView";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();

  return logSpy;
};

describe("출력 테스트", () => {
  let logSpy;

  beforeEach(() => {
    logSpy = getLogSpy();
  });

  test("주문 메뉴를 출력한다.", () => {
    const order = [
      {
        name: MENU.SEAFOOD_PASTA,
        count: 1,
      },
      {
        name: MENU.WINE,
        count: 2,
      },
    ];
    const logs = ["해산물파스타 1개", "레드와인 2개"];

    OutputView.printOrder(order);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("할인 전 총주문 금액을 출력한다.", () => {
    OutputView.printPriceBeforeDiscount(12000);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("12,000원"));
  });

  const giveawaysCases = [
    [
      {
        name: "없음",
        count: 0,
      },
      "없음",
    ],
    [
      {
        name: "샴페인",
        count: 1,
      },
      "샴페인 1개",
    ],
  ];

  test.each(giveawaysCases)("증정 메뉴를 출력한다.", (giveaways, str) => {
    OutputView.printGiveaways(giveaways);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(str));
  });

  test("고객에게 적용된 혜택 내역을 출력한다.", () => {
    const event = {
      [OUTPUT.D_DAY_DISCOUNT]: 1200,
      [OUTPUT.WEEKDAY_DISCOUNT]: 4046,
      [OUTPUT.WEEKEND_DISCOUNT]: 0,
      [OUTPUT.SPECIAL_DISCOUNT]: 1000,
      [OUTPUT.GIVEAWAYS_EVENT]: 0,
    };
    const logs = [
      "크리스마스 디데이 할인",
      "평일 할인",
      "특별 할인",
      "-1,200원",
      "-4,046원",
      "-1,000원",
    ];

    OutputView.printDiscountPerEvent(event);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("혜택 내역이 없으면 없음으로 출력된다.", () => {
    const event = {
      [OUTPUT.D_DAY_DISCOUNT]: 0,
      [OUTPUT.WEEKDAY_DISCOUNT]: 0,
      [OUTPUT.WEEKEND_DISCOUNT]: 0,
      [OUTPUT.SPECIAL_DISCOUNT]: 0,
      [OUTPUT.GIVEAWAYS_EVENT]: 0,
    };

    OutputView.printDiscountPerEvent(event);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("없음"));
  });

  const discountCases = [
    [31246, "-31,246원"],
    [0, "0원"],
  ];

  test.each(discountCases)("총혜택 금액을 출력한다.", (discount, str) => {
    OutputView.printTotalDiscount(discount);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(str));
  });

  test("할인 후 예상 결제 금액을 출력한다.", () => {
    OutputView.printFinalPrice(135754);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("135,754원"));
  });

  test("이벤트 매지를 출력한다.", () => {
    OutputView.printBadge(BADGE.STAR);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("별"));
  });
});
