// This is a JavaScript file

//画面にが表示させる。
/*
console.log('ハロー！');

//四則演算
console.log(10+5);
console.log(10-5);
console.log(10*5);
console.log(10/5);

//実数も整数も同じNumber型のデータ
console.log(2+0.5);

//演算の優先順位例
console.log(2+10+5);
console.log(2+10*5);
console.log((2+10)*5);
console.log(5/(4*(1-0.2)));

//セミコロン無しでも実行できた()
let moji='ハロー！';
console.log(moji);

//数値も文字も同じでおk
//let kakaku=100;(二回宣言するとエラーになる)
let kakaku=150;
let urine=kakaku*1.08;
console.log(urine);


let text2=prompt('入力せよ');
console.log(text2);


let text3=prompt('入力せよ');
console.log('入力せよ'+text3);


let kakaku2=prompt('価格を入力せよ');
console.log(kakaku2+80);

let kakaku3=prompt('価格を入力せよ');
console.log(parseInt(kakaku3)+80);

let moji2=prompt('入力せよ');
console.log(isNaN(moji2));

let moji3=prompt('入力せよ');
if(isNaN(moji3)){
  console.log("数字ではない");
}

let moji4=prompt('入力せよ');
if(!isNaN(moji4)){
  console.log(parseInt(moji4)+80);
  console.log(数字なので足しました);
}

let moji5=prompt('入力せよ');
if(!isNaN(moji5)){
  console.log(parseInt(moji5)+80);
}else{
  console.log("数字ではない。");
}

//p71.72
console.log(4<5);
console.log(6<5);

let moji6=prompt('年齢は');
let age=parseInt(moji6);
if(age<20){
  console.log("未成年");
}

let moji7=prompt('年齢は');
let age2=parseInt(moji7);
if(age2<20){
  console.log("未成年");
}else if(age2<65){
    console.log("成人");
}else{
    console.log("高齢者");
}

let moji8=prompt('年齢は');
if(!isNaN(moji8)){
  let age=parseInt(moji8);
  if(age<20){
    console.log("未成年");
  }
  else
    console.log("その他");
}
else
  console.log("半角数字で打てや");

  let moji9=prompt('年齢は');
let age3=parseInt(moji9);
if(age3>=6&&age3<=15){
  console.log("義務教育の対象");
}

//||,&&何回でも使っておk
  let moji10=prompt('年齢は');
let age4=parseInt(moji10);
if(age4>=6||age4<=65){
  console.log("幼児と高齢者");
}

let shikin = 50000;
while(shikin>=0){
  console.log(shikin);
  shikin-=5080;
}  

for(let cnt=0;cnt<10;cnt++){
  console.log("ハロー");
}

//verを使うとどこでも書ける
for(let cont=0;cont<10;cont++){
  console.log(cont+"回目ハロー");
}
*/

//エンドレスエイト
/*
for(let cont=10;cont>0;cont--){
  if(cont==8)
  continue;
  if(cont==5)
  break;
  console.log(cont+"回目ハロー");
}
*/

//p111順番大事！
/*
for(let x=1;x<10;x++){
  for(let y=1;y<10;y++){
  console.log(x+"x"+y+"="+x*y);
  }
}
*/
/*
let wdays=['月','火','水','木','金'];
console.log(wdays[1]);
*/
/*
//少し古いやり方
let wdays2=new Array('月','火','水','木','金');
console.log(wdays2[1]);
console.log(wdays2);

//からの配列の作り方
let wdays3=[];
console.log(wdays3);
let wdays4=new Array();
console.log(wdays4);

//最初に個数を指定する場合
let wdays5=new Array(6);
console.log(wdays5);
*/

/*
let wdays6=['月','火','水','木','金'];
wdays6[1]='炎'　;
console.log(wdays6);

//配列の個数
console.log(wdays6.length);

//末端に追加
wdays6.push("ついか")
console.log(wdays6.length);

//配列の最後を抜き出し
let poptext=wdays6.pop();
console.log(wdays6);
console.log(poptext);

//ソート
wdays6.sort()
console.log(wdays6);

//先端抜き出し
let shifttext=wdays6.shift()
console.log(wdays6);
console.log(shifttext);
*/

//参考サイト「mozilla」

/*
let wdays7=['月','火','水','木','金'];
for(let day of wdays7){
  console.log(day+"曜日");
}

let wdays8=['月','火','水','木','金'];
for(let cnt=0; cnt<wdays8.length; cnt++){
  console.log(wdays7[cnt]+"曜日");
}
*/

/*
//最新
let createMail=()=>{
  console.log("pt企画の斉藤です。")
  console.log("請求書を送ります。")
}
createMail();

//古い書き方　宣言前でも使える
function createMai2()
{
  console.log("pt企画の斉藤です。2")
  console.log("請求書を送ります。2")
}
createMai2();

//古い書き方２　最新と同じで宣言後しか使えない
let createMai3=function()
{
  console.log("pt企画の斉藤です。3")
  console.log("請求書を送ります。3")
}
createMai3();
*/

/*
let createMai4=(recv)=>{
  console.log(recv+"様")
  console.log("pt企画の斉藤です。")
  console.log("請求書を送ります。")
}
createMai4("山本");
createMai4("吉田");

//古い書き方
function createMai5(recv){
  console.log(recv+"様")
  console.log("pt企画の斉藤です。o")
  console.log("請求書を送ります。0")
}
createMai5("山本p");
createMai5("吉田p");
*/

/*
//p143 4-4-1
let addCharge=(bill)=>{
  return bill*1.07;
}
console.log(addCharge(40000));

//変数に入れる場合
let Ac1=addCharge(50000);
console.log(Ac1);

function addCharge2(bill)
{
  return bill*1.07;
}
console.log(addCharge(40000));

//変数に入れる場合
let Ac2=addCharge2(50000);
console.log(Ac2);
*/

//お題

/*
function men(tate,yoko)
{
  console.log(tate*yoko);
}
men(2,5);

let waru=(num)=>
{
  if(num==0)
    console.log("われないよ");
  else
    console.log(num/2);
}
waru(123123);
waru(0);
*/

/*
let data={name:'山本',bill:40000,crg:true}; ジェイソンぽい
console.log(data['name']);
console.log(data.name);
console.log(data['bill']);
console.log(data);//1行追加
*/

let data1=[{name:'山本',bill:40000,crg:true},{name:'吉田',bill:25000,crg:false}];
console.log(data1[0]['name']);
console.log(data1[0].name);
console.log(data1[1]['bill']);
console.log(data1[1]['name']);
console.log(data1[1].name);
console.log(data1[1]['bill']);
console.log(data1);