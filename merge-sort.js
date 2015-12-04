var MergeSort = function(){
	
	var merge = function(arr, start, mid, end){
		var tempLeft = [];
		var tempRight = [];
		
		for(var p = start; p <= mid; p++)
		{
			tempLeft.push(arr[p]);
		}
		for(var p = mid + 1; p <= end; p++)
		{
			tempRight.push(arr[p]);
		}
		
		var  k = start;
		var i = 0, j = 0;
		while(i < tempLeft.length && j < tempRight.length)
		{
			if(tempLeft[i] < tempRight[j])
			{
				arr[k] = tempLeft[i];
				i++;
			}
			else
			{
				arr[k] = tempRight[j];
				j++;
			}
			k++;
		}
		
		while(i < tempLeft.length){
			arr[k] = tempLeft[i];
			k++; i++;
		}
		
		while(j < tempRight.length)
		{
			arr[k] = tempRight[j];
			j++; k++
		}
	}
	
	var divide = function(arr, begin, end)
	{
		if(begin >= end)
			return;
			
		var mid = Math.floor(begin + (end - begin)/2);
		divide(arr, begin, mid);
		divide(arr, mid + 1, end);
		merge(arr, begin, mid, end);
	}
	this.sort = function(arr)
	{
		divide(arr, 0, arr.length - 1);
		//console.log(arr);
		return arr;
	}	
}

module.exports = MergeSort;