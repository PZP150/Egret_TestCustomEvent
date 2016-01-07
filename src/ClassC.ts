module game {
	/**
	 *
	 * @author 
	 *
	 */
	export class ClassC {
		public constructor() {
		}
		
		public c():void{
            console.log("i am function c in ClassC");
            
            //初始化自定义事件
            var newEvent:MyEvent = new MyEvent(MyEvent.UPDATE_MAIN_VALUE);
            newEvent.paramObj = "value from ClassC";
            
            //用自定义的事件派发器 派发自定义事件
            MyEventDispatcher.getInstance().dispatchEvent(newEvent);
		}
	}
}
