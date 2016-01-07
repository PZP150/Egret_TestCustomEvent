var game;
(function (game) {
    /**
     * 事件派发器
     * @author
     *
     */
    var MyEventDispatcher = (function (_super) {
        __extends(MyEventDispatcher, _super);
        function MyEventDispatcher() {
            _super.call(this);
        }
        var d = __define,c=MyEventDispatcher,p=c.prototype;
        MyEventDispatcher.getInstance = function () {
            if (this._instance == null) {
                this._instance = new MyEventDispatcher();
            }
            return this._instance;
        };
        return MyEventDispatcher;
    })(egret.EventDispatcher);
    game.MyEventDispatcher = MyEventDispatcher;
    egret.registerClass(MyEventDispatcher,'game.MyEventDispatcher');
})(game || (game = {}));
