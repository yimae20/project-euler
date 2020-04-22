function __x_thPrimeNumber(inputNumber) {
  let primeNumberCount = 0;
  let primeNumber = 2;
  while (primeNumberCount < inputNumber) {
    if (isPrimeFactor(primeNumber)) {
      primeNumberCount++;
    }
    primeNumber++;
  }
  return primeNumber - 1;
}

function isPrimeFactor(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

process.on('message', function (msg) {
  if (msg.hasOwnProperty('start')) {
    const answer = __x_thPrimeNumber(msg.start);
    process.send({ answer });
  }
});
