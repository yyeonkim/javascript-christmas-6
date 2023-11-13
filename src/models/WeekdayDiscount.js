import { DAY } from "../constants/day.js";

const WeekdayDiscount = {
  amount: 2023,

  giveBasedOn(dessertCount, day) {
    if (day !== DAY.FRIDAY && day !== DAY.SATURDAY) {
      return dessertCount * this.amount;
    }
    return 0;
  },
};

export default WeekdayDiscount;
