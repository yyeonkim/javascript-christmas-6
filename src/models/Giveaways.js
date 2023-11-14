import { MENU } from "../constants/menu.js";
import { OUTPUT } from "../constants/output.js";

const Giveaways = {
  gift: {
    name: MENU.CHAMPAGNE,
    count: 1,
    price: 25000,
  },
  requiredPrice: 120000,

  // 총주문 금액에 따라 증정품을 준다.
  giveBy(price) {
    let gift = { name: OUTPUT.NOTHING, price: 0, count: 0 };

    if (price >= this.requiredPrice) {
      gift = Object.assign(this.gift);
    }

    return gift;
  },
};

export default Giveaways;
