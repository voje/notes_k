#include <iostream>
#include <fstream>

using namespace std;

istream& read(istream &input) {
	int sum = 0;
	while ( input ) {
		int in;
		input >> in;
		if( input.fail() ) {
			input.clear();
			char c;
			input >> c;
			cout << c << endl;
		} else {
			sum += in;
		}
	}
	cout << "sum: " << sum << endl;
	return input;
}

int main() {
	int in;

	/*
	//console io
	while( cin >> in ) {
		cout << "you wrote: \t" << in << endl;
	}

	//file io
	ifstream input("./read.txt");	
	while ( input >> in ) {
		cout << "file wrote: \t" << in << endl;
	}
	*/

	//file io passed into function
	ifstream input("./read.txt");
	read(input);

	return 0;
}