//your JS code here. If required.
function functionName(){
	alert(arguments.callee.name)
	return ;
}
function AccioJob(arg){
	alert(arguments.callee.name)

	return ;
}
functionName()
AccioJob()