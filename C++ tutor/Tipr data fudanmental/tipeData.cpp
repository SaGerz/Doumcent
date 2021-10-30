#include <iostream>
#include <limits>

using namespace std;

int main (){
	//Bilangan bulat	
	int a = 5;
	long b = 6;
	short c = 7;	
	
 	//Bilangan decimal
	float d = 1.0;
	double e = 0.5;
	
	//Character
	char f = 'a';	
	 	
	//Boolean
    //bool g = true;
	 	
	cout << a << endl; 
	cout << sizeof(a) << " byte" << endl;
 	
	//numeric_limits bisa digunakan untuk melihat nilai maksimal dan minimum pada sebuah bilangan	
 	// unsigned itu tidak bertanda jadi bit tidak dipaki +/- sehingga nilai maksimal menjadi lebih banyak	
	cout << numeric_limits<unsigned int>::max() << endl;
	cout << numeric_limits<unsigned int>::min() << endl;
	
	cin.get();
	return 0;
 }
