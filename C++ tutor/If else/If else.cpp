#include <iostream>


using namespace std;

int main (){
	int a;
	
	cout << "Masukan angka : ";
	cin >> a;
	
	if(a == 3){
		cout << "Nilai ini adalah 3" << endl;
	} else if (a == 5){
		cout << "Nilai ini adalah 5" << endl;
	} else if (a == 1){
		cout << "Nilai ini adalah 1" << endl;
	} else {
		cout << "Ini bukan nilai 3 , 5, maupun 1" << endl;
	}
	
	cout << "Selesai" << endl;
	
	cin.get();
	return 0;
	
}
