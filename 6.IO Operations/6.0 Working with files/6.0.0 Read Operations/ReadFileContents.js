var fs=require('fs');

fs.readFile("../samplefile.txt", function(err, data){

	if(err)
	{
		console.log(err);
	}
	else
	{
		console.log(data);
	}
});