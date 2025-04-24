enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

const isWeekend = (day: DayOfWeek): boolean => {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};

// Приклад використання
console.log(isWeekend(DayOfWeek.Monday));   // false
console.log(isWeekend(DayOfWeek.Saturday)); // true