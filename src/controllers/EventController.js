import DDayDiscount from "../models/DDayDiscount.js";
import WeekdayDiscount from "../models/WeekdayDiscount.js";
import Giveaways from "../models/Giveaways.js";
import WeekendDiscount from "../models/WeekendDiscount.js";
import SpecialDiscount from "../models/SpecialDiscount.js";
import { MENU_TYPE } from "../constants/menu.js";
import { EVENT } from "../constants/event.js";

class EventController {
  #orderPrice;
  #requiredPrice = 10000;
  #date;
  // 유형별 주문한 메뉴 개수
  #menuCountPerType = {
    [MENU_TYPE.APPETIZER]: 0,
    [MENU_TYPE.MAIN]: 0,
    [MENU_TYPE.DESSERT]: 0,
    [MENU_TYPE.BEVERAGES]: 0,
  };

  constructor(date, orderPrice, menuCountPerType) {
    this.#date = date;
    this.#orderPrice = orderPrice;
    this.#menuCountPerType = menuCountPerType;
  }

  // 총혜택 금액을 계산한다.
  computeTotal() {
    if (this.#orderPrice >= this.#requiredPrice) {
      const discount = this.computeEach();
      const total = Object.values(discount).reduce(
        (acc, current) => acc + current,
        0
      );

      return total;
    }
    return 0;
  }

  // 이벤트별 혜택 내역을 계산한다.
  computeEach() {
    return {
      [EVENT.D_DAY_DISCOUNT]: this.#computeDDay(),
      [EVENT.WEEKDAY_DISCOUNT]: this.#computeWeekday(),
      [EVENT.WEEKEND_DISCOUNT]: this.#computeWeekend(),
      [EVENT.GIVEAWAYS_EVENT]: this.#computeGiveaways(),
      [EVENT.SPECIAL_DISCOUNT]: this.#computeSpecial(),
    };
  }

  #computeDDay() {
    return DDayDiscount.giveIf(this.#date);
  }
  #computeWeekday() {
    return WeekdayDiscount.giveIf(this.#date, this.#menuCountPerType);
  }
  #computeWeekend() {
    return WeekendDiscount.giveIf(this.#date, this.#menuCountPerType);
  }
  #computeGiveaways() {
    const { price, count } = Giveaways.giveIf(this.#orderPrice);
    return price * count;
  }
  #computeSpecial() {
    return SpecialDiscount.giveIf(this.#date);
  }
}

export default EventController;
