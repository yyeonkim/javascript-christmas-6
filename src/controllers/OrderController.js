import { ERROR } from "../constants/error.js";
import { MENU_TYPE } from "../constants/menu.js";
import Menu from "../models/Menu.js";
import { throwErrorIf } from "../utils/index.js";

class OrderController {
  #order; // 각 메뉴의 {name, count}를 element로 가진 배열

  constructor(order) {
    this.#validate(order);
    this.#order = order;
  }

  #validate(order) {
    const onlyBeverages = this.countMenu(MENU_TYPE.BEVERAGES) === order.length;
    throwErrorIf(order.length > 20 || onlyBeverages, ERROR.INVALID_ORDER);
  }

  computePrice() {
    const price = this.#order.reduce((acc, item) => {
      acc + new Menu(item.name).computePrice(item.count);
    }, 0);

    return price;
  }

  countMenu(type) {
    let count = 0;

    this.#order.forEach((item) => {
      if (new Menu(item.name).getType() === type) count++;
    });

    return count;
  }
}

export default OrderController;
