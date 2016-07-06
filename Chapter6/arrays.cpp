#include <iostream>
#include <vector>

using namespace std;

//we cannot copy an array
//when passing an array, it's usually converted into a pointer

//3 ways of reading an array: read until terminated (string), use library begin and end, pass array size as argument

void read_args(int argc, char **argv){
	for (char **arg = argv; arg != argv + argc; arg++) {
		cout << *arg << endl;
	}	
}

void read_cstring(const char *str) {
	while (*str) {
		cout << *str;
		++str;
	}
	cout << endl;
}

void read_with_library(const int *beg, const int *end) {
	//top level const: we can change the pointer, not the underlying object
	for (; beg != end; ++beg) {
		cout << *beg << endl;
	}
}

void read_with_library1(const int *beg, const int *end) {
	while (beg != end) {
		//beg++, *(copy of old beg)
		cout << *beg++ << endl;
	}
}

void read_vector(vector<int> &vec) {
	cout << "read_vector" << endl;
	for (vector<int>::iterator i = vec.begin(); i != vec.end(); ++i) {
		cout << *i << endl;
	}
}

int main(int argc, char **argv) {
	//declare a few arrays
	int arr1[5];
	int arr2[] = {1, 2, 3};
	//int arr3[]; //err

	//declare a few vectors
	//vector<int> vec1(arr1); //err
	vector<int> vec2{1, 2, 3, 4, 5};
	vector<string> vec3(4, "chair");

	cout << "Size of arr1: " << sizeof(arr1)/sizeof(arr1[0]) << endl;
	cout << "Size of arr2: " << sizeof(arr2)/sizeof(arr2[0]) << endl;

	cout << "Size of vec2: " << vec2.size() << endl;
	cout << "Size of vec3: " << vec3.size() << endl;

	//use functions
	read_args(argc, argv);

	char test_str[12] = "test string";
	read_cstring(test_str);
	read_with_library(begin(arr2), end(arr2));
	read_with_library1(begin(arr2), end(arr2));
	read_vector(vec2);

	return 0;
}