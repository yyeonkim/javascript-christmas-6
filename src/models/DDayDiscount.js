const DDayDiscount = Object.freeze({
  count: 100,
  start: 1000,

  giveIf(date) {
    if (date <= 25) {
      return this.start + this.count * (date - 1);
    }
    return 0;
  },
});

export default DDayDiscount;
