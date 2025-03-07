/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
const getFizzBuzz = (num) => {
  let res;
  const fizz = num % 3 === 0;
  const buzz = num % 5 === 0;
  if (fizz && buzz) {
    res = 'FizzBuzz';
  } else if (fizz) {
    res = 'Fizz';
  } else if (buzz) {
    res = 'Buzz';
  } else res = num;
  return res;
};


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
const getFactorial = (n) => {
  let count = 1;
  for (let i = 2; i <= n; i += 1) {
    count *= i;
  }
  return count;
};


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
const getSumBetweenNumbers = (n1, n2) => {
  let count = 0;
  for (let i = n1; i <= n2; i += 1) {
    count += i;
  }
  return count;
};


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
const isTriangle = (a, b, c) => {
  let bool = false;
  let max = a;
  let side1;
  let side2;
  if (b > a) {
    max = b;
    side1 = a;
  } else side1 = b;
  if (c > max) {
    side2 = max;
    max = c;
  } else side2 = c;
  if (side1 + side2 > max) {
    bool = true;
  }
  return bool;
};


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
const doRectanglesOverlap = (rect1, rect2) => {
  let bool = false;
  const difTop = Math.abs(rect1.top - rect2.top);
  const difLeft = Math.abs(rect1.left - rect2.left);
  if (difTop < rect1.height && difLeft < rect1.width) {
    bool = true;
  }
  if (difTop < rect2.height && difLeft < rect2.width) {
    bool = true;
  }
  return bool;
};


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
const isInsideCircle = (circle, point) => {
  if (circle.center.x === point.x && circle.center.y === point.y) {
    return true;
  }
  let bool = false;
  const difTop = Math.abs(circle.center.y - point.y);
  const difLeft = Math.abs(circle.center.x - point.x);
  if (circle.center.x !== point.x && circle.center.y !== point.y) {
    const length = Math.sqrt(difTop ** 2 + difLeft ** 2);
    if (length < circle.radius) {
      bool = true;
    }
  }
  if (circle.center.x !== point.x && circle.center.y === point.y) {
    if (difLeft < circle.radius) {
      bool = true;
    }
  }
  if (circle.center.x === point.x && circle.center.y !== point.y) {
    if (difTop < circle.radius) {
      bool = true;
    }
  }
  return bool;
};


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
const findFirstSingleChar = (str) => {
  const res = [];
  const array = str.split('');
  let arr = [];
  for (let i = 0; i < array.length; i += 1) {
    arr = [];
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j] && array[i] !== ' ') {
        arr.push(array[i]);
      }
    }
    if (arr.length === 1) {
      res.push(arr[0]);
    }
  }
  return res[0] ? res[0] : null;
};

/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
const getIntervalString = (a, b, isStartIncluded, isEndIncluded) => {
  const arr = [];
  arr.push(isStartIncluded ? '[' : '(');
  arr.push(a > b ? b : a);
  arr.push(', ');
  arr.push(a > b ? a : b);
  arr.push(isEndIncluded ? ']' : ')');
  return arr.join('');
};


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
const reverseString = (str) => str.split('').reverse().join('');


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
const reverseInteger = (num) => +(num.toString().split('').reverse().join(''));


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
const isCreditCardNumber = (ccn) => ccn.toString().split('').map((el) => +el).map((el, i, arr) => {
  let num;
  if (arr.length % 2 === 0) {
    if (i % 2 === 0) {
      if (el * 2 > 9) {
        num = el * 2 - 9;
      } else num = el * 2;
    } else num = el;
  } else if (i % 2 !== 0) {
    if (el * 2 > 9) {
      num = el * 2 - 9;
    } else num = el * 2;
  } else num = el;
  return num;
})
  .reduce((a, b) => a + b) % 10 === 0;

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
const getDigitalRoot = (num) => {
  let sum = num;
  while (sum > 9) {
    sum = sum.toString().split('').map((el) => +el).reduce((a, b) => a + b);
  }
  return sum;
};

/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
const isBracketsBalanced = (str) => {
  const brackets = [['[', ']'], ['(', ')'], ['{', '}'], ['<', '>']];
  const arr = str.split('');
  const stack = [];
  arr.forEach((el) => {
    stack.push(el);
    if (stack.length > 1) {
      brackets.forEach((elem) => {
        if (elem[0] === stack[stack.length - 2] && elem[1] === stack[stack.length - 1]) {
          stack.pop();
          stack.pop();
        }
      });
    }
  });
  return !stack.length;
};


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
const toNaryString = (num, n) => num.toString(n);


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
const getCommonDirectoryPath = (pathes) => {
  const arrays = pathes.map((el) => el.split('/'));
  const common = [];
  let { length } = arrays[0];
  let maxLength = arrays[0].length;
  arrays.forEach((el) => {
    if (length > el.length) {
      length = el.length;
    } else maxLength = el.length;
  });
  for (let i = 0; i < length; i += 1) {
    const str = arrays[0][i];
    let areSame = true;
    arrays.forEach((el) => {
      if (el[i] !== str) {
        areSame = false;
      }
    });
    if (areSame) {
      common.push(str);
    }
  }
  if (maxLength > common.length) {
    common.push('');
  }
  return common.join('/');
};

/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
const getMatrixProduct = (m1, m2) => {
  const matrix = [];
  m1.forEach((el) => {
    const arr = [];
    for (let i = 0; i < m2[0].length; i += 1) {
      const v = el.map((elem, j) => elem * m2[j][i]).reduce((a, b) => a + b);
      arr.push(v);
    }
    matrix.push(arr);
  });
  return matrix;
};


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
const evaluateTicTacToePosition = (position) => {
  let res;
  for (let i = 0; i < position.length; i += 1) {
    if (position[i][0] === '0' && position[i][1] === '0' && position[i][2] === '0') {
      res = '0';
    } else if (position[i][0] === 'X' && position[i][1] === 'X' && position[i][2] === 'X') {
      res = 'X';
    }
  }
  for (let i = 0; i < position.length; i += 1) {
    if (position[0][i] === '0' && position[1][i] === '0' && position[2][i] === '0') {
      res = '0';
    } else if (position[0][i] === 'X' && position[1][i] === 'X' && position[2][i] === 'X') {
      res = 'X';
    }
  }
  if (position[0][0] === '0' && position[1][1] === '0' && position[2][2] === '0') {
    res = '0';
  } else if (position[0][0] === 'X' && position[1][1] === 'X' && position[2][2] === 'X') {
    res = 'X';
  }
  if (position[2][0] === 'X' && position[1][1] === 'X' && position[0][2] === 'X') {
    res = 'X';
  } else if (position[2][0] === '0' && position[1][1] === '0' && position[0][2] === '0') {
    res = '0';
  }
  return res;
};


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
