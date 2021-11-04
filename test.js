function descendingOrder(n) {
  return parseInt(
    ('' + n)
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}
// console.log(descendingOrder(28384));

function squareDigits(num) {
  return parseInt(
    ('' + num)
      .split('')
      .map((num) => Math.pow(num, 2))
      .join('')
  );
}

// console.log(squareDigits(2112));

function alphabetPosition(text) {
  return [...text]
    .map((a) => parseInt(a, 36) - 10 + 1)
    .filter((a) => a > 0)
    .map((char) => '' + char)
    .join(' ');
}
// a   b   c   d   e   f   g   h   i   j   k   l   m   n   o   p   q   r   s   t   u   v   w   x   y   z
// 1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26

// console.log(aplphaPosition('n8_ovuuSDSAS&'));
// console.log(alphabetPosition('3w}y9o+)'));

/* duplicate char */
var x = 'aaaaaaassssss23131240124910375987234232';
x = Array.from(new Set(x.split(''))).join('');

// console.log(x);

// function createPhoneNumber(numbers) {
//   const p1 = numbers.slice(0, 3).join('');
//   const p2 = numbers.slice(3, 6).join('');
//   const p3 = numbers.slice(6, 10).join('');
//   return `(${p1}) ${p2}-${p3}`;
// }

function createPhoneNumber(numbers) {
  numbers = numbers.join('');
  return (
    '(' +
    numbers.substring(0, 3) +
    ')' +
    ' ' +
    numbers.substring(3, 6) +
    '-' +
    numbers.substring(6)
  );
}

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

const { nanoid } = require('nanoid');
// const filename = +new Date() + meta.filename;
for (let i = 0; i < 2; i++) {
  // console.log(`song-${nanoid()}`);
  console.log(new Date());
}
