#include <iostream>

using namespace std;

int main(){
	int a = 2;
	int b = 1;
	
	bool hasil1;
	bool hasil2;

	//Komparasi, realtion expresions
	//Bernilai true jika 1 dan false jika 0	
	
	//sebanding
	hasil1 = (a == b);
	//tidak sebanding	
	hasil2 = (a != b);	
	
	//lebih dari
	hasil1 = (a > b);
	//kurang dari
	hasil2 = (a < b); 
	
	//lebih dari sama dengan
	hasil1 = (a >= b);		
	//Kurang dari sama dengan		
	hasil2 = (a <= b);
	
	cout << hasil1 << endl;
	cout << hasil2 << endl;		
	
	return 0;
}
