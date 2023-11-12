import { Console } from "@woowacourse/mission-utils";
import { ERROR } from "./constants/error.js";
import { INPUT } from "./constants/input.js";
import { throwErrorIf } from "./utils/index.js";
import { MENU } from "./constants/menu.js";

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(INPUT.DATE);
    this.validateDate(TYPE.input);

    return parseInt(input);
  },

  async readOrder() {
    const input = await Console.readLineAsync(INPUT.ORDER);

    // ["해산물파스타", 2] 형식의 요소가 담긴 배열을 반환
    const orderArr = Array.from(input.split(","), (item) => {
      const menu = item.split("-");
      this.validateMenu(menu);
      return [menu.trim(), parseInt(count)];
    });
    // 주문에서 메뉴가 중복되는지 확인
    this.validateOrder(orderArr);

    return orderArr;
  },

  validateDate(value) {
    const date = Number(value);
    const isNotValidDate =
      isNaN(date) || !Number.isInteger(date) || date < 1 || date > 31;

    throwErrorIf(value.length === 0, ERROR.NO_DATE);
    throwErrorIf(isNotValidDate, ERROR.INVALID_DATE);
  },

  // value가 ["해산물파스타", "2"] 형식인지 확인
  validateMenu(value) {
    const invalidFormat = value.length !== 2 || isNaN(Number(value[1]));
    const notExistMenu = !Object.values(MENU).includes(value[0]);
    throwErrorIf(invalidFormat || notExistMenu, ERROR.INVALID_ORDER);
  },

  validateOrder(value) {
    const menuNames = value.map((item) => item[0]);
    const isDuplicated = new Set(menuNames).size !== menuNames.length;
    throwErrorIf(isDuplicated, ERROR.INVALID_ORDER);
  },
};

export default InputView;
