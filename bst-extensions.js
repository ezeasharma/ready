var BST = require('./bst');

var BstExtensions = function(bst){
	this.bst = bst;
	
	this.LCA = function(data1, data2){
		var path1 = [];
		var path2 = [];
		
		findPath(this.bst.root, data1, path1);
		findPath(this.bst.root, data2, path2);
		
		var i = path1.length -1 , j = path2.length - 1;
		var lca = -1
		while(i >= 0 && j >= 0)
		{
			if(path1[i] == path2[j])
			{
				lca = path1[i];
				i--;j--;
				continue;
			}
			break;
		}
		return lca;
	}
	
	
	var findPath = function(node, data, path){
		if(node == null)
			return;
		if(node.data > data)
			findPath(node.leftNode, data, path);
		else if(node.data < data)
			findPath(node.rightNode, data, path);
		else if(node.data == data)
		{
			path.push(data);
			return;
		}
		if(path.length > 0)
			path.push(node.data);	
	}
};

module.exports = BstExtensions;