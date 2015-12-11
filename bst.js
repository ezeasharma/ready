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
	
	this.delete = function(data)
	{
		var parentNode = findParentNode(this.root, data);
		var node, isLeft;
		var isRoot = false;;
		
		if(parentNode == null)
		{
			node = this.root;
			isRoot = true;
		}		
		else if(parentNode.leftNode != null && parentNode.leftNode.data == data)
		{
			node = parentNode.leftNode;
			isLeft = true;
		}
		else{
			node = parentNode.rightNode;
			isLeft = false;
		}
			
		//Case 1 No right child
		if(node.rightNode == null)
		{
			if(isRoot)
				this.root = node.leftNode;
			else if(isLeft)
				parentNode.leftNode = node.leftNode;
			else
				parentNode.rightNode = node.leftNode;
		}
		
		//case 2 if rightNode has no left child
		else if(node.rightNode.leftNode == null)
		{
			if(isRoot)
				this.root = node.rightNode;
			else if(isLeft)
				parentNode.leftNode = node.rightNode;
			else
				parentNode.rightNode = node.rightNode;
				
			node.rightNode.leftNode = node.leftNode;
		}
		
		//case 3 - rightNode has leftNode
		else{
			var lowestNode = node.rightNode.leftNode;
			var parentNodeOfLowest = node.rightNode;  
			while(lowestNode.leftNode != null)
			{
				parentNodeOfLowest = lowestNode;
				lowestNode = lowestNode.leftNode;
			}
			
			parentNodeOfLowest.leftNode = lowestNode.rightNode;
			if(isRoot)
				this.root = lowestNode;
			else if(isLeft)
				parentNode.leftNode = lowestNode;
			else
				parentNode.rightNode = lowestNode;
				
			lowestNode.rightNode = node.rightNode;
			lowestNode.leftNode = node.leftNode;
		}
	}
	
	var findParentNode = function(node, data)
	{	
		if(node == null)
			throw "Node not found";
		if(node.data == data)	//this is root node.
		{
			return null;
		}	
			
		if((node.rightNode != null && node.rightNode.data == data)
				 || (node.leftNode != null && node.leftNode.data == data))
			return node;
		
		if(node.data > data)
		{
			return findParentNode(node.leftNode, data);
		}
		else
			return findParentNode(node.rightNode, data);
	}
	
	
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