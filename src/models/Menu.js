import { MENU, MENU_TYPE } from "../constants/menu.js";

class Menu {
  #menuList = [
    { name: MENU.SOUP, price: 6000, type: MENU_TYPE.APPETIZER },
    { name: MENU.TAPAS, price: 5500, type: MENU_TYPE.APPETIZER },
    { name: MENU.SALAD, price: 8000, type: MENU_TYPE.APPETIZER },
    { name: MENU.STAKE, price: 55000, type: MENU_TYPE.MAIN },
    { name: MENU.BARBECUE, price: 54000, type: MENU_TYPE.MAIN },
    { name: MENU.SEAFOOD_PASTA, price: 35000, type: MENU_TYPE.MAIN },
    { name: MENU.CHRISTMAS_PASTA, price: 25000, type: MENU_TYPE.MAIN },
    { name: MENU.CAKE, price: 15000, type: MENU_TYPE.DESSERT },
    { name: MENU.ICE_CREAM, price: 5000, type: MENU_TYPE.DESSERT },
    { name: MENU.ZERO_COKE, price: 3000, type: MENU_TYPE.BEVERAGES },
    { name: MENU.WINE, price: 60000, type: MENU_TYPE.BEVERAGES },
    { name: MENU.CHAMPAGNE, price: 25000, type: MENU_TYPE.BEVERAGES },
  ];
  #menu;

  constructor(name) {
    this.#menu = this.#menuList.find((item) => item.name === name);
  }

  computePrice(count) {
    return this.#menu.price * count;
  }

  getType() {
    return this.#menu.type;
  }
}
export default Menu;
