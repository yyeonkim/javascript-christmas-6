import DDayDiscount from "../models/DDayDiscount.js";
import WeekdayDiscount from "../models/WeekdayDiscount.js";
import { MENU_TYPE } from "../constants/menu.js";
import { day } from "../constants/day.js";
import Giveaways from "../models/Giveaways.js";
import WeekendDiscount from "../models/WeekendDiscount.js";
import SpecialDiscount from "../models/SpecialDiscount.js";

class EventController {
  #date;
  #price; // 총주문 금액
  #requiredPrice = 10000;
  // 유형별 주문한 메뉴 개수
  #menuCountPerType = {
    [MENU_TYPE.APPETIZER]: 0,
    [MENU_TYPE.MAIN]: 0,
    [MENU_TYPE.DESSERT]: 0,
    [MENU_TYPE.BEVERAGES]: 0,
  };

  constructor(date, price, menuCountPerType) {
    this.#date = date;
    this.#price = price;
    this.#menuCountPerType = menuCountPerType;
  }

  computeTotalDiscount() {
    if (this.#price >= this.#requiredPrice) {
      // 이벤트 적용
      const discount = this.computeEach();
      const total = Object.values(discount).reduce(
        (acc, current) => acc + current,
        0
      );

      return total;
    }

    return 0;
  }

  computeEach() {
    const dessertCount = this.#menuCountPerType[MENU_TYPE.DESSERT];
    const mainCount = this.#menuCountPerType[MENU_TYPE.MAIN];
    const day = this.getDay(this.#date);
    const { price, count } = Giveaways.giveBasedOn(this.#price);

    return {
      dDay: DDayDiscount.giveIf(this.#date),
      weekday: WeekdayDiscount.giveBasedOn(dessertCount, day),
      weekend: WeekendDiscount.giveBasedOn(mainCount, day),
      giveaways: price * count,
      special: SpecialDiscount.giveBasedOn(this.#date),
    };
  }

  getDay() {
    const index = new Date(`2023-12-${this.#date}`).getDay();

    return day[index];
  }
}

export default EventController;