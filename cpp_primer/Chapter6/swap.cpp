#include <iostream>

using namespace std;

void swap(int *a, int *b) {
	int *tmp = a;
	a = b;
	b = tmp;
}

int main() {
	int a = 5;
	int b = 10;

	cout << "a: " << a << ", b: " << b << endl;
	swap(a, b);
	cout << "a: " << a << ", b: " << b << endl;

	return 0;
}
