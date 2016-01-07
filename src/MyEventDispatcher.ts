module game {
	/**
	 * 事件派发器
	 * @author 
	 *
	 */
	export class MyEventDispatcher extends egret.EventDispatcher{
    	private static _instance:MyEventDispatcher;
    	
		public constructor() {
    		super();
		}
		
		public static getInstance():MyEventDispatcher{
            if(this._instance == null){
                this._instance = new MyEventDispatcher();
		    }
            return this._instance;
		}
	}
}
