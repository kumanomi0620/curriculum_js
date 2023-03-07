console.log('問1')
function isEven(num) {
  return num % 2 === 0;
}
const array = [2, 5, 12, 13, 15, 18, 22];
//console.log(array.filter(isEven));
const num =array.filter(isEven);
//console.log(num);
//console.log(num[0]);
//console.log(num[1]);
for (let i=0; i<num.length;i++){
console.log(`${num[i]}は偶数です`);
}
console.log('問2')
class Car {
  constructor (gas, num){
    this.gas = gas;
    this.num  = num;
  }
    getNumGas(){
      console.log(`ガソリンは${this.gas}です。ナンバーは${this.num}です。`);
    }
  }
  const taro = new Car("○○","△△");
  taro.getNumGas();
  //const ootani = new Car("ハイオク","17");
  //ootani.getNumGas();

