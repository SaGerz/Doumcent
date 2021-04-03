var s = '';
var z = '';

for(var i = 0; i < 25; i++){
	for(var j = 0; j <= i; j++){
		s+= '*';
	} 
	s+='\n';
} for(var x = 25; x > 0; x--){
 	for(var y = 0; y < x; y++){
 		z+= '*'
 	}
 	z+= '\n';
}
console.log(s + z);


