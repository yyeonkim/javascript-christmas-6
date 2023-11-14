import { Console } from "@woowacourse/mission-utils";
import { EOL as LINE_SEPARATOR } from "os";
import { OUTPUT } from "../constants/output";

const OutputView = {
  printPreview() {
    Console.print(OUTPUT.TITLE + LINE_SEPARATOR);
  },

  /**
   * 주문 메뉴 출력
   * @param {Object[]} order
   * @param {string} order[].name - 메뉴 이름
   * @param {number} order[].count - 메뉴 개수
   */
  printOrder(order) {
    Console.print(OUTPUT.ORDER);

    let str = "";
    order.forEach((item) => {
      str += `${item.name} ${item.count}개` + LINE_SEPARATOR;
    });

    Console.print(str);
  },

  printPriceBeforeDiscount(price) {
    Console.print(OUTPUT.PRICE_BEFORE_DISCOUNT);

    const formatted = Intl.NumberFormat().format(price);
    Console.print(`${formatted}원` + LINE_SEPARATOR);
  },

  /**
   * 증정 메뉴 출력
   * @param {Object} giveaways
   * @param {string} giveaways.name
   * @param {number} giveaways.count
   */
  printGiveaways(giveaways) {
    Console.print(OUTPUT.GIVEAWAYS);

    let str = OUTPUT.NOTHING;
    if (giveaways.name !== OUTPUT.NOTHING) {
      str = `${giveaways.name} ${giveaways.count}개`;
    }
    str += LINE_SEPARATOR;

    Console.print(str);
  },

  /**
   * 혜택 내역 출력
   * @param {Object} event
   * @param {number} event[OUTPUT.D_DAY_DISCOUNT]
   * @param {number} event[OUTPUT.WEEKDAY_DISCOUNT]
   * @param {number} event[OUTPUT.WEEKEND_DISCOUNT]
   * @param {number} event[OUTPUT.GIVEAWAYS_EVENT]
   * @param {number} event[OUTPUT.SPECIAL_DISCOUNT]
   */
  printDiscountPerEvent(event) {
    Console.print(OUTPUT.DISCOUNT);

    let str = "";
    for (const [key, value] of Object.entries(event)) {
      const formatted = Intl.NumberFormat().format(value);
      if (value !== 0) str += `${key}: -${formatted}원` + LINE_SEPARATOR;
    }

    if (str.length === 0) str = OUTPUT.NOTHING;
    Console.print(str);
  },

  printTotalDiscount(discount) {
    Console.print(OUTPUT.TOTLA_DISCOUNT);

    let str = "0원";
    const formatted = Intl.NumberFormat().format(discount);
    if (discount !== 0) str = `-${formatted}원`;

    Console.print(str + LINE_SEPARATOR);
  },

  /* 할인 후 예상 결제 금액 출력 */
  printFinalPrice(price) {
    Console.print(OUTPUT.FINAL_PRICE);

    const formatted = Intl.NumberFormat().format(price);
    Console.print(`${formatted}원` + LINE_SEPARATOR);
  },

  printBadge(badge) {
    Console.print(OUTPUT.BADGE);
    Console.print(badge + LINE_SEPARATOR);
  },
};

export default OutputView;
