// export {};を使ってファイルをモジュールとして扱うようにすることで、トップレベルの宣言がグローバルスコープに漏れ出すのを防ぎます。
// 関数やクラスの内部の宣言：ローカルスコープに限定され、外部に影響を与えないため、衝突の心配がありません。
export {};

// let isFinished = true;
// console.log({ isFinished });

let isFinished: boolean = true;
isFinished = false;
console.log({ isFinished });