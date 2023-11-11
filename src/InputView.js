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

    return parseInt(input);
  },

  validate(type, value) {
    if (type === TYPE.DATE) {
      const isNotValidDate =
        isNaN(value) || !Number.isInteger(value) || (value >= 1 && value <= 31);

      throwErrorIf(value.length === 0, ERROR.NO_INPUT);
      throwErrorIf(isNotValidDate, ERROR.INVALID_DATE);
    }
  },
};

export default InputView;
