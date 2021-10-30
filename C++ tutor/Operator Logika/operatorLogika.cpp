#include<iostream>

using namespace std;

int main(){
	int a = 3;
	int b = 2;
	
	bool hasil;
	//Operator logika itu ada not(!), and(&&), or(||) 

	//not >> memabikan keadaan semisal ada var bernilai true jika ditambakan operator not akan menjadi false begitu sebaliknya.
	hasil = !(a > b);

	//and >> jika nilai true bertemu true maka menghasilkan true dan sisanya false.
	cout << "untuk and \n";
	hasil = (a == 3) && (b == 2); // true dan true
	cout << hasil << endl;	
	hasil = (a == 4) && (b == 2); // false dan true
	cout << hasil << endl;	
	hasil = (a == 3) && (b == 4); // true dan false
	cout << hasil << endl;	
	hasil = (a == 4) && (b == 4); // false dan false
	cout << hasil << endl;		
	
	//or >> jika nilai false bertemu false maka menghasilkan false dan sisanya bernilai true.
	cout << "untuk or \n";
	hasil = (a == 3) || (b == 2); // true dan true
	cout << hasil << endl;	
	hasil = (a == 4) || (b == 2); // false dan true
	cout << hasil << endl;	
	hasil = (a == 3) || (b == 4); // true dan false
	cout << hasil << endl;	
	hasil = (a == 4) || (b == 4); // false dan false
	cout << hasil << endl;
	
	
	
	return 0;
}
