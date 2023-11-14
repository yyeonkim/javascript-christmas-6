import { DAY } from "../constants/date.js";

const WeekdayDiscount = {
  amount: 2023,

  giveIf(dessertCount, day) {
    if (day !== DAY.FRIDAY && day !== DAY.SATURDAY) {
      return dessertCount * this.amount;
    }
    return 0;
  },
};

export default WeekdayDiscount;
