export {};

function returnNothing(): void {
  console.log('I dont return anything!');
}

returnNothing();
// console.log(returnNothing())
// void型はundefinedしか返さない
// なので、returnNothing()はundefinedが返ってくる
// なので、console.log(returnNothing());はundefinedが表示される
// 関数の戻り値が必要ない場合はvoid型を使う！
