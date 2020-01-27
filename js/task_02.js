const calculateEngravingPrice = function(message, pricePerWord) {
  const wordsInMessage = message.split(' ');

  const priceOfWork = wordsInMessage.length * pricePerWord;

  return priceOfWork;
};







console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
);



console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
);
