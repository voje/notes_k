#include <iostream>
#include <initializer_list>

using namespace std;

void read_args(char **argv) {
	/*
	for (char *i = begin(argv); i != end(argv); ++i) {
		cout << *i << endl;
	}
	*/
	char *pbeg = begin(*argv);
}

int mian(int argc, char **argv) {
	read_args(argv);

	return 0;
}