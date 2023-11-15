import { MENU_TYPE } from "../constants/menu.js";
import Duration from "./Duration.js";

const WeekendDiscount = Object.freeze({
  amount: 2023,
  menuType: MENU_TYPE.MAIN,

  giveIf(date, menuCountPerType) {
    if (new Duration(date).isWeekend()) {
      return menuCountPerType[this.menuType] * this.amount;
    }
    return 0;
  },
});

export default WeekendDiscount;
