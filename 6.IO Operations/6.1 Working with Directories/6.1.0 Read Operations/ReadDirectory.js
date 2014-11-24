var fileSystem=require('fs');

var readDirCallBack=function(err,files)
{
	if(err)
	{
		console.log(err);
	}
	else
	{
		files.forEach(function(file) {
    		console.log(file);
		});
	}
}
fileSystem.readdir('../',readDirCallBack);