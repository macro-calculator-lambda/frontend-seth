export const goals = {
  "aggressive-loss": 0.8,
  "moderate-loss": 0.85,
  "small-loss": 0.9,
  maintain: 1,
  "moderate-gain": 1.1,
  "aggressive-gain": 1.15
};

export const sampleDays = {
  0: 1.2,
  1: 1.375,
  3: 1.55,
  5: 1.725,
  7: 1.9
};

export const meals = {
  four: 4,
  three: 3,
  snack: 2
};

export const calculateCalories = user => {
  if (user.gender === "female") {
    const femaleWeight = 4.35 * user.weight;
    const femaleHeight = 4.7 * user.height;
    const femaleAge = 4.5 * user.age;
    const femaleBMR = 655 + femaleWeight + femaleHeight - femaleAge;
    return femaleBMR * sampleDays[user.exercise] * goals[user.goal];
  } else {
    console.log(user);
    const maleWeight = 6.23 * user.weight;
    const maleHeight = 12.7 * user.height;
    const maleAge = 6.8 * user.age;

    const maleBMR = 66 + maleWeight + maleHeight - maleAge;

    return maleBMR * sampleDays[user.exercise] * goals[user.goal];
  }
};

export const macros = [
  {
    name: "Protein",
    value: 0.075
  },
  {
    name: "Carbs",
    value: 0.1
  },
  {
    name: "Fat",
    value: 0.033
  }
];

export const macroCalculator = (totalCal, macro) => {
  return Math.ceil(totalCal * macro);
};

export const calculatePerMeal = (macro, meal) => {
  switch (meal) {
    case 2:
      return `${Math.ceil(macro / 8) * 2} grams per meal and ${Math.ceil(
        macro / 8
      )} grams per snack`;
    case 4:
    case 3:
      return `${Math.ceil(macro / meal)} grams per meal`;
    default:
      return "";
  }
};
