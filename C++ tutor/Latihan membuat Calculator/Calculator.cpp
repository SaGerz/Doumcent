#include <iostream>

using namespace std;

int main (){
	float a,b,hasil;
	char aritmatika;
	
	cout << "Selamat datang di program Calclulator \n ";
	cout << "Operator yang tersedia di sini ada tmbah(+), kali(*), kurang(-), bagi(/)\n\n";
	
	cout << "Masukan Nilai pertama : ";
	cin >> a;
	cout << "Masukan operator perhitungan : ";
	cin >> aritmatika;
	cout << "masukan Nilai ke dua : ";
	cin >> b;
	
	if(aritmatika == '+'){
		hasil = a + b;
		cout << "Hasil dari " << a << aritmatika << b << " adalah " << hasil;
	} else if (aritmatika == '-'){
		hasil = a - b;
		cout << "Hasil dari " << a << aritmatika << b << " adalah " << hasil;
	}else if (aritmatika == '*'){
		hasil = a * b;
		cout << "Hasil dari " << a << aritmatika << b << " adalah " << hasil;
	}else if (aritmatika == '/'){
		hasil = a / b;
		cout << "Hasil dari " << a << aritmatika << b << " adalah " << hasil;
	} else if(aritmatika != true){
		 cout << "Maaf operator atau variabel mungkin salah ";
	}
	 	
	 
	cin.get();
	return 0;
}
