var food = prompt('Pilih Makanan : \n(Cnth : Nasi, daging, susu, hamburger, softdrink)');

switch (food){
	case 'Nasi': 
	case 'daging':	
	case 'susu':
		alert('Anda Memilih makanan yang sehat');
	break;
	case 'hamburger':
	case 'softdrink':
		alert('Anda Memilih Makanan yang Tidak sehat');
	break;	
	default : 
		alert('Yang anda pilih bukanlah makanan');	
}	