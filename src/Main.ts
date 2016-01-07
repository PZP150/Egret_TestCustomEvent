class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        //
        game.MyEventDispatcher.getInstance().addEventListener(game.MyEvent.UPDATE_MAIN_VALUE,this.handler,this);
        //
        var b:game.ClassB = new game.ClassB;
        b.b();
    }
    
    private handler(e:game.MyEvent):void{
        var param:any = e.paramObj;
        console.log(param);
    }
    
    
}