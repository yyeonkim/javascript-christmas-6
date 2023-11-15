import Duration from "./Duration.js";

const SpecialDiscount = Object.freeze({
  amount: 1000,

  giveIf(date) {
    const duration = new Duration(date);
    if (duration.isSunday() || duration.isChristmas()) return 1000;
    return 0;
  },
});

export default SpecialDiscount;
