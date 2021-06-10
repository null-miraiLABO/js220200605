// This is a JavaScript file

//enchant.jsを使う際にこの関数を呼び出します
enchant ();

//ウィンドウ画面がロードされた直後に、ブロック内の処理を行います
window.onload = function () {

    //ゲームオブジェクトをサイズ300＊400ピクセルで制作します
    var GameW=480;
    var GameH=480;
    var game=new Game (GameW,GameH);

    //一秒間に１５回に画面の更新頻度を設定します
    game.fps=15;

    //必要な画面類ロード
    game.preload("dog.png");
    game.preload("player.png");
 
    //ゲームがロードされた際にブロック内の処理を行います
    game.onload=function(){


var scoreLabel = new ScoreLabel(5, 35);
scoreLabel.score = 90000;game.rootScene.addChild(scoreLabel);



var lifeLabel = new LifeLabel(5, 95, 3);lifeLabel.life=1
game.rootScene.addChild(lifeLabel);


/* //バー
var bar = new Bar(5, 5);//X,Y bar.image = game.assets["bar.png"]; bar.value = 80;//値
bar.maxvalue = 100;//最大値 game.rootScene.addChild(bar);
//*/


var mutableText = new MutableText(5, 5, 320);
mutableText.text = "tetetete";game.rootScene.addChild(mutableText);


/* //普通のテキスト
var label = new Label('ふつうのもじ'); label.font = "16px monospace"; label.color = '#FFFFFF'; game.rootScene.addChild(label);
//*/

/* //ボタン
//ラベル,種別(なし|light|blue)
var button = new Button("これがボタンだ!", "light");

button.moveTo(10, 10);
button.ontouchstart = function() {
          straw.x = 300;
          straw.y = 100;
          game.rootScene.addChild(straw);
};
game.rootScene.addChild(button);
/* //

/* //タイマーラベル(単に時間制限だけならenterframe等つかったほうがいいよ!)
var timeLabel = new TimeLabel(5, 65, "countdown");//X,Y,種別(なし|countdown)
timeLabel.time = 60;//タイム
game.rootScene.addChild(timeLabel);
//*/

/* //時間で移動とか
//まずは表示
var ViewItem=new Sprite(128,174);
ViewItem.image=game.assets['dog.png'];
ViewItem.frame=0;
game.rootScene.addChild(ViewItem);
//ここから移動とか
ViewItem.tl.setTimeBased();//デフォルトのフレーム単位からミリ秒単位に変更
ViewItem.tl.moveBy(200, 200, 1000).delay(500).moveBy(-200, 0, 1000).delay(500).moveBy(200,
-200, 1000).delay(500).moveBy(-200, 0, 1000).delay(500).loop();
//*/

/* //おてがるたいま
game.rootScene.tl.delay(30).then(function(){
});
game.end();//30フレーム後に実行
//*/

    };//gane.onload
  
  //ゲームを開始します
  game.start();

}//window.onload