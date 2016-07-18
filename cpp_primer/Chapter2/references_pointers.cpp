#include <iostream>

using namespace std;

int main(int argc, char **argv){
	int i = 42;
	int *ip = &i;
	int *&r = ip;
	cout << i << ", " << ip << ", " << r << endl;

	int j = 32;
	//int *jp, &s = jp;	//error

	return 0;
}