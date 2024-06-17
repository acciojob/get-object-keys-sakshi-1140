//your JS code here. If required.
let student={
	name:"sam"
};

// Object.prototype.getKeys=function(){
// 	let arr=[];
// 	let obj=this;
// 	for(let t in obj) arr.push(t);
// 	return arr;
// }

Object.prototype.getKeys=function(){
return Object.keys(this);
};