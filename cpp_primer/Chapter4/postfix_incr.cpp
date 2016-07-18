#include <iostream>

using namespace std;

int main(){
	int a[] = {1, 2, 3, 4, 5};

	int *pi = begin(a);
	while(pi != end(a)){
		cout << *pi++ << endl;
	}

	return 0;
}