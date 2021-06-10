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

  game.preload("player.png");

//ゲームがロードされた後に実行される無名関数をセット
  game.onload=function()
  {
    //playerの設置
    var player=new Sprite(160,140);
    player.image=game.assets['player.png'];
    player.frame=0;
    player.x=0;//playerの初期座標
    player.y=0;
    game.rootScene.addChild(player);

    //playerのアニメーション
    /*
    player.addEventListener('enterframe',function(){
      this.frame=game.frame%2;
    });
*/
    //ドラッグ
    var originX=0;
    var originY=0;
    player.addEventListener(enchant.Event.TOUCH_START,function(e){
      originX=e.x-this.x;
      originY=e.y-this.y;
    });

    player.addEventListener(enchant.Event.TOUCH_MOVE,function(e){
      var beforeX=this.x;

      this.x=e.x-originX;
      this.y=e.y-originY;
      this.frame=game.frame%2;

      if(beforeX<this.x)
        this.scaleX=Math.abs(this.scaleX);
      else
        this.scaleX=Math.abs(this.scaleX);
    });
    
    player.addEventListener(enchant.Event.TOUCH_END,function(e){
      
    });
    

  };//game.onloadの閉じかっこ

  game.start();

}//window.onloadの閉じかっこ