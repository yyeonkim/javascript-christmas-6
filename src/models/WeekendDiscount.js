import { DAY } from "../constants/date.js";

const WeekendDiscount = {
  amount: 2023,

  giveIf(mainCount, day) {
    if (day === DAY.FRIDAY || day === DAY.SATURDAY) {
      return mainCount * this.amount;
    }
    return 0;
  },
};

export default WeekendDiscount;
