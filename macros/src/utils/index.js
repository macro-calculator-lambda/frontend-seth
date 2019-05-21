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
  if (user === "female") {
    let femaleWeight = 4.35 * user.weight;
    let femaleHeight = 4.7 * user.height;
    let femaleAge = 4.5 * user.age;

    let femaleBMR = 655 + femaleWeight + femaleHeight - femaleAge;
    return femaleBMR * sampleDays[user.exerciseDays] * goals[user.goal];
  } else {
    let maleWeight = 6.23 * user.weight;
    let maleHeight = 12.7 * user.height;
    let maleAge = 6.8 * user.age;

    let maleBMR = 66 + maleWeight + maleHeight - maleAge;
    return maleBMR * sampleDays[user.exerciseDays] * goals[user.goal];
  }
};
