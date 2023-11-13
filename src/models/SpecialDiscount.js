const SpecialDiscount = {
  amount: 1000,
  starDate: [3, 10, 17, 24, 25, 31], // 일요일과 크리스마스

  giveBasedOn(date) {
    if (this.starDate.includes(date)) return 1000;
    return 0;
  },
};

export default SpecialDiscount;
