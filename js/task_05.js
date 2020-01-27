const checkForSpam = function(message) {
  const itIsSpam = ['spam', 'sale'];
  const userString = message.toLowerCase();

  for (let spam of itIsSpam) {
    if (userString.includes(spam)) {
      return true;
    }
  }
  return false;
};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));
