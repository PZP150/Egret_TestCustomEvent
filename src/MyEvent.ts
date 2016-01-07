module game {
	/**
	 * 自定义事件
	 * @author 
	 *
	 */
	export class MyEvent extends egret.Event{
    	
    	public static UPDATE_MAIN_VALUE:string = "update_main_value";
    	
    	public paramObj:any; //可用于传递参数
    	
		public constructor(type:string, bubbles:boolean=false, cancelable:boolean=false) {
    		super(type,bubbles,cancelable);
		}
	}
}
