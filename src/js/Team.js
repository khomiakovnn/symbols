export default class Team {
  constructor() {
    this.list = [];
  }

  [Symbol.iterator]() {
    let current = 0;
    const last = this.list.length - 1;
    const value = this.list[current += 1];
    return {
      next: () => {
        if (current <= last) {
          return {
            done: false,
            value,
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
