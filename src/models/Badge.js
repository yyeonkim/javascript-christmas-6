import { BADGE } from "../constants/event.js";
import { OUTPUT } from "../constants/output.js";

const Badge = Object.freeze({
  requiredDiscount: {
    [BADGE.SANTA]: 20000,
    [BADGE.TREE]: 10000,
    [BADGE.STAR]: 5000,
  },

  // 총혜택 금액에 따라 배지룰 부여한다.
  grantBy(totalDiscount) {
    for (const [badge, discount] of Object.entries(this.requiredDiscount)) {
      if (totalDiscount >= discount) return badge;
    }
    return OUTPUT.NOTHING;
  },
});

export default Badge;
