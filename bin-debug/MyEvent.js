var game;
(function (game) {
    /**
     * 自定义事件
     * @author
     *
     */
    var MyEvent = (function (_super) {
        __extends(MyEvent, _super);
        function MyEvent(type, bubbles, cancelable) {
            if (bubbles === void 0) { bubbles = false; }
            if (cancelable === void 0) { cancelable = false; }
            _super.call(this, type, bubbles, cancelable);
        }
        var d = __define,c=MyEvent,p=c.prototype;
        MyEvent.UPDATE_MAIN_VALUE = "update_main_value";
        return MyEvent;
    })(egret.Event);
    game.MyEvent = MyEvent;
    egret.registerClass(MyEvent,'game.MyEvent');
})(game || (game = {}));
