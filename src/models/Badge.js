import { BADGE } from "../constants/badge.js";

const Badge = {
  requiredDiscount: {
    [BADGE.STAR]: 5000,
    [BADGE.TREE]: 10000,
    [BADGE.SANTA]: 20000,
  },

  // 총혜택 금액에 따라 배지룰 부여한다.
  grant(totalDiscount) {
    for (const [badge, discount] of Object.entries(this.requiredDiscount)) {
      if (totalDiscount >= discount) return badge;
    }
  },
};

export default Badge;