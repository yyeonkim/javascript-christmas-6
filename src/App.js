import { Console } from "@woowacourse/mission-utils";
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

    const date = await this.#askDate();
    const { order, orderController } = await this.#receiveOrder();
    const menuCountPerType = orderController.countMenuPerType();
    const orderPrice = orderController.computePrice();
    const { name, count } = Giveaways.giveIf(orderPrice);
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

  async #askDate() {
    try {
      return await InputView.readDate();
    } catch (error) {
      Console.print(error.message);
      return await this.#askDate();
    }
  }

  async #receiveOrder() {
    try {
      const order = await InputView.readOrder();
      const orderController = new OrderController(order);

      return { order, orderController };
    } catch (error) {
      Console.print(error.message);
      return await this.#receiveOrder();
    }
  }
}

export default App;
