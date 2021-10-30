#include <iostream>

using namespace std;

int main (){
	int a = 10;
	
	cout << "NIlai awal dari a adalah " << a << endl;
	
//	assigment operator
//  variabel = variabel operator ekspresi
//		a	 =    a			-		3 atau bisa juga dibuat formula
//	variabel operator= ekspresi
//		a		-=		  3

	a += 3;
	cout << "ditambah 3 menjadi " << a << endl; 		

	a -= 3;
	cout << "dikurang 3 menjadi " << a << endl; 
	
	a /= 3;
	cout << "dibagi 3 menjadi " << a << endl; 	//>>> tidak menghasilkan desimal karena menggunakan integer bukan float.
	
	a *= 3;
	cout << "dikali 3 menjadi " << a << endl; 
	
	a %= 3;
	cout << "ditambah 3 menjadi " << a << endl; 

	cin.get();
	return 0;
}
