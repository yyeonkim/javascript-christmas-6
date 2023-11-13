import { ERROR } from "../constants/error.js";
import { MENU_TYPE } from "../constants/menu.js";
import Menu from "../models/Menu.js";
import { throwErrorIf } from "../utils/index.js";

class OrderController {
  #order = []; // 주문한 메뉴의 {name, count}를 element로 가진 배열

  constructor(order) {
    this.#validate(order);
    this.#order = order;
  }

  #validate(order) {
    const beveragesCount = order.reduce((acc, item) => {
      if (new Menu(item.name).getType() === MENU_TYPE.BEVERAGES) return ++acc;
      return acc;
    }, 0);
    const onlyBeverages = beveragesCount === order.length;
    const menuCount = order.reduce((acc, item) => acc + item.count, 0);

    throwErrorIf(menuCount > 20, ERROR.TOO_MANY_MENU_ORDERED);
    throwErrorIf(onlyBeverages, ERROR.NOT_ONLY_BEVERAGES);
  }

  countMenu(type) {
    let count = 0;

    this.#order.forEach((item) => {
      if (new Menu(item.name).getType() === type) count++;
    });

    return count;
  }

  computePrice() {
    const price = this.#order.reduce(
      (acc, item) => acc + new Menu(item.name).computePrice(item.count),
      0
    );

    return price;
  }
}

export default OrderController;
