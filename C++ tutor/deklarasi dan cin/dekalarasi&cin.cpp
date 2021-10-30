#include <iostream>
using namespace std; // jika menggunakan ini maka dalam menuliskan standment tidak perlu menggunakan std

int main(){
	int a;
	a = 10;
	cout << a << endl;
	
	cout << "Masukan nilai yang anda inginkan : ";	 
	int b;
	cin >> b; 
	cout << "nilai yang anda masukan adalah : ";
	cout << b << endl; 
	
	std::cin.get();
	return 0;
}

