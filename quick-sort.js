var QuickSort = function(){
	
	var swap = function(input, x, y)
	{
		var temp = input[x];
		input[x] = input[y];
		input[y] = temp; 
	}
	
	var sortPivot = function(input, min, max){
		if(min >= max)
			return;
		var pivot = input[max];
		var pivotIndex = max;
		for(var i = min; i < max; i++)
		{
			if(input[i] > pivot && pivotIndex > i)
			{
				swap(input, i, pivotIndex);
				pivotIndex = i;
			}
			else if (input[i] < pivot && pivotIndex < i){
				swap(input, i, pivotIndex);
				pivotIndex = i;
			}
		}
		sortPivot(input, min, pivotIndex - 1)
		sortPivot(input, pivotIndex + 1, max);
	};
	
	this.sort = function(input){
		sortPivot(input, 0, input.length - 1);
		return input;
	};
};

module.exports = QuickSort;