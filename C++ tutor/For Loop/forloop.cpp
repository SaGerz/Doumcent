#include <iostream>

using namespace std;

int main (){
	cout << "Loop 1" << endl;
	for(int counter = 1; counter < 10; counter++){
		cout << counter << endl;
	}
	
	cout << "\n Loop 2" << endl;
	for(int i = 1; i < 10; i+=2){
		cout << i << endl;
	}

	cout << "\n Loop 3" << endl;
	for(int i = 1; i >= -10; i--){
		cout << i << endl;
	}	
	
	cout << "\n Loop 4" << endl;
	int total = 0;
	for(int i = 1; i <= 10; i++, total+=i){
		cout << i << " || " << total << endl;
	}
	
	return 0;
}
