var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        //
        game.MyEventDispatcher.getInstance().addEventListener(game.MyEvent.UPDATE_MAIN_VALUE, this.handler, this);
        //
        var b = new game.ClassB;
        b.b();
    }
    var d = __define,c=Main,p=c.prototype;
    p.handler = function (e) {
        var param = e.paramObj;
        console.log(param);
    };
    return Main;
})(egret.DisplayObjectContainer);
egret.registerClass(Main,'Main');
