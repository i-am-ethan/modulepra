//=================================================
//関数
function log(value) {
  console.log(value);
}

//=================================================
//変数
const name = "joji";
const name2 = "tom";

export { name, name2, log };

/* 
エイリアス：自分で新たに名前をつけることができる
→ as pika の部分
export { name as pika , name2, log };


*/
