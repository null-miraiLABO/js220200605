enchant ();
/*できてないこと
・タッチイベントの無効
・豚の反転*/

window.onload = function () {

    var GameW=750;/*480*/
    var GameH=1334;/*960*/
    var game=new Game (GameW,GameH);

    //一秒間に１５回に画面の更新頻度を設定します
    game.fps=15;

    game.preload("player.png");
    game.preload("checker.png");
    game.preload("biribiri.png");
    game.preload("end.png");
    game.preload("miss.png");

    
    game.onload=function(){
        
        //タッチイベント無効
        /*let data=0;
        if(data==1){
          player.
        }*/

        //ゴールの生成
        var ViewItem=new Sprite(160,160);
        ViewItem.image=game.assets['checker.png'];
        ViewItem.frame=0;
        ViewItem.x=320;
        ViewItem.y=790;
        game.rootScene.addChild(ViewItem);

        //こぶたの生成
        player=new Sprite(160,160);
        player.image=game.assets['player.png'];
        player.frame=1;
        player.x=1;
        player.y=1;
        game.rootScene.addChild(player);

        //missの生成
        miss=new Sprite(320,160);
        miss.image=game.assets["miss.png"];
        miss.x=500;
        miss.y=360;
       

        //goalの生成
        end=new Sprite(180,100);
        end.image=game.assets["end.png"];
        end.x=120;
        end.y=360;

        //ビリビリの生成
        biribiri=new Sprite(171,40);
        biribiri.image=game.assets["biribiri.png"];
        biribiri.x=0;
        biribiri.y=200;
        game.rootScene.addChild(biribiri);

        biribiri1=new Sprite(171,40);
        biribiri1.image=game.assets["biribiri.png"];
        biribiri1.x=171;
        biribiri1.y=200;
        biribiri1.scaleX*=-1;
        game.rootScene.addChild(biribiri1);

        biribiri2=new Sprite(171,40);
        biribiri2.image=game.assets["biribiri.png"];
        biribiri2.x=171;
        biribiri2.y=460;
        game.rootScene.addChild(biribiri2);

        biribiri3=new Sprite(171,40);
        biribiri3.image=game.assets["biribiri.png"];
        biribiri3.x=310;
        biribiri3.y=460;
        biribiri3.scaleX*=-1;
        game.rootScene.addChild(biribiri3);

        biribiri4=new Sprite(171,40);
        biribiri4.image=game.assets["biribiri.png"];
        biribiri4.x=0;
        biribiri4.y=760;
        game.rootScene.addChild(biribiri4);

        biribiri5=new Sprite(171,40);
        biribiri5.image=game.assets["biribiri.png"];
        biribiri5.x=171;
        biribiri5.y=760;
        biribiri5.scaleX*=-1;
        game.rootScene.addChild(biribiri5);

        //当たり判定とその処理
        biribiri1.addEventListener('enterframe',function(){
          if(this.intersect(player)){ 
            player.x=1;
            player.y=1;     
            game.rootScene.addChild(miss);
            miss.tl.setTimeBased();
            miss.tl.moveBy(-250,0,360).delay(300).moveBy(-250,0,360);
            miss.x=500;
            miss.y=360;
            data=1;
          }
        });
        
        biribiri.addEventListener('enterframe',function(){
          if(this.intersect(player)){
            game.rootScene.addChild(miss);
            player.x=1;
            player.y=1;
            miss.tl.setTimeBased();
            miss.tl.moveBy(-250,0,360).delay(300).moveBy(-250,0,360);
            miss.x=500;
            miss.y=360;
            data=1;
            
          }
        });

        biribiri2.addEventListener('enterframe',function(){
          if(this.intersect(player)){
            game.rootScene.addChild(miss);
            player.x=1;
            player.y=1;
            miss.tl.setTimeBased();
            miss.tl.moveBy(-250,0,360).delay(300).moveBy(-250,0,360);
            miss.x=500;
            miss.y=360;
          }
        });

        biribiri3.addEventListener('enterframe',function(){
          if(this.intersect(player)){
            game.rootScene.addChild(miss);
            player.x=1;
            player.y=1;
            miss.tl.setTimeBased();
            miss.tl.moveBy(-250,0,360).delay(300).moveBy(-250,0,360);
            miss.x=500;
            miss.y=360;
          }
        });

        biribiri4.addEventListener('enterframe',function(){
          if(this.intersect(player)){
            game.rootScene.addChild(miss);
            player.x=1;
            player.y=1;
            miss.tl.setTimeBased();
            miss.tl.moveBy(-250,0,360).delay(300).moveBy(-250,0,360);
            miss.x=500;
            miss.y=360;
          }
        });

        biribiri5.addEventListener('enterframe',function(){
          if(this.intersect(player)){
            game.rootScene.addChild(miss);
            player.x=1;
            player.y=1;
            miss.tl.setTimeBased();
            miss.tl.moveBy(-250,0,360).delay(300).moveBy(-250,0,360);
            miss.x=500;
            miss.y=360;
          }
        });
        
        ViewItem.addEventListener('enterframe',function(){
          if(this.intersect(player)){
            game.rootScene.addChild(end);
            game.end();
          }
        });

        //ドラック部分
        originX=0;
        originY=0;
        player.addEventListener(enchant.Event.TOUCH_START,function(e){
          originX=e.x-this.x;
          originY=e.y-this.y;
           this.scaleX=1;
           this.scaleY=1;
        });

         player.addEventListener(enchant.Event.TOUCH_MOVE,function(e){
             if(enchant.Event.TOUCH_MOVE<0&&this.scaleX>0)
          {
            this.scaleX*=-1;
          }
          if(enchant.Event.TOUCH_MOVE>0&&this.scaleX<0)
          {
            this.scaleX*=-1;
          }
          this.x=e.x-originX;
          this.y=e.y-originY;
        });

/*
        let death;
        let nowX;

        player.addEventListener(enchant.Event.TOUCH_MOVE,function(e){
        if(death==0){
          this.x=e.x-originX;
          this.y=e.y-originY;

          this.frame=game.frame%2+2;
          if(nowX<e.x&&this.scaleX>0){
          thiss.scaleX*=-1;
        }
        if(nowX<e.x&&this.scaleX>0){
          this.scale*=-1;
        }
        nowX=e.x;
        }
        });
*/         

        player.addEventListener(enchant.Event.TOUCH_END, function(e){
           this.scaleX=1;
           this.scaleY=1;
        });
        

        //こぶたアニメーション
       player.addEventListener('enterframe',function(){
          this.frame=game.frame%2;
        });
       
      biribiri.addEventListener('enterframe',function(){
          this.frame=game.frame%3;
      });
       biribiri1.addEventListener('enterframe',function(){
          this.frame=game.frame%3;
      });
       biribiri2.addEventListener('enterframe',function(){
          this.frame=game.frame%3;
      });
       biribiri3.addEventListener('enterframe',function(){
          this.frame=game.frame%3;
      });
       biribiri4.addEventListener('enterframe',function(){
          this.frame=game.frame%3;
      });
       biribiri5.addEventListener('enterframe',function(){
          this.frame=game.frame%3;
      });

    };
  game.start();

}