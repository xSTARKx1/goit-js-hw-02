let input;
const numbers = [];
let total = 0;

const add = function(array) {
  for (const number of numbers) {
    total += number;
  }

  return total;
};

while (true) {
  input = Number(prompt('Введите число:'));
  numbers.push(input);

  if (input === 0) {
    break;
  }
}

console.log(`Общая сумма равна ${add(numbers)}`);
