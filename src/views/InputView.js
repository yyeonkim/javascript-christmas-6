import { Console } from "@woowacourse/mission-utils";
import { ERROR } from "../constants/error.js";
import { INPUT } from "../constants/input.js";
import { throwErrorIf } from "../utils/index.js";
import { MENU } from "../constants/menu.js";

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(INPUT.DATE);
    this.validateDate(input);

    return parseInt(input);
  },

  validateDate(value) {
    const date = Number(value);
    const isNotValidDate =
      isNaN(date) || !Number.isInteger(date) || date < 1 || date > 31;

    throwErrorIf(value.length === 0, ERROR.NO_DATE);
    throwErrorIf(isNotValidDate, ERROR.INVALID_DATE);
  },

  async readOrder() {
    const input = await Console.readLineAsync(INPUT.ORDER);

    // ["해산물파스타", 2] 형식의 메뉴가 담긴 배열을 반환
    const orderArr = Array.from(input.split(","), (item) =>
      this.getMenuFrom(item)
    );
    this.validateOrder(orderArr);

    return orderArr;
  },

  getMenuFrom(value) {
    const menu = value.split("-");
    this.validateMenu(menu);
    const [name, count] = menu;

    return [name.trim(), parseInt(count)];
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
