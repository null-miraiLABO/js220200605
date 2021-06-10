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
    game.preload("boy_WORK.png");

    //ゲームがロードされた際にブロック内の処理を行います
    game.onload=function(){

        //Spriteオブジェクトを生成します
        var ViewItem=new Sprite(128,174);
        //Spriteオブジェクトに「dog」の画像をセットします
        ViewItem.image=game.assets['dog.png'];
        //Spriteオブジェクトのフレームに０を設定します
        ViewItem.frame=0;
        //犬画像を設定したスプライトオブジェクトをgame.rootSceneに代入します
        game.rootScene.addChild(ViewItem);

        //Spriteオブジェクトを生成します
        player=new Sprite(160,160);
        //Spriteオブジェクトに「こぶた」の画像を
        player.image=game.assets['player.png'];
        //Spriteオブジェクトのフレームに1を設定します
        player.frame=1;
        //
        player.x=100;
        player.y=100;

        //boy_WORK
        boy_WORK=new Sprite(200,200);
        boy_WORK.image=game.assets['boy_WORK_WORK.png'];
        boy_WORK.frame=1;

        boy_WORK_WORK.x=200;
        boy_WORK_WORK.y=10;


        //ドラック部分
        originX=0;
        originY=0;
        player.addEventListener(enchant.Event.TOUCH_START,function(e){
          originX=e.x-this.x;
          originY=e.y-this.y;
           this.scaleX=1.2;
           this.scaleY=1.2;
        });
        
        player.addEventListener(enchant.Event.TOUCH_MOVE,function(e){
          this.x=e.x-originX;
          this.y=e.y-originY;
        });

        player.addEventListener(enchant.Event.TOUCH_END, function(e){
           this.scaleX=1;
           this.scaleY=1;
        });
 
        //
        player.addEventListener('enterframe',function(){
          this.frame=game.frame%2;
        });

        
        origX=0;
        origY=0;
        boy_WORK.addEventListener(enchant.Event.TOUCH_START,function(e){
          origX=e.x-this.x;
          origY=e.y-this.y;
           this.scaleX=1;
           this.scaleY=1;
        });
        
        boy_WORK.addEventListener(enchant.Event.TOUCH_MOVE,function(e){
          this.x=e.x-origX;
          this.y=e.y-origY;
        });

        boy_WORK.addEventListener(enchant.Event.TOUCH_END, function(e){
           this.scaleX=0.8;
           this.scaleY=0.8;
        });
        boy_WORK.addEventListener('enterframe',function(){
          this.frame=game.frame%16;
        });
      

        game.rootScene.addChild(player);
        game.rootScene.addChild(boy_WORK);

      };//gane.onload
    
    //ゲームを開始します
    game.start();

}//window.onload