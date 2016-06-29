#include <iostream>
#include <typeinfo>

using namespace std;

int main(int argc, char **argv){
	const int v2 = 0;
	int v1 = v2;
	int *p1 = &v1, &r1 = v1;
	const int *p2 = &v2, *const p3 = &v2, &r2 = v2;

	//testing
	r1 = v2;
	p1 = (int *)p2;
	p1 = (int *)p3;
	p2 = p1;
	p2 = p3;

	//testing auto
	const int i = 42;
	auto j = i;
	const auto &k = i;
	auto *p = &i;
	const auto j2 = i, &k2 = i;

	cout << typeid(j2).name() << endl;

	return 0;
}