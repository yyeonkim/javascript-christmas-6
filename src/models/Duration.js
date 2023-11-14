import { DAY, day } from "../constants/date.js";

class Duration {
  #year = new Date().getFullYear();
  #month = 12;
  #date;
  #day;
  #weekday = [DAY.SUNDAY, DAY.MONDAY, DAY.TUESDAY, DAY.WEDNESDAY, DAY.THURSDAY];
  #weekend = [DAY.FRIDAY, DAY.SATURDAY];

  constructor(date) {
    this.#date = date;
    this.#day = this.#getDay(date);
  }

  #getDay(date) {
    const index = new Date(`${this.#year}-${this.#month}-${date}`).getDay();
    return day[index];
  }

  isUntilChristmas() {
    return this.#date <= 25;
  }

  isWeekday() {
    return this.#weekday.includes(this.#day);
  }

  isWeekend() {
    return this.#weekend.includes(this.#day);
  }

  isSunday() {
    return this.#day === DAY.SUNDAY;
  }

  isChristmas() {
    return this.#date === 25;
  }
}

export default Duration;
