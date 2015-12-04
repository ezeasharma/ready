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
	
	this.root = createBst(input, 0, input.length - 1);
	
	
	var printInorder = function(node){
		if(node == null)
			return;
		printInorder(node.leftNode);
		console.info(node.data);
		printInorder(node.rightNode);
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
	
	this.search = function(data)
	{
		return searchBst(this.root, data);
	}
	
	this.print = function()
	{
		printInorder(this.root);
	}
}

var Node = function(){
	this.data = -1;
	this.leftNode = null;
	this.rightNode = null;
}


module.exports = Bst;