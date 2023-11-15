import { MENU_TYPE } from "../constants/menu.js";
import Duration from "./Duration.js";

const WeekdayDiscount = Object.freeze({
  amount: 2023,
  menuType: MENU_TYPE.DESSERT,

  giveIf(date, menuCountPerType) {
    if (new Duration(date).isWeekday()) {
      return menuCountPerType[this.menuType] * this.amount;
    }
    return 0;
  },
});

export default WeekdayDiscount;
