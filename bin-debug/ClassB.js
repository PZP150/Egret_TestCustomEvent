var game;
(function (game) {
    /**
     *
     * @author
     *
     */
    var ClassB = (function () {
        function ClassB() {
        }
        var d = __define,c=ClassB,p=c.prototype;
        p.b = function () {
            var c = new game.ClassC;
            c.c();
        };
        return ClassB;
    })();
    game.ClassB = ClassB;
    egret.registerClass(ClassB,'game.ClassB');
})(game || (game = {}));
