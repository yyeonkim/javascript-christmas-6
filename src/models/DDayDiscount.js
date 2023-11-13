const DDayDiscount = {
  count: 100,
  start: 1000,

  giveIf(date) {
    if (date <= 25) {
      return start + count * (date - 1);
    }
    return 0;
  },
};

export default DDayDiscount;
