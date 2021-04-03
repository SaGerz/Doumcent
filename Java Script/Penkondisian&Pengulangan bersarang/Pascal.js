var r = '';	

for(var p = 0; p <= 6; p++){
	for(q = 0; q < p; q++){
		r+= '1';
	}
	r+= '\n';					
	r+= '\t';
}  
console.log(r);
