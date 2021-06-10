// This is a JavaScript file

//enchant.jsを使う際にこの関数を呼び出します
enchant ();

//ウィンドウ画面がロードされた直後に、ブロック内の処理を行います
window.onload = function () {

    //ゲームオブジェクトをサイズ300＊400ピクセルで制作します
    var GameW=300;
    var GameH=400;
    var game=new Game (GameW,GameH);

    //一秒間に１５回に画面の更新頻度を設定します
    game.fps=15;

    //必要な画面類ロード
    game.preload("dog.png");

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


      };//gane.onload
    
    //ゲームを開始します
    game.start();

}//window.onload