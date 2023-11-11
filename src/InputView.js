import { Console } from "@woowacourse/mission-utils";
import { ERROR } from "./constants/error.js";
import { INPUT } from "./constants/input.js";
import { throwErrorIf } from "./utils/index.js";

const TYPE = {
  DATE: "date",
  ORDER: "order",
};

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(INPUT.DATE);
    this.validate(TYPE.DATE, input);

    return parseInt(input);
  },

  validate(type, value) {
    if (type === TYPE.DATE) {
      const date = Number(value);
      const isNotValidDate =
        isNaN(date) || !Number.isInteger(date) || date < 1 || date > 31;

      throwErrorIf(value.length === 0, ERROR.NO_DATE);
      throwErrorIf(isNotValidDate, ERROR.INVALID_DATE);
    }
  },
};

export default InputView;
