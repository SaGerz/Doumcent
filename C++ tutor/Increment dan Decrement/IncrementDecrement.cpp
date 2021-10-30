#include <iostream>

using namespace std;

int main(){
	//increment dan decrement
	//preincrement dan postincrement
	int a = 5;
	int b = 5;
	
	//postincrement
	cout << a << endl;
	a++; //>> dia akan memprint dulu lalu dijumlah(perlu diketahui bahwa ini bisa juga menggunakan pengurangan yaitu a-- yang berarti a = a-1)
	cout << a << endl << endl;
	

	//preincrement
	cout << b << endl;
	++b; //>> dia sama seperti postincrement namun dia akan dijumlah dulu lalu di print
	cout << b << endl;

	return 0;	
}
