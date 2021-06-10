//enchant.jsの初期化
enchant();

//ウィンドウがロードされた後に実行される無名関数をセット
window.onload=function()
{
  //画面サイズ
  var GameW=480;
  var GameH=800;
  var game=new Core(GameW,GameH);

  game.fps=15;

  game.preload("dog.png");

//ゲームがロードされた後に実行される無名関数をセット
  game.onload=function()
  {
    //playerの設置
    var chees=new Sprite(160,140);
    chess.image=game.assets['dog.png'];
    chees.frame=0;
    chees.x=0;//playerの初期座標
    chees.y=0;
    game.rootScene.addChild(chess);

  };//game.onloadの閉じかっこ

  game.start();

}//window.onloadの閉じかっこ