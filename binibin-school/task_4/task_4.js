function getInputData(){
	var input_value = document.getElementById("input");
	return input_value.value;
}
 function getDeleteData(pos){
 	//pos为1表示从左侧删除，为0为从右侧删除
 	console.log(pos)
 	var content = document.getElementById("content");
 	if(pos==1&&content.firstChild){
 		var DeleteData = parseInt(content.firstChild.innerHTML);
 		console.log(DeleteData)
 	}
 	else if(pos==0&&content.lastChild){
 		var DeleteData = parseInt(content.lastChild.innerHTML);
 		console.log(DeleteData)
 	}
 	else{
 		DeleteData = 'null'}
 	return DeleteData;
 }
/*删除节点时在输入框显示输出的数值*/
 function setInputField(data){
 	var input_field = document.getElementById("input");
 	input_field.value=data;
 }
 
/*在节点前加入节点*/
function addNodeBefore(parent,newNode){
	if(parent.firstChild){
		parent.insertBefore(newNode,parent.firstChild);
	} else {
	parent.appendChild(newNode);
	}
}

/*右侧进入*/
function dataRightIn(data){
	var content = document.getElementById("content");
	var dataBlock = document.createElement("div")
	var data = document.createTextNode(data);
	dataBlock.setAttribute("class","num-block");
	dataBlock.appendChild(data);
	content.appendChild(dataBlock);
}

/*左侧进入*/
function dataLeftIn(data){
	var content = document.getElementById("content");
	var dataBlock = document.createElement("div")
	var data = document.createTextNode(data);
	dataBlock.setAttribute("class","num-block");
	dataBlock.appendChild(data);
	addNodeBefore(content,dataBlock);
}
/*删除,pos为1表示从左侧删除，为0为从右侧删除*/
function deleteBlock (pos) {
	console.log("deletepos"+pos)
	var content = document.getElementById("content");
	if(pos==1&&content.firstChild){
		console.log(content.firstChild);
		content.firstChild.remove();
 	}
 	else if(pos==0&&content.lastChild){
 		content.lastChild.remove();
 	}
 	else alert("队列为空无法执行删除操作！")
}

function deleteElement(){
	console.log('1');
	var content = document.getElementById("content");
	if(content){
	a= content.childNodes;
	a.onclick=function(){console.log('0')}
	}
	
}

var bt1 = document.getElementById("bt-right-in");
bt1.onclick = function(){
	dataRightIn(getInputData());
}

var bt2 = document.getElementById("bt-left-in");
bt2.onclick = function(){
	dataLeftIn(getInputData());
}
var bt3 = document.getElementById("bt-left-out");

bt3.onclick = function(){
	var data = getDeleteData(1);
	setInputField(data);
	deleteBlock(1);
}
var bt4 = document.getElementById("bt-right-out");
bt4.onclick = function(){
	var data = getDeleteData(0);
	setInputField(data);
	deleteBlock(0);
}
deleteElement()
