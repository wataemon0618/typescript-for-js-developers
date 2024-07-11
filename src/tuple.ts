export {};

// tuple型
// let profile = ['Ham', 43];
let profile: [string, number] = ['Ham', 43];
// let profile: [string, number] = [ 43, 'Ham']; これだとエラーになる。理由は型が違うからである。
console.log({ profile });  
// 1番目はstring型、2番目はnumber型と決めたいときにtuple型を使う