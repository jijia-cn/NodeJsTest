
/*
exports.world = function()
{
	console.log("Hello World");
}
//*/
function Hello(){
	var name;
	this.name = function(setName)
	{
		name = setName;
	};
	this.sayHello = function(){
		console.log("Hello "+name);
	};
}

// exports.hello = Hello;
module.exports = Hello; 