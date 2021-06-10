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
    game.preload("straw.png");

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
        //Spriteの位置座標を設定します
        player.x=100;
        player.y=100;

        //子豚をスプライトでアニメションさせます
        //ついでにキーボドかパッドで移動します
        player.addEventListener('enterframe',function(){
          this.frame=game.frame%2;
          var input = game.input;
          if(input.left){
            this.x-=4;
            if(this.scaleX>0){
              this.scaleX*=-1
            }
          }
          if(input.right){
            this.x+=4;
             if(this.scaleX<0){
              this.scaleX*=-1;
             }
          }
          if(input.up){
            this.y-=4;
          }
          if(input.down){
            this.y+=4;
          }
        });
        
        //子豚の画像のスプライトオブジェクトをgame.rootSceneに代入
        game.rootScene.addChild(player);

        //当たり判定ようのワラを配置します
        straw=new Sprite(110,110);
        straw.image=game.assets["straw.png"];
        straw.x=300;
        straw.y=200;
        game.rootScene.addChild(straw);

        //毎フレームに辺り判定を行って、当たってたら削除してます
        straw.addEventListener('enterframe',function(){
          if(this.intersect(player)){
            game.rootScene.removeChild(this);
          }
        });
        //スマホ用にパッドを表示
        var pad=new Pad();
        pad.moveTo(0,200);
        game.rootScene.addChild(pad);

      };//gane.onload
    
    //ゲームを開始します
    game.start();

}//window.onload