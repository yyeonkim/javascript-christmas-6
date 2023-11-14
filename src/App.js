import EventController from "./controllers/EventController.js";
import OrderController from "./controllers/OrderController.js";
import Badge from "./models/Badge.js";
import Giveaways from "./models/Giveaways.js";
import Payment from "./models/Payment.js";
import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";

class App {
  async run() {
    OutputView.printIntro();
    const date = await InputView.readDate();
    const order = await InputView.readOrder();

    const orderController = new OrderController(order);
    const menuCountPerType = orderController.countMenuPerType();
    const orderPrice = orderController.computePrice();
    const { name, count } = Giveaways.giveBy(orderPrice);
    const eventController = new EventController(
      date,
      orderPrice,
      menuCountPerType
    );
    const totalDiscount = eventController.computeTotal();
    const discountPerEvent = eventController.computeEach();
    const paymentPrice = Payment.compute(orderPrice, totalDiscount);
    const badge = Badge.grantBy(totalDiscount);

    OutputView.printPreview();
    OutputView.printOrder(order);
    OutputView.printOrderPrice(orderPrice);
    OutputView.printGiveaways({ name, count });
    OutputView.printDiscountPerEvent(discountPerEvent);
    OutputView.printTotalDiscount(totalDiscount);
    OutputView.printPaymentPrice(paymentPrice);
    OutputView.printBadge(badge);
  }
}

export default App;
