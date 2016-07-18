#include <iostream>

using namespace std;

const unsigned size = 10;
unsigned size1 = 29;

int main(){
	int test1[size] = {};
	char test2[size1];

	unsigned test3[10] = {};

	for(auto i : test1){
		cout << i << endl;
	}

	decltype(test1) test4;

	return 0;
}