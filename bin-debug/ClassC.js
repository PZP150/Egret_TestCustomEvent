var game;
(function (game) {
    /**
     *
     * @author
     *
     */
    var ClassC = (function () {
        function ClassC() {
        }
        var d = __define,c=ClassC,p=c.prototype;
        p.c = function () {
            console.log("i am function c in ClassC");
            //初始化自定义事件
            var newEvent = new game.MyEvent(game.MyEvent.UPDATE_MAIN_VALUE);
            newEvent.paramObj = "value from ClassC";
            //用自定义的事件派发器 派发自定义事件
            game.MyEventDispatcher.getInstance().dispatchEvent(newEvent);
        };
        return ClassC;
    })();
    game.ClassC = ClassC;
    egret.registerClass(ClassC,'game.ClassC');
})(game || (game = {}));
