#include <iostream>

using namespace std;

int main (){
	float a,b,hasil;
	char aritmatika;
	
	cout << "Selamat datang di Calculator \n";
	cout << "Operator yang tersedia di sini ada tmbah(+), kali(*), kurang(-), bagi(/)\n\n";
	
	cout << "Masukan Nilai pertama : ";
	cin >> a;
	cout << "Masukan operator perhitungan : ";
	cin >> aritmatika;
	cout << "masukan Nilai ke dua : ";
	cin >> b;
	
	switch(aritmatika){
		case '+':
			hasil = a + b;
			cout << "Hasil dari " << a << aritmatika << b << " adalah " << hasil << endl;
			break;
		case '-':
			hasil = a - b;
			cout << "Hasil dari " << a << aritmatika << b << " adalah " << hasil << endl;
			break;
		case '*':
			hasil = a * b;
			cout << "Hasil dari " << a << aritmatika << b << " adalah " << hasil << endl;
			break;
		case '/':
			hasil = a / b;
			cout << "Hasil dari " << a << aritmatika << b << " adalah " << hasil << endl;
			break;
	}
	
	
	
}
