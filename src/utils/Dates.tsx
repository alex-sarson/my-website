export function CodingDuration() {
    const start = new Date('2020-01-01').getFullYear();
    const today = new Date().getFullYear();
    const difference = today - start;
    return difference;
  }

export function MyAge() {
  const todaysDate = {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  };
  const myBd = {
    day: new Date('1997-01-24').getDate(),
    month: new Date('1997-01-24').getMonth() + 1,
    year: new Date('1997-01-24').getFullYear(),
  };
  let age;

  switch (true) {
    case todaysDate.month == myBd.month && todaysDate.day >= myBd.day: {
      age = todaysDate.year - myBd.year;
      break;
    }
    case todaysDate.month > myBd.month: {
      age = todaysDate.year - myBd.year;
      break;
    }
    default: {
      age = todaysDate.year - myBd.year - 1;
      break;
    }
  }
  return age;
}