import Payment from "../src/models/Payment";

describe("결제 테스트", () => {
  test("할인 후 예상 결제 금액을 계산한다.", () => {
    const orderPrice = 152000;
    const discount = 2023;

    expect(Payment.compute(orderPrice, discount)).toEqual(149977);
  });
});
