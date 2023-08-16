function* myGenerator(): Generator<string, string, string> {
  try {
    console.log('start');
    const a = yield 'first';
    console.log('1', a);
    const b = yield 'second';
    console.log('2', b);
    return 'jopa';
  } finally {
    console.log('finally');
  }
}

const iter = myGenerator();
console.log('---1');
console.log(iter.next());
console.log('---2');
console.log(iter.next('A'));
console.log('---3');
console.log(iter.next('B'));
console.log('---4');

/*
console.log(iter.return('LALALA'));

console.log(iter.next('C'));
*/
export {};
