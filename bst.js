var Bst = function(input){
	var createBst = function(input, start, end){
		if(start > end)
			return null;
		var node = new Node();
		var midIndex = Math.floor((start + end)/2);
		node.data = input[midIndex];
		node.leftNode = createBst(input, start, midIndex -1);
		node.rightNode = createBst(input, midIndex + 1, end);
		return node;
	}
	if(input == null)
		this.root == null;
	else
		this.root = createBst(input, 0, input.length - 1);
	
	
	var numberOfElements = function(node){
		if(node == null)
			return 0;
		var leftelementCount = numberOfElements(node.leftNode);
		var rightelementCount = numberOfElements(node.rightNode);
		return leftelementCount + rightelementCount + 1;
	}
	
	this.count = function(){
		return numberOfElements(this.root, 0);
	}
	
	var searchBst = function(node, data)
	{
		if(node == null)
			return false;
		if(node.data == data)
			return true;
		if(node.data > data)
			return searchBst(node.leftNode, data);
		else
			return searchBst(node.rightNode, data);
	}
	
	var insertInBst = function(node, data)
	{
		if(node.data == data)
			throw "Data already present";
		
		if(node.data > data)
		{
			if(node.leftNode == null)
			{
				node.leftNode = new Node();
				node.leftNode.data = data; node.leftNode.leftNode = null; node.leftNode.rightNode = null;
			}
			else
				insertInBst(node.leftNode, data);
		}
		else
		{
			if(node.rightNode == null)
			{
				node.rightNode = new Node();
				node.rightNode.data = data; node.rightNode.leftNode = null; node.rightNode.rightNode = null;
			}
			else
				insertInBst(node.rightNode, data);
		}
	}
	
	// var deleteNode = function(node, data)
	// {
	// 	var parentNode = findParentNode(this.root, data);
	// 	var node, isLeft;
	// 	if(parentNode.leftNode.data == data)
	// 	{
	// 		node = parentNode.leftNode;
	// 		isLeft = true;
	// 	}
	// 	else{
	// 		node = parentNode.rightNode;
	// 		isLeft = false;
	// 	}
	// 		
	// 	//Case 1 No right child
	// 	if(node.rightNode == null)
	// 	{
	// 		if(isLeft)
	// 			parentNode.leftNode = node.leftNode;
	// 		else
	// 			parentNode.rightNode = node.leftNode;
	// 	}
	// 	
	// 	//case 2 if rightNode has no left child
	// 	else if(node.rightNode.leftNode == null)
	// 	{
	// 		if(isLeft)
	// 			parentNode.leftNode = node.rightNode;
	// 		else
	// 			parentNode.rightNode = node.rightNode;
	// 			
	// 		node.rightNode.leftNode = node.leftNode;
	// 	}
	// 	
	// 	//case 3 - rightNode has leftNode
	// 	else{
	// 		var lowestNode = node.rightNode; 
	// 		while(lowestNode.leftNode != null)
	// 			lowestNode = lowestNode.leftNode;
	// 		
	// 		if(isLeft)
	// 			parentNode.leftNode = lowestNode;
	// 		else
	// 			parentNode.rightNode = lowestNode;
	// 			lowestNode.rightNode
	// 	}
	// }
	// 
	// var findParentNode = function(node, data)
	// {	
	// 	if(node == null)
	// 		throw "Node not found";		
	// 	if((node.rightNode != null && node.rightNode.data == data)
	// 			 || (node.leftNode != null && node.leftNode.data == data))
	// 		return node;
	// 	
	// 	if(node.data > data)
	// 	{
	// 		findParentNode(node.leftNode, data);
	// 	}
	// 	else
	// 		findParentNode(node.rightNode, data);
	// }
	
	
	this.insert = function(data){
		if(this.root == null)
		{
			this.root = new Node();
			this.root.data = data; this.root.leftNode = null; this.root.rightNode = null;
			return;
		}
		insertInBst(this.root, data);
	}
	
	this.search = function(data)
	{
		return searchBst(this.root, data);
	}
}

var Node = function(){
	this.data = -1;
	this.leftNode = null;
	this.rightNode = null;
}


module.exports = Bst;