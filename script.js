//your code here
let arr=['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let articlelessarray=[];
let mp={};
let regexp = /\bthe\b|\ba\b|\ban\b/gi;
for(let i=0; i<arr.length; i++){
	let articlelessitem = arr[i].replace(regexp, "").trim();
	articlelessarray.push(articlelessitem);
	mp[articlelessitem]=arr[i];
}
articlelessarray.sort();
let ans=[];
for(let i of articlelessarray){
	ans.push(mp[i]);
}
console.log(ans);