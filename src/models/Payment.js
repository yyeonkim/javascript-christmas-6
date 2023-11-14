const Payment = {
  compute(orderPrice, discount) {
    return orderPrice - discount;
  },
};

export default Payment;
