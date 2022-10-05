
console.log("問1-1");
console.log("変数aが11だとする");
console.log("解答");
let a = 11;
if (a !== 10) {
  console.log("変数aは10ではない");
}
console.log("変数aは"+a+"です。");

console.log("問1-2");
console.log("変数bが12だとする");
console.log("条件に合えば、「一致」合わなければ「不一致」と表示する");
console.log("解答");
let b = 12;
if (b>=10 && b<=20 && b%2===0) {
  console.log("一致");
}else{
console.log("不一致");
}

console.log("問2");
console.log("変数Xを11以上20未満で記述します。");
console.log("変数xを10とする");
let x = 10;
if (10<x && x<20){
  console.log("成功です");
}else{
  console.log("失敗です");
}
console.log("問3");
console.log("変数xを10とする");
let y = 10;
if (y%2 ===0 ){
  console.log("偶数です");
}else if(y%2!==0){
  console.log("奇数です");
}