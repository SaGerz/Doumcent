#include <iostream>

using namespace std;

int main(){
	int a = 6;
	int b = 4;
	
	int hasil;
	
	//operator ada + - * / %
	// Pertambahan
	hasil = a + b;
	cout << a << " + " << b << " = " << hasil << endl;		

	//Pengurangan
	hasil = a - b;
		cout << a << " - " << b << " = " << hasil << endl;
	
	//Perkalian
	hasil = a * b;
		cout << a << " x " << b << " = " << hasil << endl;	

	//Pembagian >> jika pembagian hasil dan salah satu dari variabel harus menggunakan float bukan menggunakan int agar bisa berjalan.
	hasil = a / b;
		cout << a << " / " << b << " = " << hasil << endl;		

	//Modulus
	hasil = a % b;
		cout << a << " % " << b << " = " << hasil << endl;		

	//Urutan eksekusi >> sama seperti halnya matematika urutan pengerjaan diutamakan mulai dari kurung kali/bagi dan tambah/kurang.
	hasil = (a + b) * a;
		cout << hasil << endl;


	cin.get();
	return 0;
}
