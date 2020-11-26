import dayjs from 'dayjs';

const DATE_FORMATER = 'YYYY-MM-DD';
const TIME_FORMATER = 'HH:mm:ss';

class Store {
  get() {
    const state = window.localStorage.getItem('state');
    if (state) {
      try {
        return JSON.parse(state);
      } catch (error) {
        return {};
      }
    }
    return {};
  }

  getTodayData() {
    const state = this.get();
    const today = dayjs().format(DATE_FORMATER);
    return state[today] || [];
  }

  set(todayData: object) {
    const state = this.get();
    const today = dayjs().format(DATE_FORMATER);
    state[today] = todayData;
    window.localStorage.setItem('state', JSON.stringify(state));
  }

  add() {
    const todayData = this.getTodayData();
    todayData.push(dayjs().format(TIME_FORMATER));
    this.set(todayData);
  }

  remove(time: string) {
    const todayData = this.getTodayData();
    const newTodayData = todayData.filter((t: string) => t !== time)
    this.set(newTodayData);
  }
}

export default new Store();
