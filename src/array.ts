export {};

// array型
let numbers: number[] = [1, 2, 3];
console.log( numbers[0] );
console.log( numbers[2] );

let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];
console.log( strings[0] );
console.log( strings[2] );

// 二次元配列バージョン

let nArray: number[][] = [
  [1, 2, 3],
  [4, 5, 6]
];
console.log( nArray[0][0] );
console.log( nArray[1][2] );

// 複数の型が存在する場合

let mixedArray: (string | number | boolean)[] = [1, 'JavaScript', false];