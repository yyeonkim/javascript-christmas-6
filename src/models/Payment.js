const Payment = Object.freeze({
  compute(orderPrice, discount) {
    return orderPrice - discount;
  },
});

export default Payment;
